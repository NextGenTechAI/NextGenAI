import React, { useState } from 'react';
import { PAYMENT_DETAILS } from '../data/content';
import {
  CreditCard,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from 'lucide-react';

export const PaymentSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const paymentItems = [
    { key: 'bank', label: 'Beneficiary Bank', value: PAYMENT_DETAILS.bankName },
    { key: 'title', label: 'Account Title', value: PAYMENT_DETAILS.accountTitle },
    { key: 'account', label: 'Account Number', value: PAYMENT_DETAILS.accountNumber },
    { key: 'iban', label: 'IBAN (International Bank Account Number)', value: PAYMENT_DETAILS.iban },
  ];

  return (
    <section id="payment-info" className="py-16 relative bg-dark-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expandable Accordion Card */}
        <div className="rounded-3xl bg-dark-900/90 border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300">
          
          {/* Header Bar */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-dark-850/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-expanded={isExpanded}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized Accounts</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Verified Payment &amp; Remittance Details
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Click to {isExpanded ? 'collapse' : 'reveal'} authorized bank coordinates &amp; transfer guidelines.
                </p>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-dark-850 border border-gray-700 text-gray-300">
              {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Collapsible Content */}
          {isExpanded && (
            <div className="p-6 sm:p-8 pt-0 border-t border-cyan-500/15 space-y-6 animate-in fade-in duration-300">
              
              {/* Important Instruction Header */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 leading-relaxed flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Pre-Transfer Requirement:</strong> Customers must confirm their specific service package, final agreed pricing, and formal written scope with our team before transferring funds.
                </p>
              </div>

              {/* Bank Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentItems.map((item) => {
                  const isCopied = copiedKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className="p-4 rounded-2xl bg-dark-950 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex items-center justify-between group"
                    >
                      <div className="space-y-1 overflow-hidden pr-2">
                        <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                          {item.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white font-mono tracking-wide truncate block">
                          {item.value}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopy(item.key, item.value)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition-all shrink-0 ${
                          isCopied
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                            : 'bg-dark-850 border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/80 hover:border-cyan-400'
                        }`}
                        title="Copy to clipboard"
                        aria-label={`Copy ${item.label}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-[11px]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="text-[11px] hidden sm:inline">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Payment Safety Notice */}
              <div className="p-5 rounded-2xl bg-dark-950 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-start space-x-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-300 block uppercase tracking-wider text-[11px]">
                    Payment Safety Notice
                  </span>
                  <p>
                    {PAYMENT_DETAILS.safetyNotice}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Verification Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-dark-950 border border-cyan-500/20">
                <div className="text-xs text-gray-300">
                  Transferred already? Submit your payment receipt to WhatsApp:
                  <span className="font-mono text-cyan-300 ml-1 font-bold">
                    {PAYMENT_DETAILS.whatsappNumber}
                  </span>
                </div>
                <a
                  href={`${PAYMENT_DETAILS.whatsappUrl}?text=${encodeURIComponent(
                    'Hello NextGenAI, I have completed payment and would like to submit my transaction receipt for verification.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2 shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit Receipt on WhatsApp</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

