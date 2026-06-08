
import React, { useState } from 'react';
import { Reveal } from './Reveal';

const faqs = [
    { q: "What is Hexakinetica?", a: "Hexakinetica is a robotics ecosystem. It brings together robot arm hardware, motion controller architecture, operator software, simulation, and engineering documentation." },
    { q: "Is this a finished industrial robot?", a: "No. The platform is in active development and validation. It should not be presented as a certified factory-ready industrial robot. The PRO line is a hardware direction based on industrial-style architecture, components, EtherCAT motion control, and larger robot arm configurations." },
    { q: "What is the difference between Maker and PRO lines?", a: "The Maker line focuses on accessibility, learning, prototyping, software testing, and hands-on robotics development. The PRO line extends the same platform direction toward larger configurations, industrial motion components, cabinet-based architecture, and automation development." },
    { q: "What is HexaArm Hybrid?", a: "HexaArm Hybrid is a physical validation platform used to test the control architecture across different actuator types. It combines industrial servos, NEMA steppers, and BLDC actuators in one robot arm structure for side-by-side comparison." },
    { q: "What are HexaCore and HexaStudio?", a: "HexaCore is the motion controller architecture behind the platform. HexaStudio is the operator and development software being built for configuration, testing, and control of Hexakinetica robot arms." },
    { q: "Can I buy a robot today?", a: "Not yet. The project is in development and validation. You can join the waitlist or contact us if you are interested in education, prototyping, validation, or early automation use cases." }
];

export const FrequentlyAsked: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-hexa-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-left mb-16">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Due Diligence</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">Frequently Asked</h3>
        </Reveal>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="relative overflow-hidden border-b border-gray-800/80 pb-1 transition-all">
                    <div className={`absolute left-0 top-4 bottom-4 w-px ${openIndex === idx ? 'bg-gradient-to-b from-hexa-cyan via-hexa-purple/70 to-transparent' : 'bg-white/10'}`}></div>
                    <div className={`absolute -left-[4px] top-4 h-2.5 w-2.5 rounded-full ${openIndex === idx ? 'bg-hexa-cyan shadow-[0_0_20px_rgba(152,243,255,0.45)]' : 'bg-white/20'}`}></div>
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex justify-between items-center pl-7 pr-2 py-6 text-left focus:outline-none"
                    >
                        <span className={`font-display text-base md:text-lg ${openIndex === idx ? 'text-hexa-purple' : 'text-white'}`}>{faq.q}</span>
                        <span className={`ml-6 font-display text-2xl leading-none ${openIndex === idx ? 'text-hexa-purple' : 'text-gray-500'}`}>
                            {openIndex === idx ? '−' : '+'}
                        </span>
                    </button>
                    <div className={`pl-7 pr-8 pb-6 text-gray-400 font-mono-plex text-base leading-relaxed pt-1 ${openIndex === idx ? 'block' : 'hidden'}`}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-left">
            <p className="text-gray-500 font-mono-plex text-base">Deep Tech Inquiry?</p>
            <button onClick={scrollToContact} className="text-white hover:text-white font-bold uppercase text-base tracking-widest mt-2 inline-block border-b border-hexa-cyan hover:border-white transition-colors">Contact Directly</button>
        </div>
      </div>
    </section>
  );
};
