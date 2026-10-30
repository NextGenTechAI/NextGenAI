/**
 * NextGenAI — Live Visitor Statistics Configuration
 * File: visitor-counter-config.js
 * 
 * Supports two operating modes:
 * Mode A – 'zero-setup' (Default):
 *   Uses CountAPI (https://countapi.mileshilliard.com/api/v1).
 *   Zero configuration, no API keys, and no backend required.
 * 
 * Mode B – 'firebase':
 *   Uses Firebase Realtime Database for real-time WebSocket synchronization
 *   and multi-user presence tracking.
 */

window.VISITOR_COUNTER_CONFIG = {
  // Operating Mode: 'zero-setup' (Default) or 'firebase'
  mode: 'zero-setup',

  // =========================================================================
  // Mode A: Zero-Setup Configuration (CountAPI)
  // =========================================================================
  zeroSetup: {
    // Official CountAPI base endpoint (GET /hit/{key} and GET /get/{key})
    apiUrl: 'https://countapi.mileshilliard.com/api/v1',
    // Key prefix to prevent collision across public projects
    keyPrefix: 'nextgenai_corp',
    // Fallback counter API if primary is unreachable
    fallbackApiUrl: 'https://api.counterapi.dev/v1',
    // Request timeout in milliseconds
    timeoutMs: 4000
  },

  // =========================================================================
  // Mode B: Firebase Realtime Database (Optional Free Tier)
  // =========================================================================
  // To activate Mode B, change mode to 'firebase' and paste your config here:
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // =========================================================================
  // Operational Settings
  // =========================================================================
  settings: {
    // Timezone: Pakistan Standard Time (PKT, UTC+5)
    timeZone: 'Asia/Karachi',
    utcOffsetHours: 5,

    // Inactivity window for Online Visitors (in minutes)
    activityWindowMinutes: 5,

    // Heartbeat ping interval for active presence (in seconds)
    heartbeatIntervalSeconds: 15,

    // Track wholesale catalog / service views
    trackCatalogViews: true,

    // Storage key prefix in localStorage
    storagePrefix: 'nextgenai_visitor_',

    // Seed / Baseline numbers
    // Set to 0 for pure real counting, or set baseline metrics for production launch
    seedCounts: {
      totalVisitors: 0,
      todayVisitors: 0,
      onlineVisitors: 0,
      totalPageViews: 0
    },

    // Enable detailed debug logging in browser console
    debug: true
  }
};
