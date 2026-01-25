import React from 'react';
import { Terminal, Monitor, Cpu, Activity, Zap, Code } from 'lucide-react';
// Убедитесь, что ваше изображение HMI находится по этому пути
import hmiImg from '../assets/images/products/HexaStudio-HMI.png'; 

export const DeveloperExperience: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 
          ИЗМЕНЕНИЕ: Сетка теперь не 1:1, а 2:3, отдавая больше места изображению.
          Вместо 'lg:grid-cols-2' используется 'lg:grid-cols-5'.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Текстовая колонка теперь занимает 2/5 ширины на больших экранах */}
          <div className="order-2 lg:order-1 lg:col-span-2">
             <div className="flex items-center space-x-2 mb-6">
                 <div className="bg-hexa-purple/20 border border-hexa-purple p-2 rounded-lg">
                     <Code className="text-hexa-purple" size={24} />
                 </div>
                 <span className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-widest">Software Stack</span>
             </div>
             
             <h3 className="font-display text-5xl text-white uppercase mb-6 leading-tight">
               Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Motion</span><br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Engine</span>
             </h3>
             
             <p className="text-gray-400 font-mono-plex text-base mb-8 leading-relaxed">
               At the core runs our <strong>Custom High-Performance Control System</strong> on a Real-Time Linux Kernel. 
               <br/><br/>
               Operate standalone via our <strong>Native HMI</strong> without writing a single line of code. 
               Need custom integration? The source code is yours — extend the C++ API or bridge to ROS 2.
             </p>

             <div className="grid grid-cols-2 gap-4">
                <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                    <Zap className="text-hexa-cyan" size={24} />
                    <div>
                        <div className="text-white font-display text-base">Linux RT</div>
                        <div className="text-xs text-gray-500 uppercase">Preempt Kernel</div>
                    </div>
                </div>
                <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                    <Cpu className="text-white" size={24} />
                    <div>
                        <div className="text-white font-display text-base">C++ Core</div>
                        <div className="text-xs text-gray-500 uppercase">In-House Engine</div>
                    </div>
                </div>
                <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                    <Monitor className="text-hexa-purple" size={24} />
                    <div>
                        <div className="text-white font-display text-base">Native HMI</div>
                        <div className="text-xs text-gray-500 uppercase">Embedded UI</div>
                    </div>
                </div>
                <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                    <Activity className="text-gray-500" size={24} />
                    <div>
                        <div className="text-white font-display text-base">ROS 2</div>
                        <div className="text-xs text-gray-500 uppercase">Optional Bridge</div>
                    </div>
                </div>
             </div>
          </div>

          {/* Колонка с изображением теперь занимает 3/5 ширины */}
          <div className="relative group order-1 lg:order-2 lg:col-span-3">
             
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full"></div>

             <img 
                src={hmiImg} 
                alt="HexaStudio Interface" 
                className="relative w-full h-auto aspect-video object-cover rounded-xl border border-gray-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

          </div>

        </div>
      </div>
    </section>
  );
};