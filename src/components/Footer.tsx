import React from 'react';
import { PAYMENT_DETAILS, SERVICES_DATA } from '../data/content';
import { ArrowUp, Phone, Mail, ExternalLink, Shield, Users, Calendar, Activity, Eye } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-gray-400">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-radial from-cyan-600/5 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-cyan-500/40 flex items-center justify-center p-1.5 shadow-md shadow-cyan-950">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M24 75 L24 25 L45 25 L76 75 L76 25"
                    fill="none"
                    stroke="url(#footLogoGrad)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="25" r="5" fill="#00F0FF" />
                  <circle cx="76" cy="75" r="5" fill="#8B5CF6" />
                  <defs>
                    <linearGradient id="footLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NextGen<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">AI</span>
              </span>
            </button>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Empowering Careers. Accelerating Business. Engineering the Future. A global technology company providing executive career support, enterprise customer acquisition, bespoke artificial intelligence, software engineering, and defensive cybersecurity.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-gray-400">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-dark-900 border border-gray-800 text-cyan-300 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Enterprise Portal</span>
              </span>
              <span>•</span>
              <span className="font-mono text-[11px]">Global Operations</span>
            </div>
          </div>

          {/* Quick Links Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'industries', label: 'Industries' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-cyan-300 transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-cyan-300 transition-colors text-left line-clamp-1 focus:outline-none"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Channel & Back to Top (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Official Contact
            </h4>
            
            <div className="p-4 rounded-xl bg-dark-900 border border-cyan-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-xs text-white">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono font-bold text-emerald-300">
                  {PAYMENT_DETAILS.whatsappNumber}
                </span>
              </div>
              <a
                href={PAYMENT_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Direct WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Live Visitor Analytics Section */}
        <div className="my-10 p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-cyan-500/20 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cyan-500/15">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                  Live Visitor Statistics
                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                    REAL-TIME
                  </span>
                </h4>
                <p className="text-[11px] text-gray-400">
                  Audited platform analytics &amp; continuous traffic telemetry
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-gray-400 bg-dark-950 px-3 py-1.5 rounded-lg border border-gray-800">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Daily Reset: <strong className="text-cyan-300">00:00:00 PKT (UTC+5)</strong></span>
            </div>
          </div>

          {/* 4 Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1: Total Visitors */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-cyan-500/15 hover:border-cyan-400/40 transition-all flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block truncate">Total Visitors</span>
                <span id="statTotalVisitors" className="text-lg sm:text-2xl font-extrabold text-white font-mono tracking-tight" data-value="0">0</span>
                <span className="text-[9px] text-gray-500 block truncate">All-Time Unique</span>
              </div>
            </div>

            {/* Metric 2: Today's Visitors */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-cyan-500/15 hover:border-cyan-400/40 transition-all flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block truncate">Today's Visitors</span>
                <span id="statTodayVisitors" className="text-lg sm:text-2xl font-extrabold text-white font-mono tracking-tight" data-value="0">0</span>
                <span className="text-[9px] text-cyan-400/80 block truncate">PKT Standard Day</span>
              </div>
            </div>

            {/* Metric 3: Online Visitors */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-cyan-500/15 hover:border-cyan-400/40 transition-all flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 relative">
                <Activity className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block truncate">Online Visitors</span>
                <span id="statOnlineVisitors" className="text-lg sm:text-2xl font-extrabold text-emerald-300 font-mono tracking-tight" data-value="0">0</span>
                <span className="text-[9px] text-emerald-400/80 block truncate">Active (5m Window)</span>
              </div>
            </div>

            {/* Metric 4: Total Page Views */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-cyan-500/15 hover:border-cyan-400/40 transition-all flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-violet-950/80 border border-violet-500/30 text-violet-400 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 block truncate">Total Page Views</span>
                <span id="statTotalViews" className="text-lg sm:text-2xl font-extrabold text-white font-mono tracking-tight" data-value="0">0</span>
                <span className="text-[9px] text-gray-500 block truncate">Catalog &amp; Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-8" />

        {/* Required Exact Copyright Line */}
        <div className="footer-bottom text-center py-4">
          <p className="text-xs sm:text-sm text-gray-300">
            Copyright NexGenAI © 2026 Developed by{' '}
            <a
              href="https://murtuzadeveloper.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-colors font-bold underline decoration-cyan-500/50 hover:decoration-cyan-400"
            >
              <strong>Murtuza Developer</strong>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

