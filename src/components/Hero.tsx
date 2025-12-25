import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
// Импорт
import heroRobotImg from '../assets/images/hero/hero_robot.jpg';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 border border-hexa-cyan/30 rounded-full bg-hexa-cyan/5 backdrop-blur-sm">
               <span className="w-2 h-2 bg-hexa-cyan rounded-full mr-2 animate-pulse"></span>
               <span className="text-hexa-cyan font-mono-plex text-xs tracking-widest uppercase">Open Source • Hackable • Free</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
              ROBOTICS FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">
                EVERYONE
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 font-mono-plex max-w-xl leading-relaxed border-l-2 border-hexa-purple pl-6">
              $20B+ market – but inaccessible to small players. We are breaking the complexity and cost barriers.
              High performance, fair prices.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToProducts}
                className="bg-hexa-purple text-white px-8 py-4 font-mono-plex font-bold uppercase text-sm hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(140,82,255,0.4)] hover:shadow-[0_0_30px_rgba(140,82,255,0.6)] flex items-center group clip-path-polygon"
              >
                Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <a 
                href="https://github.com/hexakinetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-hexa-cyan/50 text-hexa-cyan font-mono-plex font-bold uppercase text-sm hover:bg-hexa-cyan/10 transition-all flex items-center"
              >
                <Terminal size={16} className="mr-2" />
                Read Docs
              </a>
            </div>
          </div>

          {/* Visual Representation of Robot Arm */}
          <div className="relative h-[500px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-b from-hexa-purple/20 to-transparent opacity-50 rounded-full blur-3xl"></div>
             
             {/* Использование локального изображения */}
             <div 
                className="relative z-10 w-full h-full bg-cover bg-center opacity-80 mix-blend-luminosity rounded-2xl border border-hexa-purple/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${heroRobotImg})` }}
             >
                <div className="absolute inset-0 bg-hexa-purple/20 mix-blend-overlay"></div>
                {/* Floating UI Elements */}
                <div className="absolute top-10 -right-10 bg-hexa-card/90 backdrop-blur border border-hexa-cyan/30 p-4 rounded shadow-[0_0_15px_rgba(152,243,255,0.2)] hidden md:block">
                   <div className="text-hexa-cyan font-mono-plex text-xs mb-1">AXIS STATUS</div>
                   <div className="flex space-x-2">
                      <div className="h-1 w-8 bg-hexa-purple"></div>
                      <div className="h-1 w-4 bg-gray-600"></div>
                   </div>
                   <div className="text-white font-display text-lg mt-1">NORMAL</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};