import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import {
  CheckCircle2,
  FileText,
  MessageSquare,
  FileCheck,
  CreditCard,
  Send,
  PlayCircle,
  AlertCircle,
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    MessageSquare: <MessageSquare className="w-5 h-5" />,
    FileCheck: <FileCheck className="w-5 h-5" />,
    CreditCard: <CreditCard className="w-5 h-5" />,
    Send: <Send className="w-5 h-5" />,
    PlayCircle: <PlayCircle className="w-5 h-5" />,
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-dark-950/60">
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Structured Engagement Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Our transparent 7-step process ensures clear expectations, mutual scope alignment, and verifiable security from initial inquiry to milestone execution.
          </p>
        </div>

        {/* 7-Step Process Display */}
        <div className="relative">
          {/* Subtle Horizontal Desktop Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-500/30 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.slice(0, 4).map((item) => (
              <div
                key={item.step}
                className="group relative p-6 rounded-2xl bg-dark-900/70 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-md">
                      {iconMap[item.iconName] || <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-dark-850 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      Step 0{item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Steps 5, 6, 7 (Centered 3 columns on large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mt-6 lg:max-w-5xl lg:mx-auto">
            {PROCESS_STEPS.slice(4).map((item) => (
              <div
                key={item.step}
                className="group relative p-6 rounded-2xl bg-dark-900/70 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-violet-950/90 border border-violet-500/40 text-violet-400 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-md">
                      {iconMap[item.iconName] || <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-violet-400 bg-dark-850 px-2.5 py-1 rounded-full border border-violet-500/20">
                      Step 0{item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Integrity Notice */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-dark-900/90 border border-cyan-500/20 text-xs text-gray-400 flex items-start space-x-3 text-center sm:text-left">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 hidden sm:block" />
          <p>
            <strong className="text-cyan-300">Important Process Note:</strong> Submitting an inquiry form or requesting an initial consultation does not automatically confirm an order, bind a contract, or guarantee a specific career or business outcome. Formal engagements begin only after mutually signed scope agreements and receipt verification.
          </p>
        </div>

      </div>
    </section>
  );
};

