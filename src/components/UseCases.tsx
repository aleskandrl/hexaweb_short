import React, { useState } from 'react';
// Импорты
import smeImg from '../assets/images/cases/sme.jpg';
import eduImg from '../assets/images/cases/edu.jpg';
import labImg from '../assets/images/cases/lab.jpg';

const cases = [
    {
        id: 'sme',
        title: 'SME Manufacturing',
        desc: 'Automate CNC loading, palletizing, and welding without hiring a dedicated robotics engineer. ROI in 6 months.',
        stats: ['24/7 Operation', '10kg Payload', 'IP54 Rated'],
        img: smeImg
    },
    {
        id: 'edu',
        title: 'Research & Education',
        desc: 'The perfect platform for University R&D. Full ROS2 support, open kinematics, and Python API allow students to focus on algorithms, not hardware drivers.',
        stats: ['ROS 2 Native', 'Matlab Support', 'Open CAD'],
        img: eduImg
    },
    {
        id: 'lab',
        title: 'Lab Automation',
        desc: 'Precision liquid handling and sample testing. Our arms can be integrated into clean-room environments with custom end-effectors.',
        stats: ['0.05mm Repeatability', 'Clean Room Ready', 'Compact Footprint'],
        img: labImg
    }
];

export const UseCases: React.FC = () => {
  const [active, setActive] = useState(cases[0]);

  return (
    <section className="py-24 bg-hexa-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Applications</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase">Built for <span className="text-hexa-purple">Reality</span></h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
            {/* Tabs */}
            <div className="w-full md:w-1/3 space-y-4">
                {cases.map((c) => (
                    <button 
                        key={c.id}
                        onClick={() => setActive(c)}
                        className={`w-full text-left p-6 border rounded-xl transition-all duration-300 group ${
                            active.id === c.id 
                            ? 'border-hexa-cyan bg-hexa-cyan/10' 
                            : 'border-gray-800 hover:border-gray-600'
                        }`}
                    >
                        <h4 className={`font-display text-2xl mb-2 ${active.id === c.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {c.title}
                        </h4>
                        <p className="text-sm text-gray-500 font-mono-plex uppercase tracking-widest">View Case Study &rarr;</p>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 relative min-h-[400px] rounded-2xl overflow-hidden border border-gray-800 group">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src={active.img} alt={active.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-4xl md:text-5xl font-display text-white mb-4">{active.title}</h3>
                    <p className="text-gray-300 font-mono-plex text-base md:text-lg max-w-xl mb-8 border-l-2 border-hexa-purple pl-4">
                        {active.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {active.stats.map((stat, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-bold text-white uppercase tracking-wider">
                                {stat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};