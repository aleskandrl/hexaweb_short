import React from 'react';
import { AccentRail } from './AccentRail';
import { Reveal } from './Reveal';
// HexaStudio HMI visual used to anchor the software workflow section.
import hmiImg from '../assets/images/products/HexaStudio-HMI.png';

export const OperatorSoftwareWorkflow: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The grid gives more width to the product interface visual than to the explanatory copy. */}
        {/* Top block: text and image in two columns. */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Text column uses two fifths of the large-screen width. */}
          <Reveal className="order-2 lg:order-1 lg:col-span-2">
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
          </Reveal>

          {/* Image column uses three fifths of the large-screen width. */}
          <div className="relative group order-1 lg:order-2 lg:col-span-3">

             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full"></div>

             <img
                src={hmiImg}
                loading="lazy"
                decoding="async"
                alt="HexaStudio Interface"
                className="relative w-full h-auto aspect-video object-cover rounded-xl border border-gray-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-12 lg:mt-16">
            <Reveal delay={0}>
              <AccentRail
                accent="cyan"
                eyebrow="Operator Workflow"
                title="Configuration"
                titleClassName="text-xl"
                description="robot parameters and setup"
                descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
              />
            </Reveal>
            <Reveal delay={80}>
              <AccentRail
                accent="white"
                eyebrow="Operator Workflow"
                title="Motion Commands"
                titleClassName="text-xl"
                description="jogging and program execution"
                descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
              />
            </Reveal>
            <Reveal delay={160}>
              <AccentRail
                accent="purple"
                eyebrow="Operator Workflow"
                title="Controller Interface"
                titleClassName="text-xl"
                description="communication with HexaCore"
                descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
              />
            </Reveal>
            <Reveal delay={240}>
              <AccentRail
                accent="green"
                eyebrow="Operator Workflow"
                title="Monitoring"
                titleClassName="text-xl"
                description="state, feedback, and diagnostics"
                descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
              />
            </Reveal>
        </div>
      </div>
    </section>
  );
};
