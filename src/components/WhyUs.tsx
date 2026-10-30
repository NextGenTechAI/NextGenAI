import React from 'react';
import { DIFFERENTIATORS_DATA } from '../data/content';
import {
  Globe,
  Brain,
  Target,
  Sliders,
  Workflow,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Sliders: <Sliders className="w-6 h-6" />,
    Workflow: <Workflow className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-dark-950/40">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why NextGenAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Innovation Meets Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            By harmonizing global career development with cutting-edge artificial intelligence, robust software engineering, and defensive cybersecurity, we provide a unified partner for long-term growth.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS_DATA.map((diff, index) => (
            <div
              key={diff.id}
              className="group relative p-7 rounded-2xl bg-dark-900/70 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-dark-850 border border-cyan-500/30 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:border-cyan-400 transition-all duration-300 flex items-center justify-center shadow-md">
                    {iconMap[diff.iconName] || <Brain className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400 bg-dark-800 px-2 py-0.5 rounded border border-gray-700">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cyan-500/10 flex items-center justify-between text-xs text-cyan-400 font-medium">
                <span>Enterprise Grade</span>
                <span className="w-2 h-0.5 bg-cyan-400 rounded-full group-hover:w-8 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

