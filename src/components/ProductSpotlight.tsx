
import cadImg from '../assets/images/products/medium_cad.jpg'; 
import React from 'react';
import { Check, ArrowRight, Cpu, Zap, FileCode, Settings, Layers, Network } from 'lucide-react';

export const ProductSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-[#05020a] relative overflow-hidden border-t border-gray-900">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The "Blueprint" Visual */}
          <div className="relative group">
             {/* Corners */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hexa-cyan/50 z-20"></div>
             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hexa-cyan/50 z-20"></div>
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hexa-cyan/50 z-20"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hexa-cyan/50 z-20"></div>

             <div className="relative rounded-sm overflow-hidden border border-hexa-cyan/20 bg-[#0a0a12] aspect-square lg:aspect-[4/3] shadow-[0_0_30px_rgba(152,243,255,0.05)]">
                 
                 {/* Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(152,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(152,243,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] z-10 pointer-events-none"></div>

                 {/* Image with Blueprint Filter */}
                 <div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 grayscale contrast-125 opacity-80 mix-blend-screen"
                    style={{ 
                        backgroundImage: `url(${cadImg})`,
                        filter: 'invert(1) hue-rotate(180deg) brightness(0.8)' 
                    }}
                 ></div>
                 
                 {/* --- ТЕХНИЧЕСКИЕ МЕТКИ (DOTS) --- */}
                 {/* См. инструкцию ниже, как их двигать */}
                 
                 {/* 1. Gearbox */}
                 <div className="absolute top-[25%] left-[40%] z-20 flex items-center group/dot">
                    <div className="w-2 h-2 bg-hexa-cyan rounded-full animate-pulse relative">
                        <div className="absolute -inset-1 bg-hexa-cyan/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="ml-2 opacity-0 group-hover/dot:opacity-100 transition-opacity bg-black/90 border border-hexa-cyan/30 px-2 py-1 rounded text-[9px] font-mono-plex text-hexa-cyan whitespace-nowrap">
                        Harmonic Drive (Wave Gear)
                    </div>
                 </div>

                 {/* 2. Servo */}
                 <div className="absolute bottom-[40%] right-[50%] z-20 flex flex-row-reverse items-center group/dot">
                    <div className="w-2 h-2 bg-hexa-purple rounded-full animate-pulse relative">
                         <div className="absolute -inset-1 bg-hexa-purple/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="mr-2 opacity-0 group-hover/dot:opacity-100 transition-opacity bg-black/90 border border-hexa-purple/30 px-2 py-1 rounded text-[9px] font-mono-plex text-hexa-purple whitespace-nowrap">
                        EtherCAT Servo
                    </div>
                 </div>

                 {/* 3. Structure */}
                 <div className="absolute top-[55%] right-[30%] z-20 flex items-center group/dot">
                    <div className="w-2 h-2 bg-white rounded-full relative"></div>
                    <div className="ml-2 opacity-100 bg-black/80 border border-gray-700 px-2 py-1 rounded text-[9px] font-mono-plex text-gray-300 whitespace-nowrap">
                        Alu-Profile Skeleton
                    </div>
                 </div>

                 {/* 5. Controller */}
                 <div className="absolute top-[20%] left-[80%] z-20 flex items-center group/dot">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse relative"></div>
                    <div className="ml-2 opacity-0 group-hover/dot:opacity-100 transition-opacity bg-black/90 border border-green-500/30 px-2 py-1 rounded text-[9px] font-mono-plex text-green-400 whitespace-nowrap">
                        IPC / Linux RT
                    </div>
                 </div>

                 {/* Status Bar */}
                 <div className="absolute bottom-0 left-0 w-full py-2 px-4 bg-black/90 border-t border-gray-800 flex justify-between items-center z-30">
                     <div className="flex items-center space-x-2">
                         <FileCode size={12} className="text-hexa-cyan" />
                         <span className="text-gray-500 text-[9px] font-mono-plex uppercase tracking-widest">CAD_REV_2.0_ASSEMBLY</span>
                     </div>
                     <div className="text-[9px] text-yellow-500 font-mono-plex font-bold uppercase flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                        Validation Phase
                     </div>
                 </div>
             </div>
          </div>

          {/* Right: Specs & Narrative */}
          <div>
             <div className="inline-flex items-center space-x-2 mb-4 bg-gray-800/50 border border-gray-700 px-3 py-1 rounded text-xs text-gray-300 font-mono-plex uppercase tracking-widest">
                <Settings size={12} />
                <span>Flagship Kit</span>
             </div>
             
             <h3 className="font-display text-4xl md:text-5xl text-white uppercase mb-6 leading-tight">
               HexaArm <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-white">Medium DIY</span>
             </h3>
             
             <p className="text-gray-400 font-mono-plex text-sm md:text-base mb-8 leading-relaxed border-l-2 border-gray-800 pl-4">
               The bridge between hobby and industry. A serious 6-axis manipulator you build yourself.
               Powered Professional capabilities in an accessible DIY package.
               <br/><br/>
               By using standard aluminum extrusion for the skeleton and 3D-printed structural nodes, we achieve industrial rigidity at a fraction of the cost.
             </p>

             {/* Tech Specs Grid */}
             <div className="grid grid-cols-3 gap-4 mb-10">
                 <div className="bg-[#0a0a12] border border-gray-800 p-4 rounded text-center hover:border-gray-600 transition-colors">
                     <Zap className="mx-auto text-gray-500 mb-2" size={20} />
                     <div className="text-xl font-display text-white">Ether<span className="text-hexa-cyan">CAT</span></div>
                     <div className="text-[9px] text-gray-500 uppercase tracking-wider">Standard</div>
                 </div>
                 <div className="bg-[#0a0a12] border border-gray-800 p-4 rounded text-center hover:border-gray-600 transition-colors">
                     <Layers className="mx-auto text-gray-500 mb-2" size={20} />
                     <div className="text-xl font-display text-white">Wave<span className="text-hexa-cyan">Gear</span></div>
                     <div className="text-[9px] text-gray-500 uppercase tracking-wider">Zero Backlash</div>
                 </div>
                 <div className="bg-[#0a0a12] border border-gray-800 p-4 rounded text-center hover:border-gray-600 transition-colors">
                     <Cpu className="mx-auto text-gray-500 mb-2" size={20} />
                     <div className="text-xl font-display text-white">Alu<span className="text-hexa-cyan">Body</span></div>
                     <div className="text-[9px] text-gray-500 uppercase tracking-wider">Frame</div>
                 </div>
             </div>

             <ul className="space-y-4 mb-10">
                 <li className="flex items-start">
                     <div className="bg-hexa-cyan/10 p-1 rounded mr-3 mt-1"><Check className="text-hexa-cyan" size={14} /></div>
                     <div>
                         <h5 className="text-white font-display text-sm">Open Source CAD</h5>
                         <p className="text-gray-500 text-xs font-mono-plex">The source files (STEP, STL) will be released to the community.</p>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="bg-hexa-cyan/10 p-1 rounded mr-3 mt-1"><Check className="text-hexa-cyan" size={14} /></div>
                     <div>
                         <h5 className="text-white font-display text-sm">Standard Parts</h5>
                         <p className="text-gray-500 text-xs font-mono-plex">Designed around off-the-shelf bearings and extrusions to keep costs low.</p>
                     </div>
                 </li>
                 <li className="flex items-start">
                     <div className="bg-hexa-cyan/10 p-1 rounded mr-3 mt-1"><Check className="text-hexa-cyan" size={14} /></div>
                     <div>
                         <h5 className="text-white font-display text-sm">Modularity</h5>
                         <p className="text-gray-500 text-xs font-mono-plex">Easy to replace a motor or upgrade a joint without scrapping the arm.</p>
                     </div>
                 </li>
             </ul>

             <a 
                href="https://github.com/hexakinetica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white border-b border-hexa-cyan pb-1 hover:text-hexa-cyan transition-colors uppercase text-xs font-bold tracking-widest"
             >
                View Repository
                <ArrowRight className="ml-2" size={14} />
             </a>

             {/* CTA Buttons */}
             <div className="flex flex-wrap gap-4">

             </div>

          </div>

        </div>
      </div>
    </section>
  );
};