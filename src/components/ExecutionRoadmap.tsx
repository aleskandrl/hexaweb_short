
import React from 'react';

export const ExecutionRoadmap: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-hexa-bg relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-hexa-purple/30 to-transparent hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-20">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">The Development Plan</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">
             Execution <span className="text-hexa-purple">Roadmap</span>
           </h3>
        </div>

        <div className="space-y-12 relative">

            {/* Q2 2025 Concept Development */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full group opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-full md:w-5/12 text-left pr-8 order-2 md:order-1">
                    <p className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-2">Q2 2025</p>
                    <h4 className="font-display text-2xl text-white mb-2">Concept Development</h4>
                    <p className="text-gray-400 font-mono-plex text-base">
                        Defining core architecture: robot hardware, controller, operator software, simulation, and documentation.
                    </p>
                </div>
                <div className="w-12 h-12 bg-hexa-bg border border-gray-600 rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-xs font-bold text-gray-500">2025</span>
                </div>
                <div className="w-full md:w-5/12 pl-8 order-3 md:order-3 hidden md:block"></div>
            </div>

            {/* 2025-2026 Active R&D */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-hexa-purple/20 to-transparent blur-xl"></div>

                <div className="w-full md:w-5/12 pr-8 order-2 md:order-1 hidden md:block"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-hexa-purple to-hexa-cyan rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0 shadow-[0_0_30px_rgba(140,82,255,0.8)]">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                         <span className="text-[10px] font-bold text-white">2025-26</span>
                    </div>
                </div>
                <div className="w-full md:w-5/12 text-left pl-8 order-3 md:order-3">
                    <div className="inline-block bg-hexa-cyan/10 border border-hexa-cyan text-white text-[10px] font-bold px-2 py-1 rounded mb-2">ACTIVE PHASE</div>
                    <p className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-2">2025-2026</p>
                    <h4 className="font-display text-3xl text-white mb-2 text-shadow-glow">R&D / Platform Development</h4>
                    <p className="text-gray-300 font-mono-plex text-base">
                        Building the ecosystem: Maker/PRO hardware, HexaCore controller, HexaStudio software, and hardware validation.
                    </p>
                </div>
            </div>

            {/* Q4 2026 Pilot Integration */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full group opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-full md:w-5/12 text-left pr-8 order-2 md:order-1">
                    <p className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-2">Q4 2026</p>
                    <h4 className="font-display text-2xl text-white mb-2">Pilot Integration</h4>
                    <p className="text-gray-400 font-mono-plex text-base">
                        Deploying the first HexaArm pilot: integrating the physical manipulator, controller cabinets, and real-world automation use cases.
                    </p>
                </div>
                <div className="w-12 h-12 bg-hexa-bg border-2 border-hexa-purple rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0 group-hover:bg-hexa-purple transition-colors shadow-[0_0_15px_rgba(140,82,255,0.3)]">
                    <span className="text-xs font-bold text-hexa-purple group-hover:text-white">2026</span>
                </div>
                <div className="w-full md:w-5/12 pl-8 order-3 md:order-3 opacity-50 hidden md:block"></div>
            </div>

            {/* 2027+ Platform Expansion */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full group opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-full md:w-5/12 pr-8 order-2 md:order-1 opacity-50 hidden md:block"></div>
                <div className="w-12 h-12 bg-hexa-bg border border-gray-700 border-dashed rounded-full flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-xs font-bold text-gray-500">2027+</span>
                </div>
                <div className="w-full md:w-5/12 text-left pl-8 order-3 md:order-3">
                    <p className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-2">2027+</p>
                    <h4 className="font-display text-2xl text-gray-300 mb-2">Platform Expansion</h4>
                    <p className="text-gray-500 font-mono-plex text-base">
                        Scaling product lines: expanding Maker and PRO series, and refining tools based on user feedback.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
