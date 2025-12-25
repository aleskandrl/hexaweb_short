
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 relative bg-hexa-purple overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-hexa-purple via-[#9d6dff] to-hexa-cyan opacity-90"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1 mb-6 border border-white/30">
            <span className="text-white font-mono-plex text-xs font-bold uppercase tracking-widest">Priority Access</span>
        </div>
        <h3 className="font-display text-4xl md:text-6xl text-white mb-6 shadow-black drop-shadow-md">Join the Inner Circle</h3>
        <p className="text-white/80 font-mono-plex text-lg mb-10 max-w-2xl mx-auto">
            Secure your allocation for the first batch of kits. Receive monthly engineering logs, investor updates, and exclusive schematic releases.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-black font-mono-plex focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl"
                />
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-full font-display uppercase tracking-widest hover:bg-gray-900 transition-all shadow-xl flex items-center justify-center group">
                Get Updates
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
        </form>
        <p className="text-white/60 text-[10px] font-mono-plex mt-4 uppercase tracking-wider">Zero spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};
