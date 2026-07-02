import React, { useEffect, useState } from 'react';
import { GITHUB_URL } from '../siteLinks';

const NAV_ITEMS = [
  { name: 'Platform', id: 'platform' },
  { name: 'Lineup', id: 'lineup' },
  { name: 'Roadmap', id: 'roadmap' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ease-out-expo ${
        scrolled || isMenuOpen
          ? 'border-b border-white/10 bg-hexa-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand: hexagon mark + wordmark */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 font-display text-sm tracking-[0.24em] text-white"
            aria-label="Scroll to top"
          >
            <img src="/logo-nav.png" alt="" width={40} height={36} className="h-9 w-auto" />
            {/* Michroma's line box carries extra descent; nudge to the mark's optical center. */}
            <span className="-translate-y-[2px] leading-none">HEXAKINETICA</span>
          </button>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer border-none bg-transparent font-mono-plex text-xs uppercase tracking-[0.18em] text-white/60 transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-plex text-xs uppercase tracking-[0.18em] text-white/60 transition-colors duration-200 hover:text-white"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="-m-2 p-4 text-white transition-colors duration-200 hover:bg-white/10"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="font-mono-plex text-xs font-bold uppercase tracking-[0.18em]">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute w-full border-t border-white/10 bg-hexa-bg md:hidden"
        >
          <div className="space-y-1 px-4 pb-6 pt-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full px-3 py-3 text-left font-mono-plex text-sm uppercase tracking-[0.18em] text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 font-mono-plex text-sm uppercase tracking-[0.18em] text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
