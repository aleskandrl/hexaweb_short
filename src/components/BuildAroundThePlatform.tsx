import React from 'react';
import { Check, Shield, Zap, Rocket, ArrowRight } from 'lucide-react';
import { WAITLIST_URL } from '../siteLinks';

export const BuildAroundThePlatform: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-hexa-bg relative border-t border-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
           <h2 className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-2">Early Access</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">Build Around The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Platform</span></h3>
           <p className="mt-4 text-gray-400 font-mono-plex max-w-xl text-base md:text-lg">
               Hexakinetica is in active development and validation. Join the early audience or contact us to discuss education, prototyping, validation, or early automation use cases.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           
           {/* Early Adopter / Maker Tier */}
           <div className="bg-hexa-card border border-hexa-cyan/30 p-10 rounded-xl flex flex-col relative group hover:border-hexa-cyan transition-all shadow-[0_0_30px_rgba(152,243,255,0.05)]">
              <div className="absolute top-0 right-0 bg-hexa-cyan/10 text-white font-bold text-xs uppercase px-3 py-1 rounded-bl-lg tracking-widest border-l border-b border-hexa-cyan/30">Development Stage</div>
              <div className="mb-6">
                  <Rocket className="text-white mb-4" size={40}/>
                  <h4 className="text-white font-display uppercase text-3xl">Early Access</h4>
                  <div className="text-base text-gray-400 font-mono-plex mt-2">For Makers, Educators & Labs</div>
              </div>
              
              <div className="flex-grow space-y-6 mb-8">
                 <p className="text-gray-300 text-base leading-relaxed">
                      Follow the Maker line and help shape a practical robot arm platform for learning, prototyping, software testing, and hands-on development.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-white mr-3 mt-1 shrink-0"/> <span>Development updates and early materials</span></li>
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-white mr-3 mt-1 shrink-0"/> <span>Maker line feedback opportunities</span></li>
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-white mr-3 mt-1 shrink-0"/> <span>Future hardware availability notifications</span></li>
                 </ul>
              </div>

          <a 
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-transparent text-white border border-hexa-cyan/60 font-mono-plex text-sm font-bold uppercase hover:bg-transparent transition-all shadow-lg flex items-center justify-center"
          >
            Join Waitlist!
            <ArrowRight size={16} className="ml-2"/>
          </a>
           </div>

           {/* Strategic Partner / Investor Tier */}
           <div className="bg-hexa-card border border-hexa-purple/30 p-10 rounded-xl flex flex-col relative group hover:border-hexa-purple transition-all shadow-[0_0_30px_rgba(140,82,255,0.05)]">
              <div className="mb-6">
                  <Shield className="text-hexa-purple mb-4" size={40}/>
                  <h4 className="text-white font-display uppercase text-3xl">Pilot Inquiry</h4>
                  <div className="text-base text-gray-400 font-mono-plex mt-2">For Organizations & Partners</div>
              </div>
              
              <div className="flex-grow space-y-6 mb-8">
                 <p className="text-gray-300 text-base leading-relaxed">
                      Exploring robotics education, prototyping, validation hardware, or early automation development? Contact us to discuss the platform direction.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-hexa-purple mr-3 mt-1 shrink-0"/> <span>Platform and validation discussion</span></li>
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-hexa-purple mr-3 mt-1 shrink-0"/> <span>Education, lab, or prototype use cases</span></li>
                     <li className="flex items-start text-gray-400 text-base"><Check size={16} className="text-hexa-purple mr-3 mt-1 shrink-0"/> <span>Early automation development feedback</span></li>
                 </ul>
              </div>

              <button 
                onClick={scrollToContact} 
                className="w-full py-4 border border-hexa-purple text-hexa-purple font-mono-plex text-sm font-bold uppercase hover:bg-hexa-purple hover:text-white transition-all flex items-center justify-center"
              >
                Contact Us
                <Zap size={16} className="ml-2"/>
              </button>
           </div>
        </div>
        
        <div className="mt-12 text-left border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 font-mono-plex max-w-3xl leading-relaxed">
                <span className="text-white font-bold">NOTE:</span> Hexakinetica follows an open-architecture direction: clear documentation, visible system design, and selected development materials shared with early users where appropriate. The platform is under development and should not be presented as a certified factory-ready industrial robot.
            </p>
        </div>
      </div>
    </section>
  );
};
