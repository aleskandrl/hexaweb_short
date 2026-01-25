import React from 'react';
import { Cpu, Network, Lock, Zap, ArrowRight, Activity } from 'lucide-react';
import ipcImg from '../assets/images/products/HexaCore_IC_placeholder.png';

export const ProductController: React.FC = () => {
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-hexa-card border border-gray-800 rounded-2xl p-8 md:p-12 mb-24 relative overflow-hidden group transition-all duration-500 hover:border-gray-700 hover:shadow-[0_0_50px_rgba(140,82,255,0.05)]">
        
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none bg-hexa-purple/10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none bg-hexa-cyan/5"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left: The Pitch */}
                <div className="lg:w-1/2 space-y-8">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 border border-hexa-purple/30 bg-hexa-purple/10 text-hexa-purple px-3 py-1 rounded-full text-[10px] font-mono-plex uppercase tracking-widest backdrop-blur-sm">
                        <Cpu size={12} />
                        <span>The Motion Engine</span>
                    </div>
                    
                    {/* Heading */}
                    <div>
                        <h4 className="text-3xl md:text-4xl font-display text-white mb-4 leading-tight">
                            Unified Control <br/>
                             </h4>
                        
                        {/* --- UPDATED CONTENT START --- */}
                        <p className="text-gray-400 font-mono-plex text-sm md:text-base leading-relaxed max-w-xl">
                            It's a production-ready Industrial PC pre-loaded with our Real-Time Motion Stack: <strong className="text-white">HexaMotion (RT-Linux Core)</strong> and <strong className="text-white">HexaStudio (Intuitive UI)</strong>.
                            <br/><br/>
                            Whether you're a student using our DevKit board or a factory running 24/7, the core software is identical.
                        </p>
                        {/* --- UPDATED CONTENT END --- */}
                    </div>

                    {/* Tech Specs Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3 group/item">
                            <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover/item:border-hexa-purple/50 transition-colors">
                                <Network className="text-hexa-purple" size={18} />
                            </div>
                            <div>
                                <h6 className="text-white font-display text-sm">Dual EtherCAT</h6>
                                <p className="text-gray-500 text-[10px] font-mono-plex uppercase mt-1">Real-Time Sync</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 group/item">
                            <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover/item:border-hexa-purple/50 transition-colors">
                                <Activity className="text-hexa-purple" size={18} />
                            </div>
                            <div>
                                <h6 className="text-white font-display text-sm">16x Safety I/O</h6>
                                <p className="text-gray-500 text-[10px] font-mono-plex uppercase mt-1">Failsafe Logic</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 group/item">
                            <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover/item:border-hexa-purple/50 transition-colors">
                                <Zap className="text-hexa-purple" size={18} />
                            </div>
                            <div>
                                <h6 className="text-white font-display text-sm">Intel x86 Arch</h6>
                                <p className="text-gray-500 text-[10px] font-mono-plex uppercase mt-1">Standard Compute</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 group/item">
                            <div className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover/item:border-hexa-purple/50 transition-colors">
                                <Lock className="text-hexa-purple" size={18} />
                            </div>
                            <div>
                                <h6 className="text-white font-display text-sm">Preempt_RT Linux</h6>
                                <p className="text-gray-500 text-[10px] font-mono-plex uppercase mt-1">Zero Jitter Kernel</p>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="pt-4">
                        <button 
                            onClick={scrollToContact} 
                            className="group flex items-center space-x-3 text-white font-mono-plex text-xs font-bold uppercase tracking-widest hover:text-hexa-purple transition-colors"
                        >
                            <span className="border-b border-hexa-purple pb-1">Download Technical Datasheet</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>
                
                {/* Right: The Product Visual */}
                <div className="lg:w-1/2 w-full">
                     <div className="relative group/visual">
                         
                         {/* Decorative Frame */}
                         <div className="absolute -inset-1 bg-gradient-to-r from-hexa-purple/20 to-gray-800/20 rounded-2xl blur opacity-75 group-hover/visual:opacity-100 transition duration-1000"></div>
                         
                         <div className="relative bg-hexa-bg border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                             

                             <div className="relative h-[400px] w-full flex items-center justify-center bg-black overflow-hidden group-hover/visual:bg-[#080510] transition-colors duration-700">
                                 {/* Grid Background */}
                                 <div className="absolute inset-0 bg-[linear-gradient(rgba(140,82,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,82,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                                 <img 
                                     src={ipcImg}
                                     alt="HexaCore Industrial Controller"
                                     className="relative z-10 w-[85%] h-auto object-contain filter grayscale contrast-125 brightness-90 drop-shadow-[0_0_20px_rgba(140,82,255,0.15)] group-hover/visual:grayscale-0 group-hover/visual:drop-shadow-[0_0_30px_rgba(140,82,255,0.4)] transition-all duration-700 transform group-hover/visual:scale-105"
                                 />
                                 
                                 {/* Floating Label */}
                                 <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur-md border border-hexa-purple/30 px-4 py-2 rounded-lg shadow-lg">
                                     <p className="text-white font-display text-sm tracking-wide">HexaCore <span className="text-hexa-purple">PRO</span></p>
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