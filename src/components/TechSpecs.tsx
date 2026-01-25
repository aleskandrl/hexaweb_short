import React from 'react';
import { Cpu, ShieldCheck, Network, Settings2, Server, Activity, Database, Zap, Layers } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg border-t border-gray-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">System Internals</h2>
            <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-6">
              Built Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Fortress</span>
            </h3>
            <p className="text-gray-400 font-mono-plex max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Our core principle is Ownership*. The robot's brain is a standard PC running Linux. If your controller fails, you can buy a new one at any computer store. If HexaKinetica disappears tomorrow, your robot will work forever. This is freedom.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: SOFTWARE ARCHITECTURE */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-cyan"></div>
                    <h4 className="text-3xl font-display text-white">Control Topology</h4>
                </div>

                {/* The Brain */}
                <div className="bg-hexa-card border border-gray-800 rounded-xl p-6 relative group hover:border-hexa-cyan/30 transition-all">
                    <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">The Brain (NRT)</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-hexa-cyan/10 p-3 rounded-lg">
                             <Server className="text-hexa-cyan" size={24} />
                        </div>
                        <div>
                            <h5 className="text-xl font-display text-white mb-2">The Motion Planner</h5>
                            <p className="text-gray-500 text-base font-mono-plex leading-relaxed mb-3">
                                A standard x86 PC running Linux calculates complex physics and plans trajectories. It's smart, flexible, and completely open.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">Intel i5 IPC</span>
                                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">Standard Linux</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Bridge */}
                <div className="flex flex-col items-center justify-center -my-4 relative z-10">
                    <div className="bg-hexa-bg border border-hexa-purple/50 p-2 px-4 rounded-full text-center shadow-[0_0_15px_rgba(140,82,255,0.2)]">
                        <div className="flex items-center space-x-2 text-hexa-purple">
                            <Database size={14} />
                            <span className="text-xs font-bold uppercase tracking-widest font-mono-plex">Real-Time Safety Buffer</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-hexa-cyan/50 to-green-500/50 -mt-2 -z-10"></div>
                </div>

                {/* The Spinal Cord */}
                <div className="bg-hexa-card border border-gray-800 rounded-xl p-6 relative group hover:border-green-500/30 transition-all">
                    <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">The Spinal Cord (RT)</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-500/10 p-3 rounded-lg">
                             <Activity className="text-green-500" size={24} />
                        </div>
                        <div>
                            <h5 className="text-xl font-display text-white mb-2">The Real-Time Core</h5>
                            <p className="text-gray-500 text-base font-mono-plex leading-relaxed mb-3">
                                Executes motion commands with 1kHz precision on a Preempt_RT Kernel. It is extremely fast, deterministic, and never crashes due to software load.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">1000 Hz Loop</span>
                                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">Zero Jitter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* RIGHT COLUMN: HARDWARE SPECS */}
            <div className="space-y-8">
                 <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-purple"></div>
                    <h4 className="text-3xl font-display text-white">Open Hardware Standards</h4>
                </div>

                <div className="bg-hexa-bg border border-gray-800 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-hexa-purple/5 rounded-bl-full"></div>
                    
                    <div className="space-y-8 relative z-10">
                        {/* Spec 1 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Cpu className="text-gray-500 group-hover:text-hexa-cyan transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Standard x86 PC</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Freedom to Repair and Upgrade</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    We use commodity PC hardware. This drastically cuts costs and ensures you are never locked into a single supplier for repairs.
                                </p>
                            </div>
                        </div>

                        {/* Spec 2 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Network className="text-gray-500 group-hover:text-green-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">EtherCAT Fieldbus</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Interchangeable Components</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    The global standard for industrial communication. You can use our servo drives or easily integrate alternatives from brands like Omron or Delta.
                                </p>
                            </div>
                        </div>

                        {/* Spec 3 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <ShieldCheck className="text-gray-500 group-hover:text-yellow-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Dedicated Safety Logic</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Failsafe by Design</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    An independent microcontroller (STM32) handles critical safety functions like E-Stop, ensuring it's never affected by the main PC's performance.
                                </p>
                            </div>
                        </div>

                         {/* Spec 4 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Settings2 className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Modular I/O</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Unlimited Expansion</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    Standard PCIe and USB 3.0 ports allow easy integration of vision systems, sensors, and custom end-effectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

