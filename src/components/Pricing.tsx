import React from 'react';
import { Check, Shield, Zap, Rocket, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-hexa-bg relative border-t border-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-hexa-purple font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-2">Ecosystem Access</h2>
           <h3 className="font-display text-4xl text-white uppercase">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Revolution</span></h3>
           <p className="mt-4 text-gray-400 font-mono-plex text-sm max-w-xl mx-auto">
               We are currently in the Engineering Validation phase. Secure your spot in line or partner with us for early industrial pilots.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           
           {/* Early Adopter / Maker Tier */}
           <div className="bg-[#0f0a1e] border border-hexa-cyan/30 p-10 rounded-2xl flex flex-col relative group hover:border-hexa-cyan transition-all shadow-[0_0_30px_rgba(152,243,255,0.05)]">
              <div className="absolute top-0 right-0 bg-hexa-cyan/10 text-hexa-cyan font-bold text-[10px] uppercase px-3 py-1 rounded-bl-lg tracking-widest border-l border-b border-hexa-cyan/30">Limited Batch</div>
              <div className="mb-6">
                  <Rocket className="text-hexa-cyan mb-4" size={40}/>
                  <h4 className="text-white font-display uppercase text-2xl">Early Adopter</h4>
                  <div className="text-sm text-gray-400 font-mono-plex mt-2">For Makers & Universities</div>
              </div>
              
              <div className="flex-grow space-y-6 mb-8">
                 <p className="text-gray-300 text-sm leading-relaxed">
                     Get priority access to the first batch of <strong>HexaArm Medium DIY Kits</strong>. 
                     Includes full CAD access, BOM, and assembly guides.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-cyan mr-3 mt-0.5 shrink-0"/> <span>Priority Hardware Allocation</span></li>
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-cyan mr-3 mt-0.5 shrink-0"/> <span>Access to Private Dev Discord</span></li>
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-cyan mr-3 mt-0.5 shrink-0"/> <span>Beta Firmware Updates</span></li>
                 </ul>
              </div>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScbr9Jbu8GRUh6469mXskMJ12ORzINa7Fu9etrx7c3La6z1Eg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-hexa-cyan text-black font-mono-plex text-sm font-bold uppercase hover:bg-white transition-all shadow-lg flex items-center justify-center"
          >
            Join Waitlist!
            <ArrowRight size={16} className="ml-2"/>
          </a>
           </div>

           {/* Strategic Partner / Investor Tier */}
           <div className="bg-[#0f0a1e] border border-hexa-purple/30 p-10 rounded-2xl flex flex-col relative group hover:border-hexa-purple transition-all shadow-[0_0_30px_rgba(140,82,255,0.05)]">
              <div className="mb-6">
                  <Shield className="text-hexa-purple mb-4" size={40}/>
                  <h4 className="text-white font-display uppercase text-2xl">Strategic Partner</h4>
                  <div className="text-sm text-gray-400 font-mono-plex mt-2">For Industry & Investors</div>
              </div>
              
              <div className="flex-grow space-y-6 mb-8">
                 <p className="text-gray-300 text-sm leading-relaxed">
                     Looking to integrate HexaKinetica into your production line or portfolio? 
                     We offer direct engineering support and pilot programs.
                 </p>
                 <ul className="space-y-3">
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-purple mr-3 mt-0.5 shrink-0"/> <span>Pilot Implementation Program</span></li>
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-purple mr-3 mt-0.5 shrink-0"/> <span>Custom R&D Contracts</span></li>
                     <li className="flex items-start text-gray-400 text-sm"><Check size={16} className="text-hexa-purple mr-3 mt-0.5 shrink-0"/> <span>Direct Founder Access</span></li>
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
        
        <div className="mt-12 text-center border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 font-mono-plex max-w-3xl mx-auto leading-relaxed">
                <span className="text-white font-bold">NOTE:</span> We are an Open Hardware company. 
                The core schematics and software will always be free for non-commercial research. 
                Commercial licenses and certified hardware kits are available for partners.
            </p>
        </div>
      </div>
    </section>
  );
};