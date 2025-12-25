
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { q: "What is the current stage of the company?", a: "We are currently in the Pre-Seed / R&D phase. Our core technology (Unified Controller) is in Alpha, and we are finalizing the mechanical design for the HexaArm Medium DIY kit. We are preparing for a Seed round in late 2025." },
    { q: "What is your 'Unfair Advantage'?", a: "Unlike competitors who lock you into proprietary ecosystems, we use a standard Linux/ROS2 stack on commodity hardware. We have drastically reduced the BOM cost by using off-the-shelf industrial components and smart software compensation instead of expensive, hyper-precise machining." },
    { q: "How do you plan to monetize Open Source?", a: "The 'Linux Model'. The core software and DIY schematics are free (Community). We monetize through: 1) Selling pre-assembled, certified Industrial Hardware, 2) Enterprise Support & SLA, 3) Proprietary plugins for the controller (e.g., specialized welding modules)." },
    { q: "Can I buy a robot today?", a: "Not yet. We are currently working with a closed group of beta testers and partners. You can join the waitlist to be notified when the DIY Kits become available for pre-order." },
    { q: "Are you looking for investors?", a: "Yes. We are actively seeking strategic partners and angel investors who understand the deep-tech hardware space and share our vision of democratizing automation." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#080510]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Due Diligence</h2>
           <h3 className="font-display text-4xl text-white uppercase">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-800 rounded-lg bg-[#0f0a1e] overflow-hidden transition-all hover:border-gray-600">
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                        <span className={`font-display text-sm md:text-base ${openIndex === idx ? 'text-hexa-purple' : 'text-white'}`}>{faq.q}</span>
                        {openIndex === idx ? <ChevronUp className="text-hexa-purple" /> : <ChevronDown className="text-gray-500" />}
                    </button>
                    <div className={`px-6 pb-6 text-gray-400 font-mono-plex text-sm leading-relaxed border-t border-gray-800/50 pt-4 ${openIndex === idx ? 'block' : 'hidden'}`}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 font-mono-plex text-sm">Deep Tech Inquiry?</p>
            <button onClick={scrollToContact} className="text-hexa-cyan hover:text-white font-bold uppercase text-sm tracking-widest mt-2 inline-block border-b border-hexa-cyan hover:border-white transition-colors">Contact Directly</button>
        </div>
      </div>
    </section>
  );
};
