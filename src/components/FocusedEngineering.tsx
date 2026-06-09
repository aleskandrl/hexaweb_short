import React from 'react';
import { Reveal } from './Reveal';

export const FocusedEngineering: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-hexa-bg relative overflow-hidden">
      {/* Background Elements - Less "Gamer", More "Blueprint" */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,82,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,82,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-left">
          <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Who Builds This?</h2>
          <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-6">
             Focused <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Engineering</span>
          </h3>
          <p className="text-gray-400 font-mono-plex max-w-3xl text-base md:text-lg leading-relaxed">
             Hexakinetica is a robotics R&D effort built around systems-level development: mechanical design, motion control, controller architecture, operator software, simulation workflow, and physical testing are developed as one connected platform.
             <br/><br/>
             The current stage is R&D: proving the platform direction, refining the Maker line, developing the PRO concept direction, and preparing for pilot integration.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
