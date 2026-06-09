import React from 'react';
import ipcImg from '../assets/images/products/hexacore-cabinet.png';
import { AccentRail } from './AccentRail';

export const HexaCoreMotionArchitecture: React.FC = () => {
  return (
    <div className="p-2 md:p-4 mb-24 relative overflow-hidden group transition-all duration-500">
        
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none bg-hexa-purple/10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none bg-hexa-cyan/5"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
                
                {/* Left: The Pitch */}
                <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
                    
                    {/* Badge */}
                    <AccentRail
                        accent="purple"
                        eyebrow="Controller Architecture"
                        title={<>HexaCore Motion <br /> Architecture</>}
                        titleClassName="text-3xl md:text-4xl leading-tight"
                        description={(
                          <>
                            HexaCore is the motion-control foundation behind the Hexakinetica platform. It connects robot arm hardware, motor drives, operator software, and simulation into one practical workflow for testing, validation, and operation.
                            <br />
                            <br />
                            The same architecture supports both platform directions: accessible Maker systems for development and education, and PRO systems built around stronger mechanics, EtherCAT motion, and integration-oriented control.
                          </>
                        )}
                        descriptionClassName="text-sm md:text-base max-w-xl"
                    />

                </div>
                
                {/* Right: The Product Visual */}
                <div className="lg:w-1/2 w-full flex flex-col">
                     <div className="relative group/visual flex-grow">
                         
                         {/* Decorative Ambient Glow */}
                         <div className="absolute inset-0 bg-hexa-purple/5 rounded-full blur-3xl opacity-50 group-hover/visual:opacity-100 transition duration-1000"></div>
                         
                         <div className="relative h-full min-h-[400px] w-full flex items-center justify-center">
                             <img 
                                 src={ipcImg}
                                 alt="HexaCore Industrial Controller"
                                 className="relative z-10 w-[85%] h-auto rounded-xl object-contain filter grayscale contrast-125 brightness-90 drop-shadow-[0_0_30px_rgba(140,82,255,0.15)] group-hover/visual:grayscale-0 group-hover/visual:drop-shadow-[0_0_40px_rgba(140,82,255,0.4)] transition-all duration-700 transform group-hover/visual:scale-105"
                             />
                             
                             {/* Floating Label */}
                              <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 px-2 py-1">
                                  <p className="text-white font-display text-sm tracking-wide">HexaCore <span className="text-white">PRO</span></p>
                             </div>
                         </div>
                     </div>
                </div>

            </div>

            {/* Tech Specs Grid (Full Width) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-8 mt-8 lg:mt-12 w-full">
                <AccentRail
                    accent="cyan"
                    title="EtherCAT Motion"
                    titleClassName="text-xl"
                    description="Industrial Fieldbus"
                    descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
                />
                <AccentRail
                    accent="white"
                    title="Simulation Bridge"
                    titleClassName="text-xl"
                    description="Validation Workflow"
                    descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
                />
                <AccentRail
                    accent="purple"
                    title="Robot Control"
                    titleClassName="text-xl"
                    description="Motion Execution"
                    descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
                />
                <AccentRail
                    accent="green"
                    title="Operator Software"
                    titleClassName="text-xl"
                    description="Configuration and Diagnostics"
                    descriptionClassName="text-xs uppercase tracking-[0.22em] text-gray-500"
                />
            </div>
        </div>
    </div>
  );
};