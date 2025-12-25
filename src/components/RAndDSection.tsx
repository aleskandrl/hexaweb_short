import React from 'react';
import { Eye, Cpu } from 'lucide-react';

// Импорты картинок
import armDevImg from '../assets/images/products/hexaarm_medium_dream.png';
import chipImg from '../assets/images/products/HexaCore_DIY_placeholder.png';
import visionImg from '../assets/images/rnd/vision.jpg';

export const RAndDSection: React.FC = () => {
  return (
    <section id="rnd" className="py-24 bg-[#080510] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
           <div className="flex items-center space-x-2 mb-4">
                {/*<div className="w-2 h-2 bg-red-500 rounded-full"></div>*/}
               <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-widest">Internal Pipeline</h2>
           </div>
           <h3 className="font-display text-4xl md:text-6xl text-white uppercase">
             Innovation <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Engine</span>
           </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Active Dev: The Arm (Purple Theme) */}
            <div className="bg-[#0f0a1e] border border-hexa-purple/30 rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(140,82,255,0.15)] transition-all">
                <div className="h-64 bg-black relative overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                        style={{ backgroundImage: `url(${armDevImg})` }}
                    ></div>
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-hexa-purple/10 text-hexa-purple border border-hexa-purple/30 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
                            In Development
                        </span>
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="font-display text-2xl text-white mb-2">HexaArm <span className="text-hexa-purple">Medium</span></h4>
                    <p className="text-gray-400 font-mono-plex text-sm mb-6 h-10">The 10kg payload workhorse. Designing for mass-manufacturability and low-tolerance assembly.</p>
                    
                    <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4 mb-6">
                        <div>
                            <div className="text-gray-500 text-[10px] uppercase">Payload</div>
                            <div className="text-white font-mono-plex text-lg font-bold">10 kg</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-[10px] uppercase">Reach</div>
                            <div className="text-white font-mono-plex text-lg font-bold">1100 mm</div>
                        </div>
                    </div>
                    
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-hexa-purple w-[75%] h-full shadow-[0_0_10px_#8c52ff]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-mono-plex text-gray-500 uppercase">
                        <span>Mechanical Proto</span>
                        <span className="text-hexa-purple">75%</span>
                    </div>
                </div>
            </div>

            {/* 2. Active Dev: The Core Controller (Cyan Theme - Restored) */}
            <div className="bg-[#0f0a1e] border border-gray-800 rounded-2xl overflow-hidden group hover:border-hexa-cyan/50 transition-all">
                <div className="h-64 bg-black relative overflow-hidden flex items-center justify-center">
                     {/* Tech Grid Background (Cyan tint) */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(152,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(152,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    
                    {/* Real Board Image */}
                    <img 
                        src={chipImg} 
                        alt="HexaCore PCB" 
                        className="relative z-10 w-[80%] h-auto object-contain filter grayscale contrast-125 drop-shadow-[0_0_15px_rgba(152,243,255,0.2)] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    
                    {/* Status Badge (Static, Cyan) */}
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-hexa-cyan/10 text-hexa-cyan border border-hexa-cyan/30 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
                            Under Test
                        </span>
                    </div>
                </div>
                
                <div className="p-6">
                    <h4 className="font-display text-2xl text-white mb-2">Hexa<span className="text-hexa-cyan">Core</span></h4>
                    <p className="text-gray-400 font-mono-plex text-sm mb-6 h-10">Unified Motion Controller Hardware. Stress testing the Real-time Linux kernel and EtherCAT master.</p>
                    
                     <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-hexa-cyan w-[95%] h-full shadow-[0_0_10px_#98f3ff]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-mono-plex text-gray-500 uppercase">
                        <span>Hardware Rev 1.4</span>
                        <span className="text-hexa-cyan">95% (Validating)</span>
                    </div>
                </div>
            </div>

            {/* 3. Concept: Vision (Gray/White Theme) */}
            <div className="bg-[#0f0a1e] border border-gray-800 rounded-2xl overflow-hidden group hover:border-white/30 transition-all opacity-70 hover:opacity-100">
                <div className="h-64 bg-black relative overflow-hidden">
                     <div 
                        className="absolute inset-0 bg-cover bg-center opacity-40 contrast-125"
                        style={{ backgroundImage: `url(${visionImg})` }}
                     ></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                         <Eye size={64} className="text-white/20" />
                     </div>
                     <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-gray-800/80 text-gray-300 border border-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
                            Concept Phase
                        </span>
                    </div>
                </div>
                <div className="p-6">
                    <h4 className="font-display text-2xl text-white mb-2">Hexa<span className="text-gray-500">Vision</span></h4>
                    <p className="text-gray-400 font-mono-plex text-sm mb-6 h-10">AI-native object detection module. Future integration for bin-picking and quality inspection.</p>
                    
                     <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gray-600 w-[15%] h-full"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-mono-plex text-gray-500 uppercase">
                        <span>Research</span>
                        <span className="text-gray-400">15%</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};