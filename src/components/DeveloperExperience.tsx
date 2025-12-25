import React from 'react';
import { Terminal, Monitor, Cpu, Activity, Zap, Code } from 'lucide-react';
// Замените на скриншот вашего реального софта (HMI/IDE)
// Пока используем заглушку для демонстрации
import hmiImg from '../assets/images/ui/hmi.png'; 

export const DeveloperExperience: React.FC = () => {
  return (
    <section className="py-24 bg-[#080510] relative overflow-hidden border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
             <div className="flex items-center space-x-2 mb-6">
                 <div className="bg-hexa-purple/20 border border-hexa-purple p-2 rounded-lg">
                     <Code className="text-hexa-purple" size={24} />
                 </div>
                 <span className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-widest">Software Stack</span>
             </div>
             
             <h3 className="font-display text-4xl text-white uppercase mb-6 leading-tight">
               Native C++ <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Motion Engine</span>
             </h3>
             
             <p className="text-gray-400 font-mono-plex mb-8 leading-relaxed">
               At the core runs our <strong>Custom High-Performance Control System</strong> on a Real-Time Linux Kernel. 
               <br/><br/>
               Operate standalone via our <strong>Native HMI</strong> without writing a single line of code. 
               Need custom integration? The source code is yours — extend the C++ API or bridge to ROS 2.
             </p>

             {/* Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0f0a1e] p-4 rounded border border-gray-800 flex items-center space-x-3">
                    <Zap className="text-hexa-cyan" size={20} />
                    <div>
                        <div className="text-white font-display text-sm">Linux RT</div>
                        <div className="text-[10px] text-gray-500 uppercase">Preempt Kernel</div>
                    </div>
                </div>
                <div className="bg-[#0f0a1e] p-4 rounded border border-gray-800 flex items-center space-x-3">
                    <Cpu className="text-white" size={20} />
                    <div>
                        <div className="text-white font-display text-sm">C++ Core</div>
                        <div className="text-[10px] text-gray-500 uppercase">In-House Engine</div>
                    </div>
                </div>
                <div className="bg-[#0f0a1e] p-4 rounded border border-gray-800 flex items-center space-x-3">
                    <Monitor className="text-hexa-purple" size={20} />
                    <div>
                        <div className="text-white font-display text-sm">Native HMI</div>
                        <div className="text-[10px] text-gray-500 uppercase">Embedded UI</div>
                    </div>
                </div>
                <div className="bg-[#0f0a1e] p-4 rounded border border-gray-800 flex items-center space-x-3">
                    <Activity className="text-gray-500" size={20} />
                    <div>
                        <div className="text-white font-display text-sm">ROS 2</div>
                        <div className="text-[10px] text-gray-500 uppercase">Optional Bridge</div>
                    </div>
                </div>
             </div>
          </div>

          {/* --- VISUAL SIDE: HMI PREVIEW --- */}
          <div className="relative group order-1 lg:order-2">
             
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full"></div>

             {/* Laptop/Screen Container */}
             <div className="relative bg-[#1a1b26] border border-gray-700 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                 
                 {/* Window Header (Mac-style) */}
                 <div className="flex items-center px-4 py-3 bg-[#16161e] border-b border-gray-800">
                     <div className="flex space-x-2">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="ml-4 text-xs text-gray-500 font-mono-plex">HexaStudio — /opt/hexa/projects/demo.cpp</div>
                 </div>

                 {/* HMI Image */}
                 <div className="relative aspect-video bg-black">
                      {/* Вставьте сюда скриншот HMI. 
                          Если картинки нет, используйте div с градиентом как заглушку */}
                      <img 
                        src={hmiImg} 
                        alt="HexaStudio Interface" 
                        className="w-full h-full object-cover opacity-90"
                      />
                      
                      {/* Overlay UI Elements (Fake floating panels to add depth) */}
                      {/* <div className="absolute top-4 right-4 bg-black/80 border border-gray-700 p-3 rounded-lg backdrop-blur-sm w-32 hidden md:block">
                          <div className="text-[10px] text-gray-400 uppercase mb-1">Joint States</div>
                          <div className="space-y-1">
                              <div className="h-1 w-full bg-gray-700 rounded overflow-hidden"><div className="h-full w-[40%] bg-hexa-cyan"></div></div>
                              <div className="h-1 w-full bg-gray-700 rounded overflow-hidden"><div className="h-full w-[70%] bg-hexa-purple"></div></div>
                              <div className="h-1 w-full bg-gray-700 rounded overflow-hidden"><div className="h-full w-[20%] bg-white"></div></div>
                          </div>
                      </div> */}

                      {/*<div className="absolute bottom-4 left-4 bg-black/80 border border-green-500/30 p-2 rounded backdrop-blur-sm flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] text-green-400 font-mono-plex">Connected: 192.168.1.10</span>
                      </div>*/}
                 </div>
             </div>

             {/* Decor under */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hexa-cyan/5 rounded-full blur-2xl -z-10"></div>

          </div>

        </div>
      </div>
    </section>
  );
};