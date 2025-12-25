
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Target } from 'lucide-react';

const laborData = [
  { year: '2020', laborCost: 100, robotCost: 100 },
  { year: '2021', laborCost: 105, robotCost: 92 },
  { year: '2022', laborCost: 112, robotCost: 85 },
  { year: '2023', laborCost: 120, robotCost: 78 },
  { year: '2024', laborCost: 128, robotCost: 72 },
  { year: '2025', laborCost: 135, robotCost: 65 },
];

export const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-[#020205] relative overflow-hidden border-b border-hexa-purple/10">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(140, 82, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Macro Trends</h2>
           <h3 className="font-display text-4xl md:text-6xl text-white uppercase leading-tight">
             The <span className="text-hexa-purple text-shadow-glow">Perfect Storm</span>
           </h3>
           <p className="mt-6 text-gray-400 font-mono-plex max-w-2xl mx-auto text-sm leading-relaxed">
             The industrial world is facing a crisis. Labor costs are skyrocketing while hardware costs plummet. 
             The market is demanding automation, but the current solutions are too expensive and complex for 90% of the market.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Chart: Divergence */}
          <div className="bg-hexa-card/30 border border-gray-800 p-8 rounded-2xl relative shadow-2xl">
            <div className="flex justify-between items-end mb-6">
                <h4 className="text-white font-display text-lg uppercase tracking-wider">Cost Divergence</h4>
                <div className="text-[10px] text-gray-500 font-mono-plex uppercase">Index (2020 = 100)</div>
            </div>
            
            <div className="h-[300px] w-full font-mono-plex text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={laborData}>
                  <XAxis dataKey="year" stroke="#4b5563" tick={{fill: '#6b7280'}} />
                  <YAxis stroke="#4b5563" tick={{fill: '#6b7280'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#05020a', border: '1px solid #333', fontFamily: 'IBM Plex Mono', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="laborCost" name="Human Labor" stroke="#ef4444" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="robotCost" name="Robot HW" stroke="#98f3ff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black/80 backdrop-blur px-4 py-2 border border-hexa-cyan/30 rounded-lg pointer-events-none">
                 <span className="text-hexa-cyan font-bold text-lg block">The Void</span>
                 <span className="text-[10px] text-gray-400 uppercase">Market Opportunity</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#0f0a1e] p-6 rounded-xl border-l-4 border-red-500">
                <div className="flex items-center space-x-3 mb-2 text-red-500">
                    <AlertTriangle size={20} />
                    <span className="font-mono-plex font-bold text-xs uppercase tracking-widest">Labor Crisis</span>
                </div>
                <div className="text-3xl font-display text-white mb-1">85 Million</div>
                <p className="text-gray-400 text-xs font-mono-plex">Unfilled manufacturing jobs globally by 2030 (Korn Ferry Institute).</p>
            </div>

            <div className="bg-[#0f0a1e] p-6 rounded-xl border-l-4 border-hexa-purple">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <Target size={20} />
                    <span className="font-mono-plex font-bold text-xs uppercase tracking-widest">SME Market</span>
                </div>
                <div className="text-3xl font-display text-white mb-1">92%</div>
                <p className="text-gray-400 text-xs font-mono-plex">Of manufacturers are Small/Medium Enterprises, currently priced out of automation.</p>
            </div>

            <div className="bg-[#0f0a1e] p-6 rounded-xl border-l-4 border-hexa-cyan">
                <div className="flex items-center space-x-3 mb-2 text-hexa-cyan">
                    <TrendingUp size={20} />
                    <span className="font-mono-plex font-bold text-xs uppercase tracking-widest">CAGR</span>
                </div>
                <div className="text-3xl font-display text-white mb-1">40.5%</div>
                <p className="text-gray-400 text-xs font-mono-plex">Projected growth of the Collaborative Robot market (2024-2030).</p>
            </div>

            <div className="bg-[#0f0a1e] p-6 rounded-xl border-l-4 border-white">
                <div className="flex items-center space-x-3 mb-2 text-white">
                    <Users size={20} />
                    <span className="font-mono-plex font-bold text-xs uppercase tracking-widest">Community</span>
                </div>
                <div className="text-3xl font-display text-white mb-1">Open Source</div>
                <p className="text-gray-400 text-xs font-mono-plex">Leveraging the Linux model to disrupt the proprietary "Big 4" monopoly.</p>
            </div>

          </div>

        </div>
        
        <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-300 font-mono-plex text-xs uppercase tracking-widest">
                    Conclusion: The market is ready for a <span className="text-white font-bold">Low-Cost Industrial Standard</span>.
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};
