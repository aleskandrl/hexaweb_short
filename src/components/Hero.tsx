import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import heroCadScreenshot from '../assets/images/hero/RobotCountourCad.png';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[700px] overflow-hidden bg-hexa-bg flex items-center">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-hexa-purple/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-hexa-cyan/10 rounded-full blur-[100px]"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c52ff10_1px,transparent_1px),linear-gradient(to_bottom,#8c52ff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            
            <p className="font-display text-2xl text-hexa-cyan tracking-wider">
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
                href="https://github.com/hexakinetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-hexa-cyan/50 text-hexa-cyan font-mono-plex font-bold uppercase text-sm hover:bg-hexa-cyan/10 transition-all flex items-center rounded-md"
              >
                <Terminal size={16} className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative group [perspective:1000px]">
             <div className="absolute -inset-8 bg-hexa-purple/10 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
             
             <div className="relative bg-gradient-to-br from-hexa-purple to-hexa-cyan p-1 rounded-xl shadow-2xl transition-transform duration-500 transform lg:rotate-y-[-10deg] group-hover:rotate-y-0 group-hover:scale-105">
                <div className="bg-black p-2 rounded-lg">
                  <img 
                    src={heroCadScreenshot} 
                    alt="HexaKinetica CAD Blueprint" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};