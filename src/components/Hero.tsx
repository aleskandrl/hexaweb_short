import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { GITHUB_URL } from '../siteLinks';
import hexaArmNew from '../assets/images/hero/hexaarm-new.png';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[700px] overflow-hidden bg-hexa-bg flex items-center">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-hexa-purple/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-hexa-cyan/10 rounded-full blur-[100px]"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c52ff10_1px,transparent_1px),linear-gradient(to_bottom,#8c52ff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            
            <p className="font-display text-2xl text-white tracking-wider">
                Arm Your Dreams
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight">
              WE BUILD ROBOTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">
                DIFFERENTLY
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 font-mono-plex max-w-xl leading-relaxed border-l-2 border-hexa-purple pl-6">
              Industrial robots are designed for the 10% of the most complex tasks, but sold for 90% of the simplest. We are fixing this by offering an accessible and simple tool built for real work.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToProducts}
                className="bg-hexa-purple text-white px-8 py-4 font-mono-plex font-bold uppercase text-sm hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(140,82,255,0.4)] hover:shadow-[0_0_30px_rgba(140,82,255,0.6)] flex items-center group rounded-md"
              >
                Explore The Ecosystem
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <a 
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-hexa-cyan/50 text-white font-mono-plex font-bold uppercase text-sm hover:bg-white/10 transition-all flex items-center rounded-md"
              >
                <Terminal size={16} className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative group flex items-center justify-center">
             {/* Soft glow backdrop (no framed card) */}
             <div className="absolute inset-0 bg-hexa-purple/15 blur-[100px] rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
             <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-hexa-cyan/10 blur-[90px] rounded-full"></div>

             <img
               src={hexaArmNew}
               alt="HexaArm robotic arm"
               className="relative z-10 max-h-[520px] w-full object-contain rounded-md drop-shadow-[0_0_40px_rgba(140,82,255,0.25)] transition-transform duration-700 group-hover:scale-[1.03]"
             />
          </div>

        </div>
      </div>
    </div>
  );
};
