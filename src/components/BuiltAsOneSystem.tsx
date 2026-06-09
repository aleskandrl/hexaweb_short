import React from 'react';
import { AccentRail } from './AccentRail';
import { Reveal } from './Reveal';
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
        <Reveal className="text-left mb-20">
            <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Platform Architecture</h2>
            <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-6">
              Built as <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">One System</span>
            </h3>
            <p className="text-gray-400 font-mono-plex max-w-3xl text-base md:text-lg leading-relaxed">
              Hexakinetica connects mechanical design, controller hardware, motion-control software, operator interface, simulation workflow, and validation prototypes into one practical robotics platform.
            </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: SOFTWARE ARCHITECTURE */}
            <div className="space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-hexa-cyan"></div>
                    <h4 className="text-3xl font-display text-white">Development Workflow</h4>
                </div>

                {/* The Brain */}
                <AccentRail
                    accent="cyan"
                    eyebrow="Development Workflow"
                    title="CAD and Motion Model"
                    description="CAD is used as the central source for mechanical layout, robot geometry, simulation models, and prototype development."
                    descriptionClassName="text-base text-gray-500"
                    tag={<span className="border border-gray-700 px-2 py-1 text-xs font-bold uppercase tracking-widest text-gray-600">Design Source</span>}
                >
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={urdfVisualizeImg}
                            loading="lazy"
                            decoding="async"
                            alt="URDF robot model visualization"
                            className="h-44 md:h-52 w-full rounded-xl object-cover opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                        />
                    </div>
                </AccentRail>

                {/* The Bridge */}
                <div className="flex flex-col items-center justify-center -my-4 relative z-10">
                    <div className="bg-hexa-bg border border-white/20 p-2 px-4 rounded-full text-center shadow-[0_0_15px_rgba(255,255,255,0.08)]">
                        <div className="text-white">
                            <span className="text-xs font-bold uppercase tracking-widest font-mono-plex">Software and Controller Loop</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-hexa-cyan/50 to-white/20 -mt-2 -z-10"></div>
                </div>

                {/* The Spinal Cord */}
                <AccentRail
                    accent="green"
                    eyebrow="Validation Loop"
                    title="Physical Validation Prototype"
                    description="Physical prototypes are used to test actuator behavior, controller logic, motion performance, and platform assumptions on real hardware."
                    descriptionClassName="text-base text-gray-500"
                    tag={<span className="border border-gray-700 px-2 py-1 text-xs font-bold uppercase tracking-widest text-gray-600">Validation</span>}
                >
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={stepperAxisImg}
                            loading="lazy"
                            decoding="async"
                            alt="Axis 4 stepper validation detail"
                            className="h-52 md:h-60 w-full rounded-xl object-cover opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                        />
                    </div>
                </AccentRail>
            </div>
            
            {/* RIGHT COLUMN: HARDWARE SPECS */}
            <div className="space-y-8">
                 <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-8 bg-white/70"></div>
                    <h4 className="text-3xl font-display text-white">Control & Integration Architecture</h4>
                </div>

                <div className="overflow-hidden rounded-xl group/blueprint">
                    <img
                        src={servoBlueprintImg}
                        loading="lazy"
                        decoding="async"
                        alt="Industrial servo with gear blueprint"
                        className="h-64 w-full rounded-xl object-cover opacity-80 grayscale transition-all duration-500 group-hover/blueprint:opacity-100 group-hover/blueprint:grayscale-0"
                    />
                </div>

                <div className="space-y-10">
                    <AccentRail
                        accent="purple"
                        eyebrow="System Control Layer"
                        title="Control Runtime Architecture"
                        description="Motion execution, device communication, I/O, and controller behavior are developed as one system layer."
                        titleClassName="text-xl"
                        descriptionClassName="font-sans text-base text-gray-600 leading-snug"
                    />
                    <AccentRail
                        accent="green"
                        eyebrow="Industrial Actuator Integration"
                        title="EtherCAT Motion Bus"
                        description="EtherCAT is used for larger configurations, industrial servo drives, distributed I/O, and cabinet-based actuator integration."
                        titleClassName="text-xl"
                        descriptionClassName="font-sans text-base text-gray-600 leading-snug"
                    />
                    <AccentRail
                        accent="white"
                        eyebrow="Platform Coordination"
                        title="Validation and Integration Workflow"
                        description="Controller behavior, actuator response, operator commands, and hardware feedback are tested together."
                        titleClassName="text-xl"
                        descriptionClassName="font-sans text-base text-gray-600 leading-snug"
                    />
                    <AccentRail
                        accent="cyan"
                        eyebrow="Configuration and Testing"
                        title="Operator Software Integration"
                        description="HexaStudio supports robot setup, jogging, motion commands, controller communication, monitoring, and test workflows."
                        titleClassName="text-xl"
                        descriptionClassName="font-sans text-base text-gray-600 leading-snug"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
















