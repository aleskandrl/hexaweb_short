
import React from 'react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-hexa-bg relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-hexa-purple/30 to-transparent hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">The Master Plan</h2>
           <h3 className="font-display text-4xl md:text-5xl text-white uppercase">
             Execution <span className="text-hexa-purple">Roadmap</span>
           </h3>
        </div>

        <div className="space-y-12 relative">
            
            {/* Past - Inception */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full group opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-full md:w-5/12 text-center md:text-right pr-8 order-2 md:order-1">
                    <h4 className="font-display text-2xl text-white mb-2">Inception</h4>
                    <p className="text-gray-400 font-mono-plex text-sm">Defining the open-source architecture. Core team assembly. First prototypes.</p>
                </div>
                <div className="w-12 h-12 bg-hexa-bg border border-gray-600 rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-xs font-bold text-gray-500">2024</span>
                </div>
                <div className="w-full md:w-5/12 pl-8 order-3 md:order-3 hidden md:block"></div>
            </div>

            {/* CURRENT STATE - DIY ERA */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                {/* Active Glow Effect */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-hexa-purple/20 to-transparent blur-xl"></div>

                <div className="w-full md:w-5/12 pr-8 order-2 md:order-1 hidden md:block"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-hexa-purple to-hexa-cyan rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0 shadow-[0_0_30px_rgba(140,82,255,0.8)] animate-pulse">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                         <span className="text-[10px] font-bold text-white">NOW</span>
                    </div>
                </div>
                <div className="w-full md:w-5/12 text-center md:text-left pl-8 order-3 md:order-3">
                    <div className="inline-block bg-hexa-cyan/10 border border-hexa-cyan text-hexa-cyan text-[10px] font-bold px-2 py-1 rounded mb-2">ACTIVE PHASE</div>
                    <h4 className="font-display text-3xl text-white mb-2 text-shadow-glow">The DIY Era</h4>
                    <p className="text-gray-300 font-mono-plex text-sm">
                        Development of the <b className="text-white">HexaArm Medium (10kg)</b>. 
                        Launching the Unified Controller. Building the maker community ecosystem.
                    </p>
                </div>
            </div>

            {/* 2026 Industrial Proto */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-5/12 text-center md:text-right pr-8 order-2 md:order-1">
                    <h4 className="font-display text-2xl text-white mb-2">Industrial Prototype</h4>
                    <p className="text-gray-400 font-mono-plex text-sm">
                        Launch of the closed-loop Industrial line. 
                        IP-rated hardware. Safety certification process begins.
                    </p>
                </div>
                <div className="w-12 h-12 bg-hexa-bg border-2 border-hexa-purple rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0 group-hover:bg-hexa-purple transition-colors shadow-[0_0_15px_rgba(140,82,255,0.3)]">
                    <span className="text-xs font-bold text-hexa-purple group-hover:text-white">2026</span>
                </div>
                <div className="w-full md:w-5/12 pl-8 order-3 md:order-3 opacity-50 hidden md:block"></div>
            </div>

            {/* 2026+ Mass Scale */}
             <div className="flex flex-col md:flex-row items-center justify-between w-full group opacity-70 hover:opacity-100 transition-opacity">
                 <div className="w-full md:w-5/12 pr-8 order-2 md:order-1 opacity-50 hidden md:block"></div>
                <div className="w-12 h-12 bg-hexa-bg border border-gray-700 border-dashed rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                     <span className="text-xs font-bold text-gray-500">2026+</span>
                </div>
                <div className="w-full md:w-5/12 text-center md:text-left pl-8 order-3 md:order-3">
                    <h4 className="font-display text-2xl text-gray-300 mb-2">Mass Scale</h4>
                    <p className="text-gray-500 font-mono-plex text-sm">Full ecosystem launch. Cloud calibration network. Global distribution.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
