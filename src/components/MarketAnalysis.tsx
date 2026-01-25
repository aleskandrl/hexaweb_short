import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Lock } from 'lucide-react';

const laborData = [
  { year: '2020', laborCost: 100, robotCost: 100 },
  { year: '2021', laborCost: 105, robotCost: 92 },
  { year: '2022', laborCost: 112, robotCost: 85 },
  { year: '2023', laborCost: 120, robotCost: 78 },
  { year: '2024', laborCost: 128, robotCost: 72 },
  { year: '2025', laborCost: 135, robotCost: 65 },
];

// Custom Tooltip from my previous version, it's better.
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 border border-gray-700 p-3 rounded-lg shadow-xl backdrop-blur-sm font-mono-plex">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Year: {label}</p>
        <p className="text-red-400 text-sm">Labor Index: <span className="font-bold">{payload[0].value}</span></p>
        <p className="text-hexa-cyan text-sm">Hardware Index: <span className="font-bold">{payload[1].value}</span></p>
      </div>
    );
  }
  return null;
};

export const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(140, 82, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Why we exist</h2>
           <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Automation Gap</span>
           </h3>
           <p className="mt-6 text-gray-400 font-mono-plex max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
             The math is simple: skilled labor is becoming more expensive and scarce, while automation hardware gets cheaper. Yet, most small to medium businesses are locked out by the complexity and cost of traditional robotics. This is the gap that must be filled.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Chart: "Бодрее" */}
          <div className="bg-black/30 border border-gray-800 p-8 rounded-xl relative shadow-2xl backdrop-blur-sm">
            <h4 className="text-white font-display text-2xl uppercase tracking-wider mb-6">Cost Divergence</h4>
            
            <div className="h-[300px] w-full font-mono-plex text-sm">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={laborData}>
                  <defs>
                    <linearGradient id="colorLabor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRobot" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#98f3ff" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#98f3ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" stroke="#4b5563" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#4b5563" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4b5563', strokeDasharray: '3 3' }}/>
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }} 
                    iconType="circle"
                    formatter={(value) => <span style={{ color: '#e0e0e0' }}>{value}</span>}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="laborCost" 
                    name="Human Labor Cost" 
                    stroke="#ef4444" 
                    strokeWidth={3} 
                    fill="url(#colorLabor)" 
                    dot={{ r: 4, strokeWidth: 2, fill: '#ef4444' }}
                    activeDot={{ r: 6, stroke: '#ef4444', fill: 'white' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="robotCost" 
                    name="Hardware Access Cost" 
                    stroke="#98f3ff" 
                    strokeWidth={3} 
                    fill="url(#colorRobot)" 
                    dot={{ r: 4, strokeWidth: 2, fill: '#98f3ff' }}
                    activeDot={{ r: 6, stroke: '#98f3ff', fill: 'white' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics - Стилизация и правки текста */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-red-500/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-red-500">
                    <AlertTriangle size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Labor Deficit</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">85 Million</div>
                <p className="text-gray-400 text-base font-mono-plex">Unfilled manufacturing jobs projected by 2030. <span className="text-gray-500">(Source: Deloitte)</span></p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-purple/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-purple">
                    <Users size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Underserved Market</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">98%</div>
                <p className="text-gray-400 text-base font-mono-plex">Of manufacturing firms are small businesses. <span className="text-gray-500">(Source: NAM)</span></p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-hexa-cyan/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-hexa-cyan">
                    <TrendingUp size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Explosive Growth</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">~30% CAGR</div>
                <p className="text-gray-400 text-base font-mono-plex">Projected annual growth of the collaborative robot market. <span className="text-gray-500">(Source: Various)</span></p>
            </div>

            <div className="bg-hexa-card p-6 rounded-xl border border-transparent hover:border-yellow-500/50 transition-all group">
                <div className="flex items-center space-x-3 mb-2 text-yellow-500">
                    <Lock size={20} />
                    <span className="font-mono-plex font-bold text-sm uppercase tracking-widest">Investment Barrier</span>
                </div>
                <div className="text-4xl font-display text-white mb-2 group-hover:scale-105 transition-transform origin-left">$100k+</div>
                <p className="text-gray-400 text-base font-mono-plex">Typical upfront cost for a single industrial robot cell, locking out small businesses.</p>
            </div>

          </div>

        </div>
        
        {/* REVAMPED CONCLUSION - без "мы" */}
        <div className="text-center pt-12 border-t border-white/10">
            <h3 className="text-gray-300 font-mono-plex text-lg md:text-xl leading-relaxed">
                It's a structural failure.
            </h3>
        </div>

      </div>
    </section>
  );
};