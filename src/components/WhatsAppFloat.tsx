import React, { useState } from 'react';
import { PAYMENT_DETAILS } from '../data/content';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip / Quick Card */}
      {showTooltip && (
        <div className="mb-3 p-4 rounded-2xl bg-dark-900 border border-emerald-500/40 shadow-2xl backdrop-blur-xl w-64 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                NextGenAI Support
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white text-xs"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            Have questions about career roadmaps, AI solutions, or enterprise consulting? Chat with us live!
          </p>
          <a
            href={PAYMENT_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-md"
          >
            <span>Start Conversation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Pulsing Aura */}
        <div className="absolute -inset-1 rounded-full bg-emerald-500/40 blur-md group-hover:bg-emerald-400/60 animate-pulse transition-all" />

        <a
          href={PAYMENT_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          aria-label="Chat with NextGenAI on WhatsApp"
        >
          {/* Custom crisp SVG WhatsApp icon for maximal clarity */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.7C7.02 10.92 7.91 12.09 8.03 12.25C8.16 12.41 9.77 14.9 12.25 15.97C12.84 16.23 13.3 16.38 13.66 16.5C14.25 16.69 14.79 16.66 15.22 16.6C15.7 16.53 16.7 15.99 16.91 15.41C17.11 14.82 17.11 14.32 17.05 14.22C16.99 14.12 16.83 14.06 16.58 13.93C16.34 13.81 15.11 13.2 14.88 13.12C14.65 13.04 14.49 13 14.32 13.25C14.16 13.5 13.69 14.06 13.55 14.22C13.41 14.37 13.27 14.39 13.03 14.27C12.79 14.14 12.01 13.89 11.08 13.06C10.36 12.41 9.87 11.61 9.73 11.37C9.59 11.12 9.71 10.99 9.84 10.87C9.95 10.76 10.08 10.59 10.2 10.45C10.32 10.31 10.36 10.2 10.44 10.04C10.52 9.88 10.48 9.73 10.42 9.61C10.36 9.5 9.87 8.3 9.67 7.81C9.47 7.33 9.27 7.4 9.12 7.39C8.97 7.39 8.81 7.38 8.65 7.38L8.53 7.33Z" />
          </svg>

          {/* Unread Alert Ping */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-cyan-400 border-2 border-dark-950 rounded-full" />
        </a>
      </div>
    </div>
  );
};

