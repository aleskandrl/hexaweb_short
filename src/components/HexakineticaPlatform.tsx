import React from 'react';
import { HexaCoreMotionArchitecture } from './HexaCoreMotionArchitecture';
import { SelectEnvironment } from './SelectEnvironment';

export const HexakineticaPlatform: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-left">
          <h2 className="text-white font-sans font-bold uppercase text-sm tracking-[0.2em] mb-4 glow-text">
             The Hexakinetica Platform
          </h2>
          <h3 className="font-display text-3xl md:text-5xl text-white uppercase">
            One Platform. <span className="text-hexa-purple">Two Directions.</span>
          </h3>
          <p className="mt-6 text-gray-400 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            Maker and PRO lines are developed around the same platform foundation: real hardware, motion control, operator software, simulation workflow, and engineering documentation.
          </p>
        </div>

        {/* 1. The Brain: The Controller Block */}
        <HexaCoreMotionArchitecture />

        {/* 2. Any Body: The Robot Arms Block */}
        <SelectEnvironment />

      </div>
    </section>
  );
};
