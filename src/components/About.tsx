import React from 'react';
import { Globe, TrendingUp, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const cards = [
    {
      title: 'Global Opportunities',
      subtitle: 'Career Acceleration & Placement',
      description:
        'Helping professionals explore relevant employment opportunities across local and international markets with tailored profile positioning and network access.',
      icon: Globe,
      features: [
        'Local Karachi & nationwide career roadmaps',
        'International market opportunity mapping',
        'Executive CV & LinkedIn profile optimization',
        'Interview strategy & executive readiness',
      ],
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-400/60',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-950/80 border-cyan-500/40',
    },
    {
      title: 'Business Growth',
      subtitle: 'Customer Acquisition & Sales Pipelines',
      description:
        'Helping organizations identify potential customers, develop sales pipelines, and explore new markets through structured B2B outbound strategies and automated outreach.',
      icon: TrendingUp,
      features: [
        'Targeted B2B lead generation & validation',
        'High-converting sales funnel architecture',
        'Cross-border market expansion research',
        'CRM automation & deal workflow tuning',
      ],
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-400/60',
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-950/80 border-blue-500/40',
    },
    {
      title: 'Intelligent Technology',
      subtitle: 'AI, Software & Cybersecurity',
      description:
        'Building AI applications, software platforms, automation systems, and security solutions that turn complex modern engineering challenges into competitive market advantages.',
      icon: Cpu,
      features: [
        'Custom generative AI & autonomous agent pipelines',
        'Scalable cloud software & API microservices',
        'Zero-trust cybersecurity & threat mitigation',
        'Legacy modernization & digital transformation',
      ],
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
      borderColor: 'group-hover:border-violet-400/60',
      iconColor: 'text-violet-400',
      iconBg: 'bg-violet-950/80 border-violet-500/40',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-950/40">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span>About NextGenAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Partner. Multiple Growth Opportunities.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            NextGenAI combines strategic networking, business development, artificial intelligence, software engineering, and security technologies to help individuals and organizations navigate an increasingly competitive global marketplace.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl bg-dark-900/70 border border-cyan-500/20 ${card.borderColor} backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Corner Glow */}
                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${card.gradient} rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-xl ${card.iconBg} border flex items-center justify-center ${card.iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-gray-400 bg-dark-850 px-2.5 py-1 rounded-full border border-gray-700">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-cyan-500/10">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="relative z-10 pt-6 mt-6 border-t border-cyan-500/10">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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

