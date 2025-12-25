import React from 'react';
import { Github, Code, Cpu, Terminal, Users, Globe } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#080510] relative overflow-hidden">
      {/* Background Elements - Less "Gamer", More "Blueprint" */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,82,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,82,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4">Who Builds This?</h2>
          <h3 className="font-display text-3xl md:text-5xl text-white uppercase mb-6">
            Decentralized <span className="text-hexa-purple">Engineering</span>
          </h3>
          <p className="text-gray-400 font-mono-plex max-w-2xl mx-auto text-sm leading-relaxed">
            HexaKinetica is not a traditional corporation. We are an engineering collective.
            Led by a core architect, powered by industry veterans contributing anonymously, and tested by the global open-source community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* CARD 1: The Architect (You) */}
            <div className="bg-[#0f0a1e] border border-hexa-cyan/30 p-8 rounded-xl flex flex-col items-center text-center relative group hover:bg-[#130d24] transition-colors">
                <div className="absolute top-0 inset-x-0 h-1 bg-hexa-cyan shadow-[0_0_10px_rgba(152,243,255,0.3)]"></div>
                
                <div className="w-20 h-20 bg-black border-2 border-hexa-cyan rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Terminal size={32} className="text-hexa-cyan" />
                </div>
                
                <h4 className="text-xl font-display text-white mb-1">Lead Architect</h4>
                <p className="text-xs text-hexa-cyan font-mono-plex uppercase tracking-wider mb-4">Founder / Maintainer</p>
                <p className="text-gray-400 text-sm font-mono-plex leading-relaxed mb-6">
                    "I started this because industrial robots shouldn't cost as much as a house. Building the core stack and ensuring architectural integrity."
                </p>
                <div className="mt-auto pt-4 border-t border-gray-800 w-full flex justify-center">
                    <a href="https://github.com/hexakinetica" className="text-gray-500 hover:text-white transition-colors flex items-center text-xs uppercase font-bold tracking-widest">
                        <Github size={14} className="mr-2" />
                        @hexakinetica
                    </a>
                </div>
            </div>

            {/* CARD 2: Stealth Partners */}
            <div className="bg-[#0f0a1e] border border-hexa-purple/30 p-8 rounded-xl flex flex-col items-center text-center relative group hover:bg-[#130d24] transition-colors">
                 <div className="absolute top-0 inset-x-0 h-1 bg-hexa-purple shadow-[0_0_10px_rgba(140,82,255,0.3)]"></div>

                <div className="w-20 h-20 bg-black border-2 border-hexa-purple rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Cpu size={32} className="text-hexa-purple" />
                </div>
                
                <h4 className="text-xl font-display text-white mb-1">Stealth Contributors</h4>
                <p className="text-xs text-hexa-purple font-mono-plex uppercase tracking-wider mb-4">Industrial Veterans</p>
                <p className="text-gray-400 text-sm font-mono-plex leading-relaxed mb-6">
                    Engineers from top automotive & aerospace firms contributing to the codebase in their spare time. They bring "Class A" validation to our open hardware.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-800 w-full flex justify-center">
                     <span className="flex items-center text-gray-600 text-xs uppercase font-bold tracking-widest cursor-help" title="Identities protected for contractual reasons">
                        <Code size={14} className="mr-2" />
                        Anonymous Committers
                    </span>
                </div>
            </div>

            {/* CARD 3: The Community */}
            <div className="bg-[#0f0a1e] border border-white/10 p-8 rounded-xl flex flex-col items-center text-center relative group hover:bg-[#130d24] transition-colors">
                 <div className="absolute top-0 inset-x-0 h-1 bg-white/20"></div>

                <div className="w-20 h-20 bg-black border-2 border-gray-700 rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Users size={32} className="text-white" />
                </div>
                
                <h4 className="text-xl font-display text-white mb-1">The Community</h4>
                <p className="text-xs text-gray-500 font-mono-plex uppercase tracking-wider mb-4">Testers & Makers</p>
                <p className="text-gray-400 text-sm font-mono-plex leading-relaxed mb-6">
                    Our distributed R&D department. Hundreds of makers catching bugs, suggesting features, and testing edge cases that no internal QA team could cover.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-800 w-full flex justify-center">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center text-xs uppercase font-bold tracking-widest">
                        <Globe size={14} className="mr-2" />
                        Join Discord
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};