import React from 'react';
import { Reveal } from './Reveal';

export const AdoptionGap: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(140, 82, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-left mb-20">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Why Accessibility Matters</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Robotics Adoption Gap</span>
           </h3>
           <p className="mt-6 text-gray-400 font-mono-plex max-w-4xl text-base md:text-lg leading-relaxed">
              Robotics is no longer a niche technology. In 2024, factories installed <strong className="text-white">542,000 industrial robots worldwide</strong> — more than double the level of ten years earlier — while the global operational stock reached <strong className="text-white">4.66 million robots</strong>.
              <br/><br/>
              But adoption is still uneven. For many users, the barrier is not only the robot arm itself, but integration, programming, tooling, safety, maintenance, and the learning curve.
              <br/><br/>
              Hexakinetica focuses on this gap by making robot arm technology easier to access, understand, test, modify, and build around — through real hardware, motion control, software, and simulation.
           </p>
        </Reveal>

        {/*
        Boss feedback: hide this chart-and-metrics block for now.
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] gap-10 items-stretch mb-20">
          ... chart and metric cards intentionally commented out ...
        </div>
        */}
        
        {/* Conclusion */}
        <div className="text-left pt-12 border-t border-white/10">
            <h3 className="text-gray-300 font-mono-plex text-lg md:text-xl leading-relaxed">
                Robotics demand is accelerating. The gap is not interest — the gap is access, integration, skills, and cost.
            </h3>
        </div>

      </div>
    </section>
  );
};