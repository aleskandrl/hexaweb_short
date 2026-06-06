import React from 'react';
import { Cpu, Activity, Zap, Settings } from 'lucide-react';
// Убедитесь, что ваше изображение HMI находится по этому пути
import hmiImg from '../assets/images/products/HexaStudio-HMI.png'; 

export const OperatorSoftwareWorkflow: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 
          ИЗМЕНЕНИЕ: Сетка теперь не 1:1, а 2:3, отдавая больше места изображению.
          Вместо 'lg:grid-cols-2' используется 'lg:grid-cols-5'.
        */}
        {/* Верхний блок: текст + изображение в две колонки */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Текстовая колонка теперь занимает 2/5 ширины на больших экранах */}
          <div className="order-2 lg:order-1 lg:col-span-2">
             <div className="mb-6">
                 <span className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-widest">Software Layer</span>
             </div>

             <h3 className="font-display text-4xl sm:text-5xl text-white uppercase mb-6 leading-tight whitespace-nowrap">
               Hexa<span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Studio</span>
             </h3>

             <p className="text-gray-400 font-mono-plex text-base leading-relaxed">
               HexaStudio is being developed as the operator software for configuring, testing, monitoring, and controlling Hexakinetica robot arms.
               <br/><br/>
               It provides a practical interface for robot setup, motion commands, jogging, program execution, controller communication, and system feedback.
               <br/><br/>
               The goal is to make robot operation more visible and testable through a dedicated interface instead of disconnected scripts, terminal commands, or controller-specific tools.
             </p>
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

        {/* Карточки в одну линию под изображением — цельная композиция */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16">
            <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                <Settings className="text-white shrink-0" size={24} />
                <div>
                    <div className="text-white font-display text-base">Configuration</div>
                    <div className="text-xs text-gray-500 uppercase">robot parameters and setup</div>
                </div>
            </div>
            <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                <Zap className="text-white shrink-0" size={24} />
                <div>
                    <div className="text-white font-display text-base">Motion Commands</div>
                    <div className="text-xs text-gray-500 uppercase">jogging and program execution</div>
                </div>
            </div>
            <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                <Cpu className="text-hexa-purple shrink-0" size={24} />
                <div>
                    <div className="text-white font-display text-base">Controller Interface</div>
                    <div className="text-xs text-gray-500 uppercase">communication with HexaCore</div>
                </div>
            </div>
            <div className="bg-hexa-card p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
                <Activity className="text-gray-500 shrink-0" size={24} />
                <div>
                    <div className="text-white font-display text-base">Monitoring</div>
                    <div className="text-xs text-gray-500 uppercase">state, feedback, and diagnostics</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
