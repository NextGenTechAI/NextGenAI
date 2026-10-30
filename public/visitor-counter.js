/**
 * NextGenAI — Live Visitor Statistics Engine
 * File: visitor-counter.js
 * 
 * Implements:
 * 1. Total Visitors: All-time deduplicated unique visitors (via anonymous browser UUID in localStorage)
 * 2. Today's Visitors: Deduplicated unique visitors for the current PKT day (resets at 00:00:00 PKT, UTC+5)
 * 3. Online Visitors: Active sessions in real-time with 5-minute inactivity window and multi-tab sync
 * 4. Total Page Views: Tracks wholesale catalog & services page views
 * 
 * Supports:
 * - Mode A: Zero-Setup (CountAPI / CounterAPI with resilient local persistence)
 * - Mode B: Firebase Realtime Database (Multi-device WebSockets & presence)
 */

(function () {
  'use strict';

  // 1. Load and Normalize Configuration
  const config = window.VISITOR_COUNTER_CONFIG || {};
  const settings = config.settings || {};
  const zeroSetup = config.zeroSetup || {};
  const firebaseConfig = config.firebase || {};

  const PREFIX = settings.storagePrefix || 'nextgenai_visitor_';
  const ACTIVITY_WINDOW_MS = (settings.activityWindowMinutes || 5) * 60 * 1000;
  const HEARTBEAT_INTERVAL_MS = (settings.heartbeatIntervalSeconds || 15) * 1000;

  // Safe accessor for seed / baseline counts
  function getSeed(key, defaultVal = 0) {
    if (settings.seedCounts && typeof settings.seedCounts[key] === 'number') {
      return settings.seedCounts[key];
    }
    if (settings.baselineOffset && typeof settings.baselineOffset[key] === 'number') {
      return settings.baselineOffset[key];
    }
    return defaultVal;
  }

  // Cross-tab synchronization via BroadcastChannel
  let presenceChannel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      presenceChannel = new BroadcastChannel('nextgenai_visitor_presence');
    }
  } catch (e) {}

  // Logger
  function log(...args) {
    if (settings.debug !== false) {
      console.log('%c[VisitorCounter]', 'color: #00F0FF; font-weight: bold;', ...args);
    }
  }

  // Storage Helpers
  function getStoredNumber(key, fallback = 0) {
    try {
      const val = localStorage.getItem(PREFIX + key);
      const parsed = parseInt(val, 10);
      return !isNaN(parsed) && parsed >= 0 ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setStoredNumber(key, num) {
    try {
      localStorage.setItem(PREFIX + key, String(Math.max(0, Math.floor(num))));
    } catch (e) {}
  }

  // Unique Anonymous Browser UUID
  function getOrCreateVisitorUUID() {
    let uuid = null;
    try {
      uuid = localStorage.getItem(PREFIX + 'uuid');
      if (!uuid) {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
          uuid = crypto.randomUUID();
        } else {
          uuid = 'uuid_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
        }
        localStorage.setItem(PREFIX + 'uuid', uuid);
      }
    } catch (e) {
      uuid = 'session_' + Date.now().toString(36);
    }
    return uuid;
  }

  // Tab Session ID
  function getOrCreateSessionId() {
    let sid = null;
    try {
      sid = sessionStorage.getItem(PREFIX + 'session_id');
      if (!sid) {
        sid = 'tab_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
        sessionStorage.setItem(PREFIX + 'session_id', sid);
      }
    } catch (e) {
      sid = 'tab_' + Math.random().toString(36).substring(2, 10);
    }
    return sid;
  }

  const visitorUUID = getOrCreateVisitorUUID();
  const sessionId = getOrCreateSessionId();

  let lastUserActivity = Date.now();
  let isUserActive = true;
  let heartbeatTimer = null;

  // 2. Pakistan Standard Time (PKT, UTC+5) Helpers
  function getPKTDate() {
    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pktMs = utcMs + ((settings.utcOffsetHours ?? 5) * 3600000);
    return new Date(pktMs);
  }

  function getPKTDateString() {
    const d = getPKTDate();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function getMsUntilPKTMidnight() {
    const pkt = getPKTDate();
    const nextMidnight = new Date(pkt);
    nextMidnight.setHours(24, 0, 0, 0); // Next 00:00:00 PKT
    return Math.max(1000, nextMidnight.getTime() - pkt.getTime());
  }

  // Initial State from Local Storage / Seeds
  const currentPKTDate = getPKTDateString();
  let statsState = {
    totalVisitors: getStoredNumber('total_count', getSeed('totalVisitors', 0)),
    todayVisitors: getStoredNumber('today_count_' + currentPKTDate, getSeed('todayVisitors', 0)),
    onlineVisitors: getStoredNumber('online_count', Math.max(1, getSeed('onlineVisitors', 1))),
    totalPageViews: getStoredNumber('views_count', getSeed('totalPageViews', 0))
  };

  // 3. Remote CountAPI (https://countapi.mileshilliard.com/api/v1) & Fallback Client
  async function queryRemoteCounter(action, keyName) {
    const keyPrefix = zeroSetup.keyPrefix || 'nextgenai_corp';
    const fullKey = `${keyPrefix}_${keyName}`;
    const baseUrl = (zeroSetup.apiUrl || 'https://countapi.mileshilliard.com/api/v1').replace(/\/+$/, '');
    const timeoutMs = zeroSetup.timeoutMs || 4000;

    // 1. Primary: CountAPI (Single Key route: /hit/{key} or /get/{key})
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const url = `${baseUrl}/${action}/${encodeURIComponent(fullKey)}`;
      const res = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.value === 'number') {
          log(`CountAPI [${action}] ${fullKey} =>`, data.value);
          return data.value;
        }
      }
    } catch (err) {
      log(`CountAPI primary attempt failed for ${fullKey}: ${err.message}`);
    }

    // 2. Fallback: CounterAPI.dev (GET /{namespace}/{key}/up or /{namespace}/{key})
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const fallbackBase = (zeroSetup.fallbackApiUrl || 'https://api.counterapi.dev/v1').replace(/\/+$/, '');
      const fallbackUrl = action === 'hit'
        ? `${fallbackBase}/${encodeURIComponent(keyPrefix)}/${encodeURIComponent(keyName)}/up`
        : `${fallbackBase}/${encodeURIComponent(keyPrefix)}/${encodeURIComponent(keyName)}`;
      const res = await fetch(fallbackUrl, {
        method: 'GET',
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.count === 'number') {
          log(`CounterAPI fallback [${action}] ${keyName} =>`, data.count);
          return data.count;
        }
      }
    } catch (err2) {
      log(`CounterAPI fallback attempt failed for ${keyName}: ${err2.message}`);
    }

    return null;
  }

  // 4. Online Presence Engine (5-Minute Window, Multi-Tab Coordination)
  function recordPresenceHeartbeat() {
    try {
      const now = Date.now();
      const sessionsRaw = localStorage.getItem(PREFIX + 'active_sessions');
      let sessions = sessionsRaw ? JSON.parse(sessionsRaw) : {};

      // Purge sessions older than 5 minutes
      const cleaned = {};
      for (const [sId, time] of Object.entries(sessions)) {
        if (now - time < ACTIVITY_WINDOW_MS) {
          cleaned[sId] = time;
        }
      }

      if (isUserActive) {
        cleaned[sessionId] = now;
      } else {
        delete cleaned[sessionId];
      }

      localStorage.setItem(PREFIX + 'active_sessions', JSON.stringify(cleaned));

      const activeTabsCount = Object.keys(cleaned).length;
      updateOnlineDisplay(activeTabsCount);

      if (presenceChannel) {
        presenceChannel.postMessage({ type: 'HEARTBEAT', activeCount: activeTabsCount });
      }
    } catch (e) {
      updateOnlineDisplay(1);
    }
  }

  function removePresence() {
    try {
      const sessionsRaw = localStorage.getItem(PREFIX + 'active_sessions');
      if (sessionsRaw) {
        const sessions = JSON.parse(sessionsRaw);
        delete sessions[sessionId];
        localStorage.setItem(PREFIX + 'active_sessions', JSON.stringify(sessions));
        const remaining = Object.keys(sessions).length;
        if (presenceChannel) {
          presenceChannel.postMessage({ type: 'LEAVE', activeCount: remaining });
        }
      }
    } catch (e) {}
  }

  function updateOnlineDisplay(localActiveCount) {
    const seedOnline = getSeed('onlineVisitors', 0);
    // At least 1 (the current user is actively browsing)
    const effectiveActive = Math.max(1, localActiveCount || 1);
    const finalOnline = effectiveActive + seedOnline;
    statsState.onlineVisitors = finalOnline;
    setStoredNumber('online_count', finalOnline);
    renderStats();
  }

  function setupActivityListeners() {
    const resetActivity = () => {
      lastUserActivity = Date.now();
      if (!isUserActive) {
        isUserActive = true;
        log('User resumed activity. Presence restored.');
        recordPresenceHeartbeat();
      }
    };

    ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'].forEach(evt => {
      window.addEventListener(evt, resetActivity, { passive: true });
    });

    // Inactivity checker (every 10 seconds)
    setInterval(() => {
      if (Date.now() - lastUserActivity > ACTIVITY_WINDOW_MS) {
        if (isUserActive) {
          isUserActive = false;
          log('5-minute inactivity window reached. Session marked idle.');
          removePresence();
          recordPresenceHeartbeat();
        }
      }
    }, 10000);

    // Cross-tab presence updates
    if (presenceChannel) {
      presenceChannel.onmessage = (event) => {
        if (event.data && typeof event.data.activeCount === 'number') {
          updateOnlineDisplay(event.data.activeCount);
        }
      };
    }

    // Storage event for multi-window sync
    window.addEventListener('storage', (e) => {
      if (e.key === PREFIX + 'active_sessions') {
        try {
          const sessions = JSON.parse(e.newValue || '{}');
          updateOnlineDisplay(Object.keys(sessions).length);
        } catch (err) {}
      }
    });

    window.addEventListener('beforeunload', removePresence);
    window.addEventListener('pagehide', removePresence);
  }

  // 5. Core Execution: Mode A (Zero-Setup)
  async function runModeA() {
    log('Running Visitor Counter in Mode A (Zero-Setup)...');
    const todayPKT = getPKTDateString();

    // Deduplication Flags
    const isAllTimeNewVisitor = localStorage.getItem(PREFIX + 'alltime_registered') !== 'true';
    const lastVisitDate = localStorage.getItem(PREFIX + 'last_visit_pkt_date');
    const isNewVisitorToday = lastVisitDate !== todayPKT;

    log(`Visitor Status -> UUID: ${visitorUUID}`);
    log(`All-time New: ${isAllTimeNewVisitor} | New Today (${todayPKT}): ${isNewVisitorToday}`);

    // --- Metric 1: Total Visitors (All-Time Deduplicated) ---
    if (isAllTimeNewVisitor) {
      const currentTotal = getStoredNumber('total_count', getSeed('totalVisitors', 0));
      const newTotal = currentTotal + 1;
      setStoredNumber('total_count', newTotal);
      statsState.totalVisitors = newTotal;
      localStorage.setItem(PREFIX + 'alltime_registered', 'true');
      localStorage.setItem(PREFIX + 'registered_at', new Date().toISOString());
      log('Incremented All-Time Total Visitors to:', newTotal);
      renderStats();

      // Cloud synchronization via CountAPI
      queryRemoteCounter('hit', 'total_visitors').then(remoteVal => {
        if (typeof remoteVal === 'number') {
          const seed = getSeed('totalVisitors', 0);
          const resolved = Math.max(statsState.totalVisitors, seed + remoteVal);
          if (resolved !== statsState.totalVisitors) {
            statsState.totalVisitors = resolved;
            setStoredNumber('total_count', resolved);
            renderStats();
          }
        }
      });
    } else {
      // Returning visitor -> Deduplicated read-only
      queryRemoteCounter('get', 'total_visitors').then(remoteVal => {
        if (typeof remoteVal === 'number') {
          const seed = getSeed('totalVisitors', 0);
          const resolved = Math.max(statsState.totalVisitors, seed + remoteVal);
          if (resolved !== statsState.totalVisitors) {
            statsState.totalVisitors = resolved;
            setStoredNumber('total_count', resolved);
            renderStats();
          }
        }
      });
    }

    // --- Metric 2: Today's Visitors (PKT Standard Day Deduplicated) ---
    const todayKey = 'today_' + todayPKT.replace(/-/g, '_');
    if (isNewVisitorToday) {
      const currentToday = getStoredNumber('today_count_' + todayPKT, getSeed('todayVisitors', 0));
      const newToday = currentToday + 1;
      setStoredNumber('today_count_' + todayPKT, newToday);
      statsState.todayVisitors = newToday;
      localStorage.setItem(PREFIX + 'last_visit_pkt_date', todayPKT);
      log(`Incremented Today's Visitors (${todayPKT}) to:`, newToday);
      renderStats();

      queryRemoteCounter('hit', todayKey).then(remoteToday => {
        if (typeof remoteToday === 'number') {
          const seed = getSeed('todayVisitors', 0);
          const resolved = Math.max(statsState.todayVisitors, seed + remoteToday);
          if (resolved !== statsState.todayVisitors) {
            statsState.todayVisitors = resolved;
            setStoredNumber('today_count_' + todayPKT, resolved);
            renderStats();
          }
        }
      });
    } else {
      // Returning today -> Deduplicated read-only
      queryRemoteCounter('get', todayKey).then(remoteToday => {
        if (typeof remoteToday === 'number') {
          const seed = getSeed('todayVisitors', 0);
          const resolved = Math.max(statsState.todayVisitors, seed + remoteToday);
          if (resolved !== statsState.todayVisitors) {
            statsState.todayVisitors = resolved;
            setStoredNumber('today_count_' + todayPKT, resolved);
            renderStats();
          }
        }
      });
    }

    // --- Metric 4: Total Page Views (Wholesale Catalog & Services) ---
    const hasViewedCatalog = sessionStorage.getItem(PREFIX + 'catalog_viewed');
    if (!hasViewedCatalog && settings.trackCatalogViews !== false) {
      const currentViews = getStoredNumber('views_count', getSeed('totalPageViews', 0));
      const newViews = currentViews + 1;
      setStoredNumber('views_count', newViews);
      statsState.totalPageViews = newViews;
      sessionStorage.setItem(PREFIX + 'catalog_viewed', 'true');
      log('Recorded Catalog / Page View. Total views:', newViews);
      renderStats();

      queryRemoteCounter('hit', 'catalog_views').then(remoteViews => {
        if (typeof remoteViews === 'number') {
          const seed = getSeed('totalPageViews', 0);
          const resolved = Math.max(statsState.totalPageViews, seed + remoteViews);
          if (resolved !== statsState.totalPageViews) {
            statsState.totalPageViews = resolved;
            setStoredNumber('views_count', resolved);
            renderStats();
          }
        }
      });
    } else {
      queryRemoteCounter('get', 'catalog_views').then(remoteViews => {
        if (typeof remoteViews === 'number') {
          const seed = getSeed('totalPageViews', 0);
          const resolved = Math.max(statsState.totalPageViews, seed + remoteViews);
          if (resolved !== statsState.totalPageViews) {
            statsState.totalPageViews = resolved;
            setStoredNumber('views_count', resolved);
            renderStats();
          }
        }
      });
    }

    renderStats();
  }

  // 6. Mode B: Firebase Realtime Database
  async function runModeB() {
    log('Running Visitor Counter in Mode B (Firebase Realtime Database)...');
    const fb = firebaseConfig;

    if (!fb || !fb.databaseURL) {
      console.warn('[VisitorCounter] Firebase databaseURL not configured. Reverting to Mode A.');
      return runModeA();
    }

    try {
      if (typeof window.firebase === 'undefined') {
        await loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
        await loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js');
      }

      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(fb);
      }

      const db = window.firebase.database();
      const todayPKT = getPKTDateString();

      const isAllTimeNewVisitor = localStorage.getItem(PREFIX + 'alltime_registered') !== 'true';
      const lastVisitDate = localStorage.getItem(PREFIX + 'last_visit_pkt_date');
      const isNewVisitorToday = lastVisitDate !== todayPKT;

      // 1. Total Visitors
      const totalRef = db.ref('stats/totalVisitors');
      if (isAllTimeNewVisitor) {
        totalRef.transaction(curr => (curr || 0) + 1);
        localStorage.setItem(PREFIX + 'alltime_registered', 'true');
      }
      totalRef.on('value', snap => {
        if (snap.exists()) {
          statsState.totalVisitors = getSeed('totalVisitors', 0) + snap.val();
          renderStats();
        }
      });

      // 2. Today's Visitors (PKT Day)
      const todayRef = db.ref('stats/daily/' + todayPKT);
      if (isNewVisitorToday) {
        todayRef.transaction(curr => (curr || 0) + 1);
        localStorage.setItem(PREFIX + 'last_visit_pkt_date', todayPKT);
      }
      todayRef.on('value', snap => {
        if (snap.exists()) {
          statsState.todayVisitors = getSeed('todayVisitors', 0) + snap.val();
          renderStats();
        }
      });

      // 3. Catalog Page Views
      const viewsRef = db.ref('stats/catalogPageViews');
      const hasViewedCatalog = sessionStorage.getItem(PREFIX + 'catalog_viewed');
      if (!hasViewedCatalog && settings.trackCatalogViews !== false) {
        viewsRef.transaction(curr => (curr || 0) + 1);
        sessionStorage.setItem(PREFIX + 'catalog_viewed', 'true');
      }
      viewsRef.on('value', snap => {
        if (snap.exists()) {
          statsState.totalPageViews = getSeed('totalPageViews', 0) + snap.val();
          renderStats();
        }
      });

      // 4. Real-time WebSockets Online Presence
      const connectedRef = db.ref('.info/connected');
      const myPresenceRef = db.ref('presence/' + visitorUUID + '_' + sessionId);

      connectedRef.on('value', snap => {
        if (snap.val() === true) {
          myPresenceRef.onDisconnect().remove();
          myPresenceRef.set({
            active: true,
            lastPing: window.firebase.database.ServerValue.TIMESTAMP
          });
        }
      });

      const presencePoolRef = db.ref('presence');
      presencePoolRef.on('value', snap => {
        const count = snap.numChildren();
        updateOnlineDisplay(count);
      });

    } catch (err) {
      console.error('[VisitorCounter] Firebase Mode failed, falling back to Mode A:', err);
      runModeA();
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // 7. PKT Midnight Reset Scheduler (00:00:00 PKT)
  function schedulePKTMidnightReset() {
    const msUntilMidnight = getMsUntilPKTMidnight();
    const minutesLeft = Math.round(msUntilMidnight / 60000);
    log(`Next PKT Daily Reset at 00:00:00 PKT in ${minutesLeft} min (${(msUntilMidnight / 1000).toFixed(0)}s).`);

    setTimeout(() => {
      log('>>> 00:00:00 PKT Reached! Resetting Today\'s Visitors counter...');
      const newPKTDay = getPKTDateString();

      // Reset today count to 1 (active visitor continuing into new day)
      statsState.todayVisitors = 1;
      setStoredNumber('today_count_' + newPKTDay, 1);
      localStorage.setItem(PREFIX + 'last_visit_pkt_date', newPKTDay);
      renderStats();

      // Schedule next midnight
      schedulePKTMidnightReset();
    }, msUntilMidnight + 1000);
  }

  // 8. Public API Function to Track Catalog Views
  window.trackCatalogView = function (force = false) {
    const alreadyTracked = sessionStorage.getItem(PREFIX + 'catalog_viewed');
    if (!alreadyTracked || force) {
      log('Tracking Wholesale Catalog & Services View...');
      const currentViews = getStoredNumber('views_count', getSeed('totalPageViews', 0));
      const newViews = currentViews + 1;
      setStoredNumber('views_count', newViews);
      statsState.totalPageViews = newViews;
      sessionStorage.setItem(PREFIX + 'catalog_viewed', 'true');
      renderStats();

      if (config.mode === 'firebase' && window.firebase && window.firebase.apps.length) {
        window.firebase.database().ref('stats/catalogPageViews').transaction(c => (c || 0) + 1);
      } else {
        queryRemoteCounter('hit', 'catalog_views');
      }
    }
  };

  // 9. Format Numbers with Commas
  function formatNumber(num) {
    const n = Math.max(0, parseInt(num, 10) || 0);
    return n.toLocaleString('en-US');
  }

  // 10. DOM Rendering with Smooth Counting Animation
  function renderStats() {
    const totalEl = document.getElementById('statTotalVisitors');
    const todayEl = document.getElementById('statTodayVisitors');
    const onlineEl = document.getElementById('statOnlineVisitors');
    const viewsEl = document.getElementById('statTotalViews');

    if (totalEl) animateCount(totalEl, statsState.totalVisitors);
    if (todayEl) animateCount(todayEl, statsState.todayVisitors);
    if (onlineEl) animateCount(onlineEl, statsState.onlineVisitors);
    if (viewsEl) animateCount(viewsEl, statsState.totalPageViews);
  }

  function animateCount(element, target) {
    const current = parseInt(element.getAttribute('data-value') || '0', 10);
    if (isNaN(current) || current === target) {
      element.textContent = formatNumber(target);
      element.setAttribute('data-value', String(target));
      return;
    }

    element.setAttribute('data-value', String(target));
    const duration = 650;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      const val = Math.floor(current + (target - current) * ease);
      element.textContent = formatNumber(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = formatNumber(target);
      }
    }

    requestAnimationFrame(step);
  }

  // 11. Testing & Simulation Utilities (Exposed on window)
  window.NextGenVisitorStats = {
    getStats: () => ({
      ...statsState,
      pktDate: getPKTDateString(),
      pktTime: getPKTDate().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
      mode: config.mode || 'zero-setup',
      uuid: visitorUUID,
      sessionId: sessionId
    }),
    trackCatalogView: () => window.trackCatalogView(true),
    simulateNewVisitor: () => {
      localStorage.removeItem(PREFIX + 'alltime_registered');
      localStorage.removeItem(PREFIX + 'last_visit_pkt_date');
      localStorage.removeItem(PREFIX + 'uuid');
      sessionStorage.removeItem(PREFIX + 'catalog_viewed');
      log('Simulating brand new unique visitor visit...');
      runModeA();
    },
    resetAllStats: () => {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith(PREFIX)) {
          localStorage.removeItem(key);
        }
      }
      for (let i = sessionStorage.length - 1; i >= 0; i--) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith(PREFIX)) {
          sessionStorage.removeItem(key);
        }
      }
      log('All local visitor statistics reset. Re-running Mode A...');
      statsState = {
        totalVisitors: getSeed('totalVisitors', 0),
        todayVisitors: getSeed('todayVisitors', 0),
        onlineVisitors: Math.max(1, getSeed('onlineVisitors', 1)),
        totalPageViews: getSeed('totalPageViews', 0)
      };
      renderStats();
      runModeA();
    },
    getPKTTime: () => getPKTDate().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
  };

  // 12. Initialization
  function init() {
    log('Initializing NextGenAI Visitor Counter...');
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
    
    // Initial display of numbers
    renderStats();

    // Setup active presence and heartbeat
    setupActivityListeners();
    recordPresenceHeartbeat();
    heartbeatTimer = setInterval(recordPresenceHeartbeat, HEARTBEAT_INTERVAL_MS);

    // Setup PKT midnight reset timer
    schedulePKTMidnightReset();

    // Hook catalog tracking to navigation links & button clicks
    document.querySelectorAll('a[href="#services"], button[onclick*="services"], #exploreServicesBtn').forEach(el => {
      el.addEventListener('click', () => {
        window.trackCatalogView(true);
      });
    });

    // Observer for scrolling to the services / catalog section
    try {
      const servicesSection = document.getElementById('services');
      if (servicesSection && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              window.trackCatalogView(false);
              observer.disconnect();
            }
          });
        }, { threshold: 0.2 });
        observer.observe(servicesSection);
      }
    } catch (e) {}

    // Run active tracking mode
    if (config.mode === 'firebase') {
      runModeB();
    } else {
      runModeA();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
