
import React from 'react';
import { Code, Layers, Globe, RefreshCcw, GitMerge } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Core Philosophy</h2>
          <h3 className="font-display text-4xl md:text-5xl text-white uppercase">
            The <span className="text-hexa-cyan">Unfair</span> Advantage
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Unified Core - The big card */}
          <div className="md:col-span-2 bg-[#0f0a1e] border border-hexa-cyan/20 rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-hexa-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
                <div className="flex items-center mb-6">
                    <GitMerge className="text-hexa-cyan mr-4" size={36} />
                    <h4 className="text-2xl font-display text-white">Unified Core</h4>
                </div>
                <p className="text-gray-400 font-mono-plex leading-relaxed mb-6">
                    One controller architecture for everything. Whether you use our 
                    <span className="text-white font-bold"> DIY Kit</span> or our 
                    <span className="text-white font-bold"> Industrial Pro</span> line, 
                    the code is the same. Learn on the prototype, deploy on the factory floor.
                </p>
                <div className="flex space-x-4">
                    <span className="px-3 py-1 border border-gray-700 rounded-full text-[10px] uppercase text-gray-400 font-mono-plex">Hardware Agnostic</span>
                    <span className="px-3 py-1 border border-gray-700 rounded-full text-[10px] uppercase text-gray-400 font-mono-plex">Unified API</span>
                    <span className="px-3 py-1 border border-gray-700 rounded-full text-[10px] uppercase text-gray-400 font-mono-plex">Single Binary</span>
                </div>
            </div>
          </div>

          {/* Open API */}
          <div className="bg-[#0f0a1e] border border-gray-800 rounded-3xl p-8 hover:border-hexa-purple/50 transition-all group">
             <Code className="text-hexa-purple mb-4 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="text-lg font-display text-white mb-3">Hackable API</h4>
             <p className="text-gray-500 font-mono-plex text-xs leading-relaxed">
                No proprietary languages. We expose the full control loop via Python and C++. You own the hardware, you should own the logic.
             </p>
          </div>

          {/* Dual Line Strategy */}
          <div className="bg-[#0f0a1e] border border-gray-800 rounded-3xl p-8 hover:border-white/30 transition-all group">
             <Layers className="text-white mb-4 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="text-lg font-display text-white mb-3">Two Product Lines</h4>
             <p className="text-gray-500 font-mono-plex text-xs leading-relaxed">
                DIY Line for education and prototyping. Industrial Line for heavy duty. Same DNA, different materials.
             </p>
          </div>

          {/* Cost */}
          <div className="bg-[#0f0a1e] border border-gray-800 rounded-3xl p-8 hover:border-green-500/50 transition-all group">
             <RefreshCcw className="text-green-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="text-lg font-display text-white mb-3">Cost Disruption</h4>
             <p className="text-gray-500 font-mono-plex text-xs leading-relaxed">
                By stripping away "feature bloat" and relying on open standards, we reduce hardware costs by up to 60%.
             </p>
          </div>

          {/* Community */}
          <div className="md:col-span-1 bg-[#0f0a1e] border border-gray-800 rounded-3xl p-8 hover:border-hexa-cyan/50 transition-all group">
             <Globe className="text-hexa-cyan mb-4 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="text-lg font-display text-white mb-3">Community R&D</h4>
             <p className="text-gray-500 font-mono-plex text-xs leading-relaxed">
                Thousands of engineers contributing to the core. Features arrive faster than any corporation can manage.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};
