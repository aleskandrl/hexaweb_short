
import React from 'react';
import { Reveal } from './Reveal';

const stack = [
  { name: 'ROS 2', color: '#22314E', desc: 'Middleware' },
  { name: 'EtherCAT', color: '#E2001A', desc: 'Real-Time Bus' },
  { name: 'Preempt_RT', color: '#F7B93E', desc: 'Linux Kernel' },
  { name: 'Python', color: '#3776AB', desc: 'API Layer' },
  { name: 'C++20', color: '#00599C', desc: 'Core Logic' },
  { name: 'Docker', color: '#2496ED', desc: 'Deployment' },
  { name: 'OpenCV', color: '#5C3EE8', desc: 'Vision' },
];

export const BuiltUponIndustrialOpenStandards: React.FC = () => {
  return (
    <section className="bg-black border-y border-gray-900 py-12 overflow-hidden relative z-20">
      <Reveal className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-mono-plex text-gray-500 uppercase tracking-[0.3em]">
            Built Upon Industrial Open Standards
          </p>
      </Reveal>
      
      <div className="relative w-full overflow-hidden group">
        <div className="absolute top-0 left-0 h-full w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...stack, ...stack, ...stack].map((tech, index) => (
            <div key={index} className="mx-8 md:mx-16 flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-help group/tech">
              <div className="flex items-center space-x-3 mb-1">
                 <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></div>
                 <span className="text-lg md:text-xl font-display text-gray-300">{tech.name}</span>
              </div>
              <span className="text-[9px] font-mono-plex text-white uppercase tracking-wider opacity-0 group-hover/tech:opacity-100 transition-opacity absolute -bottom-4">
                  {tech.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};