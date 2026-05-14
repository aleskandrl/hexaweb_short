import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { GITHUB_URL } from '../siteLinks';
import heroCadScreenshot from '../assets/images/hero/RobotCountourCad.png';
import hexaArmMiniImg from '../assets/images/products/hexaarm-mini.png';
import hexaArmProImg from '../assets/images/products/hexaarm-pro.png';

const HERO_VISUALS = [
  {
    id: '01',
    title: 'CAD Blueprint',
    subtitle: 'Design source and mechanical architecture',
    image: heroCadScreenshot,
    alt: 'HexaKinetica CAD Blueprint',
    accent: 'from-hexa-purple to-hexa-cyan',
  },
  {
    id: '02',
    title: 'HexaArm Mini Maker',
    subtitle: 'Accessible robot arm for learning and prototyping',
    image: hexaArmMiniImg,
    alt: 'HexaArm Mini Maker render',
    accent: 'from-hexa-cyan to-white',
  },
  {
    id: '03',
    title: 'HexaArm Medium PRO',
    subtitle: 'Larger PRO platform for motion and integration development',
    image: hexaArmProImg,
    alt: 'HexaArm Medium PRO render',
    accent: 'from-hexa-purple to-purple-900',
  },
];

export const Hero: React.FC = () => {
  const [activeVisual, setActiveVisual] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVisual((current) => (current + 1) % HERO_VISUALS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const visual = HERO_VISUALS[activeVisual];

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

          <div className="relative group [perspective:1000px]">
             <div className="absolute -inset-8 bg-hexa-purple/10 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
             
             <div className="relative bg-gradient-to-br from-hexa-purple to-hexa-cyan p-1 rounded-xl shadow-2xl transition-transform duration-500 transform lg:rotate-y-[-10deg] group-hover:rotate-y-0 group-hover:scale-105">
                <div className="bg-black p-2 rounded-lg">
                  <div className="relative h-[360px] sm:h-[430px] overflow-hidden rounded-md bg-[#05020a] flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(140,82,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(152,243,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${visual.accent} opacity-10 transition-all duration-700`}></div>
                    <img 
                      key={visual.title}
                      src={visual.image} 
                      alt={visual.alt} 
                      className="relative z-10 max-h-[82%] max-w-[90%] object-contain rounded-md drop-shadow-[0_0_28px_rgba(255,255,255,0.12)] transition-all duration-700 animate-[fadeIn_0.45s_ease-out]"
                    />

                    <div className="absolute left-4 right-4 bottom-4 z-20 rounded-lg border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-mono-plex uppercase tracking-[0.25em] text-gray-500">{visual.id} / Platform Visual</p>
                          <h2 className="mt-1 font-display text-base text-white uppercase">{visual.title}</h2>
                          <p className="mt-1 text-xs font-mono-plex text-gray-400">{visual.subtitle}</p>
                        </div>
                        <div className="flex shrink-0 gap-2 pt-1">
                          {HERO_VISUALS.map((item, index) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveVisual(index)}
                              aria-label={`Show ${item.title}`}
                              className={`h-2.5 w-2.5 rounded-full border transition-all ${index === activeVisual ? 'w-7 border-hexa-cyan bg-hexa-cyan shadow-[0_0_10px_rgba(152,243,255,0.8)]' : 'border-white/30 bg-white/10 hover:bg-white/30'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
