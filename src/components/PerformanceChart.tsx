
import React from 'react';

export const PerformanceChart: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden border-b border-gray-900">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hexa-purple/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
             <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-widest">The Efficiency Trap</h2>
             <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-tight">
                Why pay for <br /> <span className="text-gray-500">Bloatware?</span>
             </h3>
             <p className="text-lg text-gray-400 font-mono-plex leading-relaxed">
                Current industrial robots are over-engineered for 90% of use cases. You pay for features you never use: complex proprietary languages, obscure interfaces, and extreme accuracy that is unnecessary for most tasks.
                <br/><br/>
                <span className="text-white font-bold">HexaKinetica</span> strips away the excess. We provide <span className="text-hexa-cyan">only the essential functionality</span> required for real work, wrapped in a radically simple interface. This approach unlocks the massive underserved market of SMEs.
             </p>
             
             <div className="space-y-4 pt-4">
                {[
                  'Stop overpaying for unused "Enterprise" features',
                  'Simple Interface: No PhD required to operate',
                  'Designed for the 80% of tasks that need speed, not microns'
                ].map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-gray-300 font-mono-plex">
                    <div className="w-1.5 h-1.5 bg-hexa-purple rotate-45"></div>
                    <span>{stat}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-hexa-card backdrop-blur-md border border-hexa-purple/30 rounded-xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-hexa-cyan/10 rounded-full blur-xl"></div>
            
            <h4 className="font-display text-2xl text-center mb-8 uppercase tracking-widest">Market Reality</h4>
            
            <div className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-700 pb-4 text-center">
                <div className="text-gray-500 font-mono-plex text-sm uppercase">Factor</div>
                <div className="text-gray-400 font-mono-plex text-sm uppercase">Legacy Brands</div>
                <div className="text-hexa-cyan font-mono-plex text-sm uppercase font-bold">HexaKinetica</div>
            </div>

            {[
                { label: 'Functionality', bad: 'Bloated / Complex', good: 'Essential Only' },
                { label: 'Interface', bad: 'Requires Expert', good: 'Intuitive / Web' },
                { label: 'Cost Structure', bad: 'High Capex', good: 'Optimized' },
                { label: 'Deployment', bad: 'Weeks / Months', good: 'Days' },
            ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 py-4 border-b border-gray-800/50 items-center text-center">
                    <div className="text-left text-gray-300 font-bold font-mono-plex text-base">{row.label}</div>
                    <div className="text-red-400/70 text-sm md:text-base">{row.bad}</div>
                    <div className="text-hexa-cyan font-bold text-sm md:text-base shadow-[0_0_10px_rgba(152,243,255,0.2)] rounded px-2 py-1 bg-hexa-cyan/5">{row.good}</div>
                </div>
            ))}
            
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 font-mono-plex italic">"Dominating the market by solving the real problem, not the theoretical one."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
