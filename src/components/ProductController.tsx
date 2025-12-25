import React, { useState } from 'react';
import { Box, Cpu, Settings, Network, Lock, Wrench, Zap } from 'lucide-react';

// Импортируем оба изображения
import diyImg from '../assets/images/products/HexaCore_DIY_placeholder.png';
import ipcImg from '../assets/images/products/HexaCore_IC_placeholder.png';

export const ProductController: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diy' | 'industrial'>('diy');
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0f0a1e] border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden group transition-all duration-500 hover:border-gray-700">
        
        {/* Background Glow based on mode */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-colors duration-700 ${activeTab === 'diy' ? 'bg-hexa-cyan/10' : 'bg-hexa-purple/10'}`}></div>
        
        {/* Controller Toggle */}
        <div className="absolute top-8 right-8 z-30 hidden md:block">
            <div className="bg-black/50 backdrop-blur border border-gray-700 p-1 rounded-full flex space-x-1">
                <button 
                    onClick={() => setActiveTab('diy')}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'diy' ? 'bg-hexa-cyan text-black' : 'text-gray-500 hover:text-white'}`}
                >
                    DIY Board
                </button>
                <button 
                    onClick={() => setActiveTab('industrial')}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'industrial' ? 'bg-hexa-purple text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    Industrial IPC
                </button>
            </div>
        </div>

        {/* Mobile Toggle (Visible only on small screens) */}
         <div className="md:hidden flex justify-center mb-8">
            <div className="bg-black/50 backdrop-blur border border-gray-700 p-1 rounded-full flex space-x-1">
                <button onClick={() => setActiveTab('diy')} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase ${activeTab === 'diy' ? 'bg-hexa-cyan text-black' : 'text-gray-500'}`}>DIY</button>
                <button onClick={() => setActiveTab('industrial')} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase ${activeTab === 'industrial' ? 'bg-hexa-purple text-white' : 'text-gray-500'}`}>PRO</button>
            </div>
        </div>

        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left: Main Pitch */}
                <div className="lg:w-1/2">
                    <div className={`inline-flex items-center space-x-2 mb-6 border px-3 py-1 rounded text-xs font-mono-plex uppercase tracking-widest transition-colors ${activeTab === 'diy' ? 'border-hexa-cyan/30 bg-hexa-cyan/10 text-hexa-cyan' : 'border-hexa-purple/30 bg-hexa-purple/10 text-hexa-purple'}`}>
                        <Cpu size={14} />
                        <span>{activeTab === 'diy' ? 'The Maker Core' : 'The Universal Controller'}</span>
                    </div>
                    
                    <h4 className="text-4xl md:text-5xl font-display text-white mb-6">
                        HexaCore <span className="text-gray-500">{activeTab === 'diy' ? 'DevKit' : 'IndKit'}</span>
                    </h4>
                    
                    <p className="text-gray-300 font-mono-plex text-lg mb-8 leading-relaxed">
                        {activeTab === 'diy' 
                            ? "Stop building controllers from scratch. Get the full power of an x86 Real-Time Linux system in a compact form factor. Perfect for prototyping and learning."
                            : "A production-ready Industrial PC pre-loaded with our Real-Time Motion Stack. Ruggedized, DIN-rail mountable, and ready to drive your factory automation cell."
                             }
                    </p>

                     
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                        <div className="flex items-center text-sm text-gray-400 font-mono-plex">
                            <Network className={`${activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-purple'} mr-3 shrink-0`} size={18} /> 
                            <span>{activeTab === 'diy' ? 'Ethernet / WiFi' : 'Dual EtherCAT Master'}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 font-mono-plex">
                            <Settings className={`${activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-purple'} mr-3 shrink-0`} size={18} /> 
                            <span>{activeTab === 'diy' ? 'Exposed GPIO' : '16x Safety I/O'}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 font-mono-plex">
                            <Box className={`${activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-purple'} mr-3 shrink-0`} size={18} /> 
                            <span>{activeTab === 'diy' ? 'PCB Standalone' : 'Rugged DIN-Rail Case'}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400 font-mono-plex">
                            <Lock className={`${activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-purple'} mr-3 shrink-0`} size={18} /> 
                            <span>Real-Time Linux Kernel</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {activeTab === 'diy' ? (
                            <a href="https://github.com/hexakinetica" target="_blank" rel="noopener noreferrer" className="bg-hexa-cyan text-black px-8 py-4 font-mono-plex font-bold uppercase text-xs tracking-widest hover:bg-hexa-cyan transition-all">
                                View Schematics
                            </a>
                        ) : (
                            <button onClick={scrollToContact} className="bg-hexa-purple text-white px-8 py-4 font-mono-plex font-bold uppercase text-xs tracking-widest hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(140,82,255,0.3)]">
                                Get Datasheet
                            </button>
                        )}
                    </div>
                </div>
                
                {/* Right: Visual (The HUD Scanner) */}
                <div className="lg:w-1/2 w-full">
                     <div className={`relative bg-[#0a0a12] border rounded-xl overflow-hidden shadow-2xl transition-colors duration-500 ${activeTab === 'diy' ? 'border-hexa-cyan/30' : 'border-hexa-purple/30'}`}>
                         
                         {/* Header Bar */}
                         <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#0f0a1e] z-20 relative">
                             <div className="flex items-center space-x-3">
                                 <div className="relative">
                                     <div className={`w-2 h-2 rounded-full ${activeTab === 'diy' ? 'bg-hexa-cyan' : 'bg-hexa-cyan'}`}></div>
                                     <div className={`absolute inset-0 rounded-full opacity-75 ${activeTab === 'diy' ? 'bg-hexa-cyan' : 'bg-hexa-cyan'}`}></div>
                                 </div>
                                 <span className={`text-xs font-mono-plex uppercase tracking-widest ${activeTab === 'diy' ? 'text-hexa-cyan' : 'text-hexa-cyan'}`}>
                                     {activeTab === 'diy' ? 'Dev Mode' : 'Dev Mode'}
                                 </span>
                             </div>
                         </div>

                         {/* Main Display Area */}
                         <div className="relative h-[400px] w-full flex items-center justify-center bg-black overflow-hidden">
                             
                             {/* Grid Background */}
                             <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] transition-opacity duration-500 ${activeTab === 'diy' ? 'opacity-20' : 'opacity-10'}`}></div>

                             {/* --- BOARD IMAGE (DYNAMIC SOURCE) --- */}
                             {/* Key используется для перезапуска анимации при смене таба */}
                             <img 
                                key={activeTab} 
                                src={activeTab === 'diy' ? diyImg : ipcImg}
                                alt={activeTab === 'diy' ? "HexaCore DevKit" : "HexaCore Industrial"}
                                className="relative z-10 w-[90%] h-auto object-contain animate-in fade-in zoom-in duration-500"
                                style={{
                                    filter: activeTab === 'diy' 
                                        ? 'grayscale(100%) contrast(110%) brightness(1.2) drop-shadow(0 0 15px rgba(152,243,255,0.2))'
                                        : 'grayscale(100%) contrast(120%) brightness(0.9) drop-shadow(0 0 15px rgba(140,82,255,0.3))'
                                }}
                             />

                             {/* --- DYNAMIC HOTSPOTS --- */}
                             {/* Примечание: Если на новой картинке IPC компоненты расположены в других местах, 
                                 нужно будет менять стили top/left/right ниже динамически, так же как цвета */}

                             {/* Point 1: CPU */}
                             <div className="absolute top-[45%] left-[48%] z-30 group/pin">
                                <div className="relative">
                                    <div className={`w-3 h-3 border rounded-full flex items-center justify-center ${activeTab === 'diy' ? 'border-hexa-cyan' : 'border-hexa-purple'}`}>
                                        <div className={`w-1 h-1 rounded-full ${activeTab === 'diy' ? 'bg-hexa-cyan' : 'bg-hexa-purple'}`}></div>
                                    </div>
                                    <div className={`absolute inset-0 border rounded-full animate-ping opacity-50 ${activeTab === 'diy' ? 'border-hexa-cyan' : 'border-hexa-purple'}`}></div>
                                </div>
                                <div className={`absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/pin:opacity-100 transition-opacity bg-black/90 border px-2 py-1 rounded whitespace-nowrap font-mono-plex uppercase text-[9px] ${activeTab === 'diy' ? 'border-hexa-cyan text-hexa-cyan' : 'border-hexa-purple text-hexa-purple'}`}>
                                    Intel Core i5 Host
                                </div>
                             </div>

                             {/* Point 2: Connectivity */}
                             <div className="absolute top-[30%] right-[15%] z-30 group/pin">
                                <div className="relative">
                                    <div className={`w-3 h-3 border rounded-full flex items-center justify-center ${activeTab === 'diy' ? 'border-white' : 'border-hexa-purple'}`}>
                                        <div className={`w-1 h-1 rounded-full ${activeTab === 'diy' ? 'bg-white' : 'bg-hexa-purple'}`}></div>
                                    </div>
                                </div>
                                 <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/pin:opacity-100 transition-opacity bg-black/90 border border-gray-700 text-gray-300 text-[9px] px-2 py-1 rounded whitespace-nowrap font-mono-plex uppercase">
                                    {activeTab === 'diy' ? 'USB 3.0 / GPIO' : 'EtherCAT Master'}
                                </div>
                             </div>

                             {/* Point 3: Power/Safety */}
                             <div className="absolute bottom-[25%] left-[30%] z-30 group/pin">
                                <div className="relative">
                                    <div className={`w-3 h-3 border rounded-full flex items-center justify-center ${activeTab === 'diy' ? 'border-yellow-500' : 'border-white'}`}>
                                        <div className={`w-1 h-1 rounded-full ${activeTab === 'diy' ? 'bg-yellow-500' : 'bg-white'}`}></div>
                                    </div>
                                </div>
                                 <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/pin:opacity-100 transition-opacity bg-black/90 border border-gray-700 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap font-mono-plex uppercase">
                                    {activeTab === 'diy' ? '12-24V Input' : 'STM32 Safety Logic'}
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