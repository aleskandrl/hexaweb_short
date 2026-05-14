
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { q: "What is Hexakinetica?", a: "Hexakinetica is an accessible robot arm platform under development. It brings together robot arm hardware, motion controller architecture, operator software, simulation, and engineering documentation." },
    { q: "Is this a finished industrial robot?", a: "No. The platform is in active development and validation. It should not be presented as a certified factory-ready industrial robot. The PRO line is a hardware direction based on industrial-style architecture, components, EtherCAT motion control, and larger robot arm configurations." },
    { q: "What is the difference between Maker and PRO lines?", a: "The Maker line focuses on accessibility, learning, prototyping, software testing, and hands-on robotics development. The PRO line extends the same platform direction toward larger configurations, industrial motion components, cabinet-based architecture, and early automation development." },
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
        <div className="text-left mb-16">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Due Diligence</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-800 rounded-lg bg-hexa-card overflow-hidden transition-all hover:border-gray-600">
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                        <span className={`font-display text-base md:text-lg ${openIndex === idx ? 'text-hexa-purple' : 'text-white'}`}>{faq.q}</span>
                        {openIndex === idx ? <ChevronUp className="text-hexa-purple" /> : <ChevronDown className="text-gray-500" />}
                    </button>
                    <div className={`px-6 pb-6 text-gray-400 font-mono-plex text-base leading-relaxed border-t border-gray-800/50 pt-4 ${openIndex === idx ? 'block' : 'hidden'}`}>
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
