import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { WhyUs } from './components/WhyUs';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { PaymentSection } from './components/PaymentSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { CanvasBackground } from './components/CanvasBackground';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    handleNavigate('contact');
  };

  const handleSelectPricingPlan = (planTitle: string) => {
    setSelectedServiceForContact(`Pricing Inquiry: ${planTitle}`);
    handleNavigate('contact');
  };

  const handleOpenPaymentInfo = () => {
    handleNavigate('payment-info');
  };

  // Scrollspy to update active section in navbar
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'industries', 'why-us', 'pricing', 'how-it-works', 'payment-info', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Visitor Counter scripts in React mode
  useEffect(() => {
    if (!document.getElementById('visitor-counter-script')) {
      const configScript = document.createElement('script');
      configScript.src = './visitor-counter-config.js';
      configScript.onload = () => {
        const counterScript = document.createElement('script');
        counterScript.id = 'visitor-counter-script';
        counterScript.src = './visitor-counter.js';
        document.body.appendChild(counterScript);
      };
      document.body.appendChild(configScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 selection:bg-cyan-500 selection:text-white font-sans antialiased relative overflow-x-hidden">
      {/* Dynamic Interactive Neural/Constellation Canvas */}
      <CanvasBackground />

      {/* Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <Services onSelectService={handleSelectService} />
        <Industries />
        <WhyUs />
        <Pricing
          onSelectPlan={handleSelectPricingPlan}
          onOpenPaymentInfo={handleOpenPaymentInfo}
        />
        <HowItWorks />
        <PaymentSection />
        <Contact preselectedService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;

