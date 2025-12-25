import React from 'react';
import { Cpu, ShieldCheck, Network, Settings2, Server, Activity, Database, Zap, Layers } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Background Grid for Technical Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">System Internals</h2>
            <h3 className="font-display text-4xl md:text-5xl text-white uppercase mb-6">
              Built Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Fortress</span>
            </h3>
            <p className="text-gray-400 font-mono-plex max-w-3xl mx-auto text-sm leading-relaxed">
              We replaced the proprietary "Black Box" with standard, high-performance industrial computing. 
              By strictly separating high-level planning from real-time execution, we ensure the robot never freezes, stutters, or crashes due to software load.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: SOFTWARE ARCHITECTURE (The Brain & Spinal Cord) */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-cyan"></div>
                    <h4 className="text-2xl font-display text-white">Control Topology</h4>
                </div>

                {/* NRT Domain Card */}
                <div className="bg-[#0f0a1e] border border-gray-800 rounded-xl p-6 relative group hover:border-hexa-cyan/30 transition-all">
                    <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">The Brain (NRT)</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-hexa-cyan/10 p-3 rounded-lg">
                             <Server className="text-hexa-cyan" size={24} />
                        </div>
                        <div>
                            <h5 className="text-lg font-display text-white mb-2">Motion Planner</h5>
                            <p className="text-gray-500 text-sm font-mono-plex leading-relaxed mb-3">
                                Calculates complex physics, kinematics, and trajectories. Runs on standard Linux. Flexible and intelligent.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">Intel i5 IPC</span>
                                <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">C++17</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Bridge (Visual Connection) */}
                <div className="flex flex-col items-center justify-center -my-4 relative z-10">
                    <div className="bg-[#0a0a12] border border-hexa-purple/50 p-2 px-4 rounded-full text-center shadow-[0_0_15px_rgba(140,82,255,0.2)]">
                        <div className="flex items-center space-x-2 text-hexa-purple">
                            <Database size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Safety Buffer (Lock-Free SPSC)</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-hexa-cyan/50 to-green-500/50 -mt-2 -z-10"></div>
                </div>

                {/* RT Domain Card */}
                <div className="bg-[#0f0a1e] border border-gray-800 rounded-xl p-6 relative group hover:border-green-500/30 transition-all">
                    <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">The Spinal Cord (RT)</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-500/10 p-3 rounded-lg">
                             <Activity className="text-green-500" size={24} />
                        </div>
                        <div>
                            <h5 className="text-lg font-display text-white mb-2">Real-Time Core</h5>
                            <p className="text-gray-500 text-sm font-mono-plex leading-relaxed mb-3">
                                Executes movement with 1kHz precision. Runs on Preempt_RT Kernel. Deterministic and safe.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">1000 Hz Loop</span>
                                <span className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono-plex">Zero Jitter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* RIGHT COLUMN: HARDWARE SPECS (The Iron) */}
            <div className="space-y-8">
                 <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-purple"></div>
                    <h4 className="text-2xl font-display text-white">Hardware Specs</h4>
                </div>

                <div className="bg-[#0a0a12] border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-hexa-purple/5 rounded-bl-full"></div>
                    
                    <div className="space-y-8 relative z-10">
                        {/* Spec 1 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Cpu className="text-gray-500 group-hover:text-hexa-cyan transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-lg">Intel Core i5 IPC</h5>
                                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider mt-1">High-Performance Trajectory Planner</p>
                                <p className="text-gray-600 text-sm mt-2 leading-snug">
                                    Dedicated x86 host for heavy math. Decoupled from real-time constraints.
                                </p>
                            </div>
                        </div>

                        {/* Spec 2 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Network className="text-gray-500 group-hover:text-green-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-lg">EtherCAT Master</h5>
                                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider mt-1">1-4kHz Real-Time Bus</p>
                                <p className="text-gray-600 text-sm mt-2 leading-snug">
                                    Industrial standard for sub-microsecond synchronization of all drives.
                                </p>
                            </div>
                        </div>

                        {/* Spec 3 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <ShieldCheck className="text-gray-500 group-hover:text-yellow-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-lg">STM32 Safety Logic</h5>
                                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider mt-1">Dedicated Hardware Safety</p>
                                <p className="text-gray-600 text-sm mt-2 leading-snug">
                                    Independent MCU for E-Stop monitoring and Safety I/O. Failsafe by design.
                                </p>
                            </div>
                        </div>

                         {/* Spec 4 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Settings2 className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-lg">Modular I/O</h5>
                                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider mt-1">PCIe / USB 3.0 Expansion</p>
                                <p className="text-gray-600 text-sm mt-2 leading-snug">
                                    Ready for vision systems, extra sensors, and custom end-effectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Badge Row */}
                {/* <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-900/50 border border-white/5 p-3 rounded-lg flex items-center justify-center space-x-2">
                         <Zap className="text-yellow-500" size={16} />
                         <span className="text-gray-400 text-[10px] font-mono-plex uppercase">Hardware E-Stop</span>
                     </div>
                     <div className="bg-gray-900/50 border border-white/5 p-3 rounded-lg flex items-center justify-center space-x-2">
                         <Layers className="text-blue-500" size={16} />
                         <span className="text-gray-400 text-[10px] font-mono-plex uppercase">Intel x86 Arch</span>
                     </div>
                </div> */}

            </div>
        </div>
      </div>
    </section>
  );
};