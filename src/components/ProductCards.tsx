import React, { useState } from 'react';
import { ArrowRight, Box, Cpu, Wrench, Lock, Clock, Activity } from 'lucide-react';

export const ProductCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diy' | 'industrial'>('diy');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12">
        {/* Tab Switcher */}
        <div className="flex flex-col items-center justify-center mb-16">
            <h3 className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-4">Select Environment</h3>
            <div className="bg-hexa-card border border-gray-800 p-1 rounded-full flex space-x-2 relative overflow-hidden">
                <button 
                    onClick={() => setActiveTab('diy')}
                    className={`relative z-10 px-8 py-3 rounded-full font-display uppercase text-sm tracking-wider transition-all ${activeTab === 'diy' ? 'bg-hexa-cyan text-black shadow-[0_0_15px_rgba(152,243,255,0.4)]' : 'text-gray-500 hover:text-white'}`}
                >
                    <span className="flex items-center"><Wrench size={16} className="mr-2"/> DIY Kit</span>
                </button>
                <button 
                    onClick={() => setActiveTab('industrial')}
                    className={`relative z-10 px-8 py-3 rounded-full font-display uppercase text-sm tracking-wider transition-all ${activeTab === 'industrial' ? 'bg-hexa-purple text-white shadow-[0_0_15px_rgba(140,82,255,0.4)]' : 'text-gray-500 hover:text-white'}`}
                >
                    <span className="flex items-center"><Lock size={16} className="mr-2"/> Industrial</span>
                </button>
            </div>
            <p className="mt-4 text-center text-sm font-mono-plex text-gray-500 max-w-md">
                {activeTab === 'diy' 
                    ? "For Makers & R&D. Open hardware, 3D printed parts, accessible pricing." 
                    : "For Production. Metal body, IP-rated, certified safety, 24/7 reliability."}
            </p>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* SLOT 1: SMALL ROBOT */}
            <div className="bg-hexa-card/30 border border-white/5 rounded-xl p-8 flex flex-col group hover:border-gray-600 transition-all opacity-80">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                   {activeTab === 'diy' ? <Cpu size={32} className="text-hexa-cyan" /> : <Box size={32} className="text-hexa-purple" />}
                </div>
                
                <h4 className="text-2xl font-display text-gray-300 mb-2">
                    {activeTab === 'diy' ? 'HexaArm Mini DIY' : 'HexaArm Mini Pro'}
                </h4>
                
                <p className="text-sm font-mono-plex text-gray-500 uppercase tracking-widest mb-4">
                    {activeTab === 'diy' ? 'Desktop Education' : 'Light Assembly'}
                </p>
                
                <div className="space-y-2 mb-8 font-mono-plex text-base text-gray-500">
                     <p>Payload: <span className="text-gray-400">~2 kg</span></p>
                     <p>Reach: <span className="text-gray-400">600 mm</span></p>
                     <p className="pt-2 flex items-center"><Clock size={12} className="mr-2"/> Status: <span className="text-gray-300 ml-1">PLANNED (2026)</span></p>
                </div>
                
                <div className="mt-auto border-t border-white/5 pt-4">
                     <span className="text-xs text-gray-600 uppercase font-mono-plex">Use Case: {activeTab === 'diy' ? 'Python Learning' : 'Pick & Place'}</span>
                </div>
            </div>

            {/* SLOT 2: FEATURED PRODUCT (THE CORE OFFER) */}
            <div className={`bg-hexa-card border-2 rounded-xl p-8 flex flex-col relative overflow-hidden transform lg:-translate-y-4 shadow-2xl ${activeTab === 'diy' ? 'border-hexa-cyan shadow-hexa-cyan/10' : 'border-hexa-purple shadow-hexa-purple/10'}`}>
                
                {/* Badge */}
                <div className={`absolute top-0 right-0 text-black text-xs font-bold uppercase px-3 py-1 rounded-bl-lg z-20 ${activeTab === 'diy' ? 'bg-hexa-cyan' : 'bg-hexa-purple text-white'}`}>
                    {activeTab === 'diy' ? 'Open Beta' : 'Pilot Program'}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-0"></div>
                
                <div className="relative z-10 mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activeTab === 'diy' ? 'bg-hexa-cyan text-black' : 'bg-hexa-purple text-white'}`}>
                        {activeTab === 'diy' ? <Wrench size={24} /> : <Activity size={24} />}
                    </div>
                    
                    <h4 className="text-3xl font-display text-white mb-2">
                        HexaArm <span className={activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-purple'}>
                            {activeTab === 'diy' ? 'Medium DIY' : 'Medium Pro'}
                        </span>
                    </h4>
                    
                    <p className="text-sm font-mono-plex text-gray-300 uppercase tracking-widest mb-6">
                        {activeTab === 'diy' ? 'Self-Assembly Kit' : 'Industrial Workhorse'}
                    </p>
                    
                    <div className="space-y-4 mb-8 font-mono-plex text-base text-gray-300">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Payload</span>
                            <span className="font-bold text-white">10 kg</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Reach</span>
                            <span className="font-bold text-white">1300 mm</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>Build</span>
                            <span className="font-bold text-white text-right">{activeTab === 'diy' ? 'Extrusion + 3D Print' : 'CNC Aluminum + IP54'}</span>
                        </div>
                    </div>

                    <p className="text-base text-gray-400 mb-8 leading-relaxed">
                        {activeTab === 'diy' 
                            ? "The ultimate maker project. We supply the motors, gears, and controller. You print the rest. Full CAD included." 
                            : "The same kinematics, hardened for the factory floor. Metal body, sealed joints, and 24/7 support contract."}
                    </p>
                    
                    {activeTab === 'diy' ? (
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLScbr9Jbu8GRUh6469mXskMJ12ORzINa7Fu9etrx7c3La6z1Eg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 uppercase text-sm font-bold tracking-widest rounded flex items-center justify-center transition-colors bg-hexa-cyan text-black hover:bg-white"
                        >
                            Get BOM & CAD
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    ) : (
                        <button 
                            onClick={scrollToContact}
                            className="w-full py-4 uppercase text-sm font-bold tracking-widest rounded flex items-center justify-center transition-colors bg-hexa-purple text-white hover:bg-purple-600"
                        >
                            Request Quote
                            <ArrowRight size={18} className="ml-2" />
                        </button>
                    )}
                </div>
            </div>

            {/* SLOT 3: HEAVY */}
            <div className="bg-hexa-card/30 border border-white/5 rounded-xl p-8 flex flex-col group hover:border-gray-600 transition-all opacity-80">
                 <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                   {activeTab === 'diy' ? <Box size={32} className="text-gray-600" /> : <Box size={32} className="text-hexa-purple" />}
                </div>
                <h4 className="text-2xl font-display text-gray-300 mb-2">
                    {activeTab === 'diy' ? 'HexaArm Heavy' : 'HexaArm Heavy'}
                </h4>
                <p className="text-sm font-mono-plex text-gray-500 uppercase tracking-widest mb-4">
                    {activeTab === 'diy' ? 'Not for DIY' : 'Heavy Duty'}
                </p>
                <div className="space-y-2 mb-8 font-mono-plex text-base text-gray-500">
                    {activeTab === 'diy' ? (
                        <p className="leading-relaxed">Heavy lifting (20kg) requires safety tolerances impossible to achieve with 3D printed parts. We do not offer a DIY kit for this class.</p>
                    ) : (
                        <>
                             <p>Payload: <span className="text-gray-400">20+ kg</span></p>
                             <p>Reach: <span className="text-gray-400">1800 mm</span></p>
                             <p className="pt-2 flex items-center"><Clock size={12} className="mr-2"/> Status: <span className="text-gray-300 ml-1">CONCEPT</span></p>
                        </>
                    )}
                </div>
                <div className="mt-auto border-t border-white/5 pt-4">
                     <span className="text-xs text-gray-600 uppercase font-mono-plex">Use Case: {activeTab === 'diy' ? 'N/A' : 'Palletizing / Welding'}</span>
                </div>
            </div>
        </div>
    </div>
  );
};