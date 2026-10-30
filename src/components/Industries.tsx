import React from 'react';
import { INDUSTRIES_DATA } from '../data/content';
import {
  Server,
  Sparkles,
  Landmark,
  Activity,
  ShieldAlert,
  ShoppingBag,
  Radio,
  Factory,
  Truck,
  GraduationCap,
  Building2,
  Briefcase,
  Users,
  Zap,
} from 'lucide-react';

export const Industries: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Landmark: <Landmark className="w-5 h-5" />,
    Activity: <Activity className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5" />,
    Radio: <Radio className="w-5 h-5" />,
    Factory: <Factory className="w-5 h-5" />,
    Truck: <Truck className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    Briefcase: <Briefcase className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-dark-950/70">
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>Global Market Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Bridging sector-specific challenges with intelligent automation, custom software, enterprise cybersecurity, and strategic talent pipelines across 14 high-impact domains.
          </p>
        </div>

        {/* 14 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="group p-5 rounded-xl bg-dark-900/60 border border-cyan-500/15 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-dark-850 border border-cyan-500/30 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                  {iconMap[ind.iconName] || <Server className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-cyan-500/10 flex items-center justify-between text-[11px] text-gray-500 group-hover:text-cyan-400 transition-colors">
                <span>Domain Ready</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

