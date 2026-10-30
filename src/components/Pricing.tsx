import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { Check, AlertTriangle, ArrowRight, Sparkles, Shield } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planTitle: string) => void;
  onOpenPaymentInfo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenPaymentInfo }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-dark-900/70">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear, Scope-Based Packages
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Transparent investment tiers for executive career positioning and bespoke enterprise technology consulting. All scopes and deliverables are finalized prior to engagement.
          </p>
        </div>

        {/* Pricing Cards Grid (3 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-dark-950/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                    : 'bg-dark-950/60 border border-cyan-500/20 hover:border-cyan-400/50'
                }`}
              >
                {/* Popular Pill Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Global Program</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Category & Title */}
                  <div>
                    <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                      {plan.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-cyan-500/15">
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                      {plan.unit}
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-300">
                      {plan.price}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer / Regulatory Note */}
                  {plan.disclaimer && (
                    <div className="p-3 rounded-xl bg-dark-900 border border-cyan-500/20 text-[11px] text-gray-400 leading-relaxed">
                      {plan.disclaimer}
                    </div>
                  )}
                </div>

                {/* Card CTA Button */}
                <div className="pt-8 mt-6 border-t border-cyan-500/15">
                  <button
                    onClick={() => onSelectPlan(plan.title)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-cyan-500/25'
                        : 'bg-dark-900 hover:bg-cyan-950/80 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400/60'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance & Payment Terms Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-dark-950/80 border border-cyan-500/20 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Engagement Verification &amp; Payment Security</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                All package deliverables, timelines, milestones, and applicable refund terms must be formally agreed upon prior to transferring funds. We never request payments before confirming mutually approved scope documents.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPaymentInfo}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-dark-900 hover:bg-dark-850 text-cyan-300 border border-cyan-500/40 text-xs font-semibold transition-all hover:border-cyan-400"
          >
            View Verified Payment Details
          </button>
        </div>

      </div>
    </section>
  );
};

