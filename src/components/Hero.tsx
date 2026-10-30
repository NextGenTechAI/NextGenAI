import React from 'react';
import { ArrowRight, Globe2, TrendingUp, Cpu, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Mission Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Next-Generation Career, Growth &amp; AI Intelligence</span>
            </div>

            {/* Company Wordmark & Tagline */}
            <div className="space-y-3">
              <div className="text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase">
                Enterprise Technology &amp; Talent Platform
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                NEXTGEN<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">AI</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-cyan-100 to-blue-200 leading-snug">
                Empowering Careers. Accelerating Business. Engineering the Future.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Connecting professionals with global career opportunities, helping businesses discover potential customers, and delivering intelligent technology solutions that drive innovation and growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-dark-900/90 hover:bg-dark-850 text-gray-200 hover:text-white border border-cyan-500/30 hover:border-cyan-400/60 font-semibold text-base transition-all duration-300 backdrop-blur-md flex items-center justify-center"
              >
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* 3 Animated Capability Indicators */}
            <div className="pt-6 border-t border-cyan-500/15">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Core Capability Pillars
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Capability 1 */}
                <div className="group p-3 rounded-xl bg-dark-900/60 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-300 flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Global Career Development
                    </h3>
                    <p className="text-[10px] text-gray-400">Local &amp; Overseas Networks</p>
                  </div>
                </div>

                {/* Capability 2 */}
                <div className="group p-3 rounded-xl bg-dark-900/60 border border-blue-500/20 hover:border-blue-400/50 backdrop-blur-sm transition-all duration-300 flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                      Intelligent Business Growth
                    </h3>
                    <p className="text-[10px] text-gray-400">B2B Pipelines &amp; Lead Gen</p>
                  </div>
                </div>

                {/* Capability 3 */}
                <div className="group p-3 rounded-xl bg-dark-900/60 border border-violet-500/20 hover:border-violet-400/50 backdrop-blur-sm transition-all duration-300 flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-500/30 group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-violet-300 transition-colors">
                      AI-Powered Technology
                    </h3>
                    <p className="text-[10px] text-gray-400">LLMs, Custom Apps &amp; Cyber</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Hero Visual: Sophisticated Abstract AI Visual (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-violet-600/20 blur-2xl animate-pulse-slow" />

              {/* Orbiting Ring 1 */}
              <div className="absolute w-[92%] h-[92%] rounded-full border border-dashed border-cyan-500/30 animate-[spin_25s_linear_infinite]" />

              {/* Orbiting Ring 2 */}
              <div className="absolute w-[76%] h-[76%] rounded-full border border-violet-500/30 animate-[spin_18s_linear_infinite_reverse]" />

              {/* Orbiting Ring 3 with Node Badges */}
              <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-400/30 animate-[spin_12s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-glow-cyan" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-violet-400 shadow-lg shadow-violet-500/50" />
              </div>

              {/* Central Abstract Neural Core Card */}
              <div className="relative z-10 w-[260px] h-[260px] rounded-3xl bg-dark-900/85 backdrop-blur-xl border border-cyan-500/40 p-5 shadow-2xl shadow-cyan-950/60 flex flex-col justify-between overflow-hidden">
                
                {/* Core Header */}
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-cyan-300 tracking-wider">
                      NEURAL_CORE_V4
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    ONLINE
                  </span>
                </div>

                {/* Animated SVG Neural Nexus Graphic */}
                <div className="py-2 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-24 h-24 filter drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                    <polygon
                      points="60,10 105,35 105,85 60,110 15,85 15,35"
                      fill="none"
                      stroke="rgba(0,240,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                    <polygon
                      points="60,25 90,42 90,78 60,95 30,78 30,42"
                      fill="rgba(6,182,212,0.06)"
                      stroke="url(#coreGrad)"
                      strokeWidth="2"
                    />
                    <circle cx="60" cy="60" r="16" fill="url(#coreCenterGrad)" />
                    <circle cx="60" cy="60" r="7" fill="#FFFFFF" />

                    {/* Nodes */}
                    <circle cx="60" cy="25" r="4" fill="#00F0FF" />
                    <circle cx="90" cy="42" r="3.5" fill="#3B82F6" />
                    <circle cx="90" cy="78" r="4" fill="#8B5CF6" />
                    <circle cx="60" cy="95" r="3.5" fill="#00F0FF" />
                    <circle cx="30" cy="78" r="4" fill="#3B82F6" />
                    <circle cx="30" cy="42" r="3.5" fill="#8B5CF6" />

                    {/* Lines */}
                    <line x1="60" y1="25" x2="60" y2="44" stroke="#00F0FF" strokeWidth="1.5" />
                    <line x1="60" y1="76" x2="60" y2="95" stroke="#8B5CF6" strokeWidth="1.5" />
                    <line x1="30" y1="60" x2="44" y2="60" stroke="#3B82F6" strokeWidth="1.5" />
                    <line x1="76" y1="60" x2="90" y2="60" stroke="#00F0FF" strokeWidth="1.5" />

                    <defs>
                      <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                      <radialGradient id="coreCenterGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Real-time Telemetry Stats */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-300 pt-2 border-t border-cyan-500/20">
                  <div className="flex items-center space-x-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LATENCY: 12ms</span>
                  </div>
                  <div className="flex items-center space-x-1.5 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SECURE: 100%</span>
                  </div>
                </div>

              </div>

              {/* Floating Pill Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 z-20 px-3.5 py-1.5 rounded-xl bg-dark-950/90 border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md flex items-center space-x-2 animate-float">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Global Talent Matrix</span>
              </div>

              {/* Floating Pill Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 z-20 px-3.5 py-1.5 rounded-xl bg-dark-950/90 border border-violet-500/40 text-xs font-semibold text-violet-300 shadow-xl backdrop-blur-md flex items-center space-x-2 animate-float [animation-delay:2s]">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Enterprise AI Agents</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

