import React, { useState, useEffect } from 'react';
import { PAYMENT_DETAILS } from '../data/content';
import { ContactFormData } from '../types';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Shield,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    serviceCategory: preselectedService || 'AI Solutions',
    budgetRange: 'PKR 100,000 - 500,000',
    requirements: '',
    privacyConsent: false,
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: preselectedService,
      }));
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [whatsappUrlGenerated, setWhatsappUrlGenerated] = useState('');

  const serviceCategories = [
    'Career Assistance (Karachi / Local)',
    'Career Assistance (International / Global)',
    'Business Development & Lead Generation',
    'AI & Intelligent Automation Solutions',
    'Software Development & IT Solutions',
    'Cybersecurity & Security Technology',
    'Digital Transformation & Business Consulting',
    'IT Consulting & Architecture Advisory',
    'Other Inquiries',
  ];

  const budgetRanges = [
    'PKR 100,000 - 500,000',
    'PKR 500,000 - 1,000,000',
    'PKR 1,000,000 - 3,000,000',
    'PKR 3,000,000+ (Enterprise Scope)',
    'To Be Determined / Advisory Discussion',
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Please provide your WhatsApp number (with country code).';
    }
    if (!formData.country.trim()) {
      errs.country = 'Please enter your country/city of residence.';
    }
    if (!formData.requirements.trim() || formData.requirements.trim().length < 15) {
      errs.requirements = 'Please describe your requirements in at least 15 characters.';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must acknowledge and consent to the privacy terms.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateMessageBody = (): string => {
    return (
      `*New NextGenAI Service Inquiry*\n\n` +
      `*Client Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Country/City:* ${formData.country}\n` +
      `*Service Category:* ${formData.serviceCategory}\n` +
      `*Estimated Budget:* ${formData.budgetRange}\n\n` +
      `*Requirements Overview:*\n${formData.requirements}\n\n` +
      `_Submitted via NextGenAI Corporate Web Portal_`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const message = generateMessageBody();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/923060824762?text=${encodedMessage}`;

    setWhatsappUrlGenerated(waUrl);
    setShowSummaryModal(true);
  };

  const handleCopyMessage = () => {
    const message = generateMessageBody();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Inquiry Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Extraordinary.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Whether you are pursuing a career opportunity, expanding your business, or building an intelligent technology solution, NextGenAI is ready to discuss your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Official Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider block">
                    Fastest Response Channel
                  </span>
                  <h3 className="text-xl font-bold text-white">Official WhatsApp</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect directly with our consulting coordinators for scope discussions, profile reviews, or payment receipt verification.
              </p>

              <div className="p-4 rounded-2xl bg-dark-950 border border-emerald-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Phone / WhatsApp</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-emerald-300 block">
                    {PAYMENT_DETAILS.whatsappNumber}
                  </span>
                </div>
                <a
                  href={PAYMENT_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all flex items-center space-x-1 shadow-md shadow-emerald-950"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Platform Integrity & Data Protection Pill */}
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-cyan-500/20 backdrop-blur-md space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Strict Client Data Confidentiality</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                NextGenAI will never request passwords, banking PINs, OTPs, or confidential banking credentials. We treat all career resumes and commercial requirements under strict non-disclosure principles.
              </p>
            </div>

            {/* Quick Response Matrix */}
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-cyan-500/20 backdrop-blur-md space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Typical Turnaround
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-dark-950 border border-gray-800">
                  <span className="text-gray-400 block text-[11px]">WhatsApp Inquiries</span>
                  <span className="font-bold text-cyan-300">Within 2–4 Hours</span>
                </div>
                <div className="p-3 rounded-xl bg-dark-950 border border-gray-800">
                  <span className="text-gray-400 block text-[11px]">Technical Scoping</span>
                  <span className="font-bold text-cyan-300">Same Day / 24h</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Send Your Project or Career Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill in your details to generate a comprehensive inquiry packet for review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-cyan-500/20'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.email ? 'border-red-500' : 'border-cyan-500/20'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* WhatsApp & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      WhatsApp Number <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+92 300 1234567"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.whatsapp ? 'border-red-500' : 'border-cyan-500/20'
                      }`}
                    />
                    {errors.whatsapp && <p className="text-[11px] text-red-400">{errors.whatsapp}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      Country &amp; City <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Karachi, Pakistan / Dubai, UAE"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.country ? 'border-red-500' : 'border-cyan-500/20'
                      }`}
                    />
                    {errors.country && <p className="text-[11px] text-red-400">{errors.country}</p>}
                  </div>
                </div>

                {/* Service Category & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      Service Category <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-cyan-500/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    >
                      {serviceCategories.map((cat, idx) => (
                        <option key={idx} value={cat} className="bg-dark-950 text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-300">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-cyan-500/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    >
                      {budgetRanges.map((b, idx) => (
                        <option key={idx} value={b} className="bg-dark-950 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project / Career Requirements Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300">
                    Project or Career Requirements <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Briefly describe your objectives, current career status or organization needs, expected deliverables, and target timeline..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      errors.requirements ? 'border-red-500' : 'border-cyan-500/20'
                    }`}
                  />
                  {errors.requirements && <p className="text-[11px] text-red-400">{errors.requirements}</p>}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="space-y-1 pt-1">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-cyan-500/40 bg-dark-950 text-cyan-500 focus:ring-cyan-400"
                    />
                    <span className="text-xs text-gray-400">
                      I agree that NextGenAI may process my contact details to evaluate my inquiry, prepare a customized engagement proposal, and contact me via WhatsApp or email.
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="text-[11px] text-red-400">{errors.privacyConsent}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to WhatsApp Inquiry &amp; Summary</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                  <p className="text-[11px] text-gray-500 text-center mt-2.5">
                    Direct browser submission generates an encrypted, pre-formatted message packet ready for immediate dispatch.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Summary Modal with Real Transmission Option */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl rounded-3xl bg-dark-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h4 className="text-lg font-bold text-white">Inquiry Ready for Transmission</h4>
              </div>
              <button
                onClick={() => setShowSummaryModal(false)}
                className="text-gray-400 hover:text-white text-sm px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-gray-800 text-xs font-mono text-gray-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
              {generateMessageBody()}
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Your inquiry has been compiled. To deliver it instantly to NextGenAI's official consulting team, click below to open your verified WhatsApp chat or copy the message.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrlGenerated}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowSummaryModal(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in Official WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="py-3 px-4 rounded-xl bg-dark-850 hover:bg-dark-800 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all flex items-center justify-center space-x-2"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

