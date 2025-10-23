'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active nav based on scroll position
      const sections = ['home', 'services', 'portfolio', 'pricing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveNav(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, navName) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(navName);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', section: 'home', icon: '🏠' },
    { name: 'Services', section: 'services', icon: '🛠️' },
    { name: 'Portfolio', section: 'portfolio', icon: '💼' },
    { name: 'Pricing', section: 'pricing', icon: '💰' },
    { name: 'Contact', section: 'contact', icon: '📞' }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-2xl shadow-sm py-3 border-b border-gray-200/80' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Single instance */}
            <div className="flex items-center gap-3">
              <div 
                className={`text-2xl lg:text-3xl font-black transition-all duration-500 ${
                  isScrolled 
                    ? 'text-gray-900' 
                    : 'text-white'
                }`}
              >
                RBM Studios
              </div>
              <div className={`hidden lg:block w-1 h-8 rounded-full transition-all duration-500 ${
                isScrolled ? 'bg-[#FF6B35]' : 'bg-white/60'
              }`}></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-1.5 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section, item.name)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 min-w-[100px] justify-center ${
                    activeNav === item.name
                      ? 'bg-[#FF6B35] text-white shadow-md shadow-orange-500/25'
                      : isScrolled 
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scrollToSection('contact', 'Contact')}
                className={`hidden sm:flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group relative overflow-hidden ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl' 
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-white/20'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-base">🚀</span>
                  Start Project
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isScrolled ? '' : 'rounded-xl'
                }`}></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all duration-500 group ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 border border-gray-300' 
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                <span className={`block w-5 h-0.5 rounded-full transition-all duration-500 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-[#FF6B35]' : 'group-hover:bg-[#FF6B35]'}`}></span>
                <span className={`block w-5 h-0.5 rounded-full mt-1.5 transition-all duration-500 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:bg-[#FF6B35]'}`}></span>
                <span className={`block w-5 h-0.5 rounded-full mt-1.5 transition-all duration-500 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-[#FF6B35]' : 'group-hover:bg-[#FF6B35]'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible backdrop-blur-md' 
            : 'opacity-0 invisible'
        }`}
        style={{
          background: 'linear-gradient(135deg, #0B1F3F 0%, #1E3A8A 70%, #0B1F3F 100%)'
        }}
      >
        <div className="flex flex-col min-h-screen px-6 py-8">
          {/* Header - Removed duplicate logo */}
          <div className="flex items-center justify-between mb-16">
            {/* Empty div for spacing - logo removed from mobile menu */}
            <div className="w-6"></div>
            {/* <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-white/20"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section, item.name)}
                className={`w-full text-left py-5 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-4 group ${
                  activeNav === item.name
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${
                  activeNav === item.name ? 'text-[#FF6B35]' : ''
                }`}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.name}</span>
                {activeNav === item.name && (
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile CTA & Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <button 
              onClick={() => scrollToSection('contact', 'Contact')}
              className="w-full bg-white text-gray-900 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-2xl mb-8 flex items-center justify-center gap-3"
            >
              <span>💼</span>
              Start Your Project
              <span>🚀</span>
            </button>
            
            <div className="text-center text-white/80 space-y-4">
              <div className="flex items-center justify-center gap-3 text-base">
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">📞</span>
                +91 90000 00000
              </div>
              <div className="flex items-center justify-center gap-3 text-base">
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">📧</span>
                info@rbmstudios.co
              </div>
              <div className="text-white/60 text-sm mt-6 pt-4 border-t border-white/10">
                Professional Digital Agency • Est. 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}