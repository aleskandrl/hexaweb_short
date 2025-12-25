import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

// 1. УДАЛЯЕМ (или комментируем) старый импорт:
// import { HexaLogo } from './HexaLogo';

// 2. ДОБАВЛЯЕМ импорт вашего PNG:
import logoImg from '../assets/images/ui/logo.png';

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
    <header className="sticky top-0 z-50 bg-hexa-bg/90 backdrop-blur-md border-b border-hexa-purple/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div onClick={() => scrollToSection('hero')} className="flex-shrink-0 flex items-center cursor-pointer group">
             <div className="relative mr-1 transition-transform group-hover:scale-105 duration-300">
                {/* Эффект свечения оставляем, он красиво смотрится под логотипом */}
                <div className="absolute inset-0 bg-hexa-purple blur-2xl opacity-20 group-hover:opacity-50 transition-opacity rounded-full"></div>
                
                {/* 3. ЗАМЕНЯЕМ компонент <HexaLogo /> на тег <img> */}
                <img 
                  src={logoImg} 
                  alt="HexaKinetica Logo" 
                  className="w-20 h-20 object-contain relative z-10" 
                />
             </div>
            <div className="flex flex-col justify-center">
                <span className="font-display text-2xl text-white tracking-widest uppercase group-hover:text-hexa-cyan transition-colors leading-none drop-shadow-[0_0_5px_rgba(140,82,255,0.5)]">
                HEXA
                </span>
                <span className="font-display text-lg text-hexa-purple tracking-[0.3em] uppercase leading-none">
                KINETICA
                </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Mission', id: 'market' },
              { name: 'Roadmap', id: 'timeline' },
              { name: 'R&D', id: 'rnd' },
              { name: 'Team', id: 'team' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="relative group bg-transparent border-none cursor-pointer"
              >
                <span className="text-gray-300 font-mono-plex text-sm uppercase tracking-widest group-hover:text-hexa-cyan transition-colors">
                  {item.name}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-hexa-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#98f3ff]"></span>
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://github.com/hexakinetica/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border border-hexa-purple text-hexa-purple px-6 py-2 font-mono-plex text-xs uppercase tracking-wider hover:bg-hexa-purple hover:text-white transition-all shadow-[0_0_10px_rgba(140,82,255,0.3)] hover:shadow-[0_0_20px_rgba(140,82,255,0.6)] active:scale-95"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-hexa-cyan p-2 hover:bg-hexa-purple/20 rounded transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hexa-bg border-t border-hexa-purple/30 absolute w-full shadow-2xl backdrop-blur-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {[
              { name: 'Mission', id: 'market' },
              { name: 'Roadmap', id: 'timeline' },
              { name: 'Current R&D', id: 'rnd' },
              { name: 'Team', id: 'team' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-3 font-display text-white uppercase hover:bg-hexa-purple/20 hover:text-hexa-cyan border-l-2 border-transparent hover:border-hexa-cyan transition-all"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-center w-full bg-hexa-purple text-white py-3 font-mono-plex uppercase tracking-widest hover:bg-purple-700 shadow-[0_0_15px_rgba(140,82,255,0.4)]"
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