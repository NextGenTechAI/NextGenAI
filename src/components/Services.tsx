import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import {
  Compass,
  TrendingUp,
  Cpu,
  Code,
  ShieldCheck,
  Boxes,
  Layers,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Code: <Code className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Boxes: <Boxes className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
  };

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_DATA
      : activeFilter === 'career'
      ? SERVICES_DATA.filter((s) => s.id === 'careers')
      : activeFilter === 'business'
      ? SERVICES_DATA.filter((s) => s.id === 'business-dev' || s.id === 'digital-transformation')
      : SERVICES_DATA.filter(
          (s) =>
            s.id === 'ai-automation' ||
            s.id === 'software-dev' ||
            s.id === 'cybersecurity' ||
            s.id === 'it-consulting'
        );

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-900/60">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Services Designed for Impact
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Delivering strategic synergy between career acceleration, outbound business growth, bespoke artificial intelligence, software engineering, and defensive cybersecurity.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Services (7)' },
              { id: 'tech', label: 'AI & Engineering' },
              { id: 'business', label: 'Business & Growth' },
              { id: 'career', label: 'Career Development' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-dark-850/80 text-gray-300 hover:text-white hover:bg-dark-800 border border-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (7 interactive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isFullWidthOnLarge = index === 6 && filteredServices.length === 7;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-dark-950/70 border border-cyan-500/20 hover:border-cyan-400/60 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/60 flex flex-col justify-between ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Subtle Card Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

                <div className="space-y-5">
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between">
                    <div className="p-3.5 rounded-xl bg-dark-900 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-all duration-300 shadow-md">
                      {iconMap[service.iconName] || <Cpu className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-cyan-400/80 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      SERVICE 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="pt-3 border-t border-cyan-500/10">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                      Key Capabilities:
                    </div>
                    <ul className={`space-y-2 ${isFullWidthOnLarge ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6' : ''}`}>
                      {service.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explicit Regulatory / Service Disclaimer if applicable */}
                  {service.disclaimer && (
                    <div className="mt-4 p-3 rounded-xl bg-dark-900/90 border border-amber-500/30 text-amber-300 text-[11px] leading-relaxed flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 mt-6 border-t border-cyan-500/15">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-dark-900 hover:bg-cyan-950/80 border border-cyan-500/30 hover:border-cyan-400/70 text-cyan-300 hover:text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center space-x-1.5 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

