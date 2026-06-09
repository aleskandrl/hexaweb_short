import React from 'react';
import { WAITLIST_URL } from '../siteLinks';
import { AccentRail } from './AccentRail';
import { Reveal } from './Reveal';

export const BuildAroundThePlatform: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-hexa-bg relative border-t border-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-left mb-16">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-2">Early Access</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">Build Around The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Platform</span></h3>
           <p className="mt-4 text-gray-400 font-mono-plex max-w-xl text-base md:text-lg">
               Hexakinetica is in active development and validation. Join the audience or contact us to discuss education, prototyping, validation, or automation use cases.
           </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           
           {/* Early Adopter / Maker Tier */}
           <AccentRail
              accent="cyan"
              eyebrow="For Makers, Educators & Labs"
              title="Early Access"
              titleClassName="uppercase text-3xl"
              description="Follow the Maker line and help shape a practical robotics ecosystem for learning, prototyping, software testing, and hands-on development."
              descriptionClassName="text-base text-gray-300"
              tag={<span className="border border-hexa-cyan/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Development Stage</span>}
              footer={
                <a 
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center border border-white/60 bg-transparent py-4 text-sm font-bold uppercase text-white font-mono-plex transition-all hover:bg-white/10"
                >
                  Join Waitlist!
                </a>
              }
           >
              <ul className="space-y-3">
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"></span><span>Development updates and early materials</span></li>
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"></span><span>Maker line feedback opportunities</span></li>
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"></span><span>Future hardware availability notifications</span></li>
              </ul>
           </AccentRail>

           {/* Strategic Partner / Investor Tier */}
           <AccentRail
              accent="purple"
              eyebrow="For Organizations & Partners"
              title="Pilot Inquiry"
              titleClassName="uppercase text-3xl"
              description="Exploring robotics education, prototyping, validation hardware, or early automation development? Contact us to discuss the platform direction."
              descriptionClassName="text-base text-gray-300"
              footer={
                <button 
                  onClick={scrollToContact} 
                  className="inline-flex w-full items-center justify-center border border-white/60 bg-transparent py-4 text-sm font-bold uppercase text-white font-mono-plex transition-all hover:bg-white/10"
                >
                  Contact Us
                </button>
              }
           >
              <ul className="space-y-3">
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hexa-cyan/80"></span><span>Platform and validation discussion</span></li>
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hexa-cyan/80"></span><span>Education, lab, or prototype use cases</span></li>
                  <li className="flex items-start text-gray-400 text-base"><span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hexa-cyan/80"></span><span>Early automation development feedback</span></li>
              </ul>
           </AccentRail>
        </div>
        
        <div className="mt-12 text-left border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 font-mono-plex max-w-3xl leading-relaxed">
                <span className="text-white font-bold">NOTE:</span> Hexakinetica follows an open-architecture direction: clear documentation, visible system design, and selected development materials shared with users where appropriate. The platform is under development and should not be presented as a certified factory-ready industrial robot.
            </p>
        </div>
      </div>
    </section>
  );
};
