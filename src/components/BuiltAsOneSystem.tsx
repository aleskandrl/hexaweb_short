import React from 'react';
import { Cpu, ShieldCheck, Network, Settings2, Server, Activity, Database, Zap, Layers } from 'lucide-react';
import servoBlueprintImg from '../assets/images/products/servo-gear-blueprint.png';
import stepperAxisImg from '../assets/images/products/stepper-axis-4.png';
import urdfVisualizeImg from '../assets/images/products/urdf-visualize.png';

export const BuiltAsOneSystem: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg border-t border-gray-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-20">
            <h2 className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Platform Architecture</h2>
            <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-6">
              Built as <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">One System</span>
            </h3>
            <p className="text-gray-400 font-mono-plex max-w-3xl text-base md:text-lg leading-relaxed">
              Hexakinetica connects mechanical design, controller hardware, motion-control software, operator interface, simulation workflow, and validation prototypes into one practical robotics platform.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: SOFTWARE ARCHITECTURE */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-cyan"></div>
                    <h4 className="text-3xl font-display text-white">Development Workflow</h4>
                </div>

                {/* The Brain */}
                <div className="bg-hexa-card border border-gray-800 rounded-xl p-6 relative group hover:border-hexa-cyan/30 transition-all">
                    <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">Design Source</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-hexa-cyan/10 p-3 rounded-lg">
                             <Server className="text-white" size={24} />
                        </div>
                        <div>
                            <h5 className="text-xl font-display text-white mb-2">CAD and Motion Model</h5>
                            <p className="text-gray-500 text-base font-mono-plex leading-relaxed mb-3">
                                CAD is used as the central source for mechanical layout, robot geometry, simulation models, and prototype development.
                            </p>
                            <div className="mb-4 overflow-hidden rounded-lg border border-hexa-cyan/20 bg-black/30">
                                <img
                                    src={urdfVisualizeImg}
                                    alt="URDF robot model visualization"
                                    className="h-44 md:h-52 w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Bridge */}
                <div className="flex flex-col items-center justify-center -my-4 relative z-10">
                    <div className="bg-hexa-bg border border-hexa-purple/50 p-2 px-4 rounded-full text-center shadow-[0_0_15px_rgba(140,82,255,0.2)]">
                        <div className="flex items-center space-x-2 text-hexa-purple">
                            <Database size={14} />
                            <span className="text-xs font-bold uppercase tracking-widest font-mono-plex">Software and Controller Loop</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-hexa-cyan/50 to-green-500/50 -mt-2 -z-10"></div>
                </div>

                {/* The Spinal Cord */}
                <div className="bg-hexa-card border border-gray-800 rounded-xl p-6 relative group hover:border-green-500/30 transition-all">
                    <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">Validation</div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-green-500/10 p-3 rounded-lg">
                             <Activity className="text-green-500" size={24} />
                        </div>
                        <div>
                            <h5 className="text-xl font-display text-white mb-2">Physical Validation Prototype</h5>
                            <p className="text-gray-500 text-base font-mono-plex leading-relaxed mb-3">
                                Physical prototypes are used to test actuator behavior, controller logic, motion performance, and platform assumptions on real hardware.
                            </p>
                            <div className="mb-4 overflow-hidden rounded-lg border border-green-500/20 bg-black/30">
                                <img
                                    src={stepperAxisImg}
                                    alt="Axis 4 stepper validation detail"
                                    className="h-52 md:h-60 w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* RIGHT COLUMN: HARDWARE SPECS */}
            <div className="space-y-8">
                 <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-purple"></div>
                    <h4 className="text-3xl font-display text-white">Control & Integration Architecture</h4>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-hexa-purple/20 bg-black/30 p-3 shadow-[0_0_30px_rgba(140,82,255,0.06)] group/blueprint">
                    <div className="absolute inset-0 bg-gradient-to-br from-hexa-purple/10 via-transparent to-hexa-cyan/5 pointer-events-none"></div>
                    <img
                        src={servoBlueprintImg}
                        alt="Industrial servo with gear blueprint"
                        className="relative h-64 w-full rounded-lg object-cover opacity-75 grayscale transition-all duration-500 group-hover/blueprint:opacity-100 group-hover/blueprint:grayscale-0"
                    />
                    <div className="absolute bottom-5 left-5 rounded-md border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
                        <p className="text-[10px] font-mono-plex uppercase tracking-widest text-gray-400">Motion Hardware Detail</p>
                    </div>
                </div>

                <div className="bg-hexa-bg border border-gray-800 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-hexa-purple/5 rounded-bl-full"></div>
                    
                    <div className="space-y-8 relative z-10">
                        {/* Spec 1 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Cpu className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Control Runtime Architecture</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">System Control Layer</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    Motion execution, device communication, I/O, and controller behavior are developed as one system layer.
                                </p>
                            </div>
                        </div>

                        {/* Spec 2 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Network className="text-gray-500 group-hover:text-green-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">EtherCAT Motion Bus</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Industrial Actuator Integration</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    EtherCAT is used for larger configurations, industrial servo drives, distributed I/O, and cabinet-based actuator integration.
                                </p>
                            </div>
                        </div>

                        {/* Spec 3 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <ShieldCheck className="text-gray-500 group-hover:text-yellow-500 transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Validation and Integration Workflow</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Platform Coordination</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    Controller behavior, actuator response, operator commands, and hardware feedback are tested together.
                                </p>
                            </div>
                        </div>

                         {/* Spec 4 */}
                        <div className="group flex items-start space-x-4">
                            <div className="mt-1">
                                <Settings2 className="text-gray-500 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h5 className="text-white font-display text-xl">Operator Software Integration</h5>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-wider mt-1">Configuration and Testing</p>
                                <p className="text-gray-600 text-base mt-2 leading-snug font-sans">
                                    HexaStudio supports robot setup, jogging, motion commands, controller communication, monitoring, and test workflows.
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










