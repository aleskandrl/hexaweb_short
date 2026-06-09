import React, { useState } from 'react';
import { GITHUB_URL } from '../siteLinks';

import logoImg from '../assets/images/ui/logo-nav.png';

const NAV_ITEMS = [
  { name: 'Mission', id: 'market' },
  { name: 'Roadmap', id: 'timeline' },
  { name: 'Team', id: 'team' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-hexa-bg/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0 flex items-center cursor-pointer group bg-transparent border-0 p-0 text-left"
            aria-label="Scroll to hero section"
          >
             <div className="relative mr-1 transition-transform group-hover:scale-105 duration-300">
                {/* The glow effect remains because it supports the brand mark without adding icon clutter. */}
                <div className="absolute inset-0 bg-hexa-purple blur-2xl opacity-20 group-hover:opacity-50 transition-opacity rounded-full"></div>
                
                {/* Brand logo image */}
                <img 
                  src={logoImg} 
                  alt="Hexakinetica Logo" 
                  className="w-20 h-20 object-contain relative z-10" 
                />
             </div>
            <div className="flex flex-col justify-center">
                <span className="font-display text-2xl text-white tracking-widest uppercase group-hover:text-white transition-colors leading-none drop-shadow-[0_0_5px_rgba(140,82,255,0.5)]">
                HEXA
                </span>
                <span className="font-display text-lg text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan tracking-[0.3em] uppercase leading-none">
                KINETICA
                </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="relative group bg-transparent border-none cursor-pointer"
              >
                <span className="text-gray-300 font-mono-plex text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-hexa-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#98f3ff]"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-mono-plex text-xs uppercase tracking-widest">GitHub</a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border border-white/60 text-white px-6 py-2 font-mono-plex text-xs uppercase tracking-wider hover:bg-white/10 transition-all shadow-[0_0_10px_rgba(255,255,255,0.12)] hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded transition-colors"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="font-mono-plex text-xs font-bold uppercase tracking-widest">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-hexa-bg border-t border-white/10 absolute w-full shadow-2xl backdrop-blur-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-3 font-display text-white uppercase hover:bg-white/10 hover:text-white border-l-2 border-transparent hover:border-hexa-cyan transition-all"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-center w-full bg-transparent border border-white/60 text-white py-3 font-mono-plex uppercase tracking-widest hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.14)]"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
