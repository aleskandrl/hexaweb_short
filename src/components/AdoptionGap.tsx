import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Lock } from 'lucide-react';

const robotDemandData = [
  { year: '2014', installations: 221 },
  { year: '2024', installations: 542 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 border border-gray-700 p-3 rounded-lg shadow-xl backdrop-blur-sm font-mono-plex">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Year: {label}</p>
        <p className="text-white text-sm">Installations: <span className="font-bold">{payload[0].value}K</span></p>
      </div>
    );
  }
  return null;
};

export const AdoptionGap: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(140, 82, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-20">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Why Accessibility Matters</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Robotics Adoption Gap</span>
           </h3>
           <p className="mt-6 text-gray-400 font-mono-plex max-w-4xl text-base md:text-lg leading-relaxed">
              Robotics is no longer a niche technology. In 2024, factories installed <strong className="text-white">542,000 industrial robots worldwide</strong> — more than double the level of ten years earlier — while the global operational stock reached <strong className="text-white">4.66 million robots</strong>.
              <br/><br/>
              But adoption is still uneven. For many users, the barrier is not only the robot arm itself, but integration, programming, tooling, safety, maintenance, and the learning curve.
              <br/><br/>
              Hexakinetica focuses on this gap by making robot arm technology easier to access, understand, test, modify, and build around — through real hardware, motion control, software, and simulation.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Global robot demand chart */}
          <div className="bg-black/30 border border-gray-800 p-8 rounded-xl relative shadow-2xl backdrop-blur-sm">
            <h4 className="text-white font-display text-2xl uppercase tracking-wider mb-2">Global Robot Demand</h4>
            <p className="text-gray-500 font-mono-plex text-xs uppercase tracking-widest mb-6">Industrial robots installed worldwide</p>
            
            <div className="h-[300px] w-full font-mono-plex text-sm">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={robotDemandData}>
                  <XAxis dataKey="year" stroke="#4b5563" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#4b5563" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}K`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4b5563', strokeDasharray: '3 3' }}/>
                  <Bar dataKey="installations" fill="#98f3ff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-800 pt-6">
              <div>
                <div className="text-3xl font-display text-white">542K</div>
                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider">Installed in 2024</p>
              </div>
              <div>
                <div className="text-3xl font-display text-white">4.66M</div>
                <p className="text-gray-500 text-xs font-mono-plex uppercase tracking-wider">Operational stock worldwide</p>
              </div>
            </div>
            <p className="mt-4 text-[10px] text-gray-600 font-mono-plex uppercase tracking-wider">Source: IFR World Robotics 2025</p>
          </div>

          {/* Key Metrics - Стилизация и правки текста */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-purple/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <AlertTriangle size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Labor & Skills Gap</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">1.9M</div>
                <p className="text-gray-400 text-base font-mono-plex">U.S. manufacturing jobs could remain unfilled by 2033 if workforce and skills gaps are not addressed. <span className="text-gray-500">(Source: Deloitte / The Manufacturing Institute)</span></p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-purple/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <Users size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Underserved Manufacturers</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">98%</div>
                <p className="text-gray-400 text-base font-mono-plex">Of U.S. manufacturing firms are small businesses with fewer than 500 employees; around three-quarters have fewer than 20. <span className="text-gray-500">(Source: NAM / U.S. Census Bureau)</span></p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-purple/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <TrendingUp size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Cobot Market Growth</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">~30% CAGR</div>
                <p className="text-gray-400 text-base font-mono-plex">Projected collaborative robot growth is in a high-growth range: ABI Research projects 27.5% CAGR, while Grand View Research projects 32% CAGR for 2024–2030.</p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-purple/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <Lock size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Integration Barrier</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">$100k+</div>
                <p className="text-gray-400 text-base font-mono-plex">Industrial robot systems can quickly reach six figures once peripherals, safety, tooling, programming, installation, training, and support are included. <span className="text-gray-500">(Sources: A3 / Standard Bots)</span></p>
            </div>

          </div>

        </div>
        
        {/* REVAMPED CONCLUSION - без "мы" */}
        <div className="text-left pt-12 border-t border-white/10">
            <h3 className="text-gray-300 font-mono-plex text-lg md:text-xl leading-relaxed">
                Robotics demand is accelerating. The gap is not interest — the gap is access, integration, skills, and cost.
            </h3>
        </div>

      </div>
    </section>
  );
};