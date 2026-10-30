import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 text-left"
            aria-label="NextGenAI Home"
          >
            {/* SVG Logo Mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-full h-full bg-dark-900 border border-cyan-500/40 rounded-xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-7 h-7">
                  <path
                    d="M24 75 L24 25 L45 25 L76 75 L76 25"
                    fill="none"
                    stroke="url(#navLogoGrad)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="25" r="5" fill="#00F0FF" />
                  <circle cx="76" cy="75" r="5" fill="#8B5CF6" />
                  <defs>
                    <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                NextGen<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">AI</span>
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded uppercase tracking-wider">
                  Enterprise
                </span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest hidden sm:block">
                GLOBAL CAREERS &amp; TECH
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              <span className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 group-hover:from-cyan-300 group-hover:to-violet-500 absolute" />
              <span className="relative px-5 py-2 transition-all ease-out bg-dark-900 rounded-[10px] group-hover:bg-opacity-0 duration-300 flex items-center text-white">
                <Sparkles className="w-4 h-4 mr-1.5 text-cyan-400 group-hover:text-white transition-colors" />
                Let's Connect
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
            >
              Connect
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan" />}
                </button>
              );
            })}
            <div className="pt-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/25"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

