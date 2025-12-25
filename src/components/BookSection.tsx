import React from 'react';
import { BookOpen, Download, Github } from 'lucide-react';

export const BookSection: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-hexa-purple via-[#6d28d9] to-black opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col md:flex-row items-center gap-12">
             
             {/* Book Cover Visual */}
             <div className="w-full md:w-1/3 flex justify-center">
                 <div className="relative w-64 aspect-[3/4] bg-black border-4 border-white rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 text-center transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                     <div className="text-hexa-cyan font-mono-plex text-xs uppercase tracking-widest mb-4">The Field Manual</div>
                     <h3 className="text-3xl font-display text-white mb-2">THE RDT BOOK</h3>
                     <p className="text-gray-400 text-[10px] font-mono-plex uppercase">Building a Real-World Robot Control System</p>
                     <div className="mt-8 w-12 h-12 border-2 border-hexa-purple rounded-full flex items-center justify-center">
                         <span className="text-white font-bold">C++</span>
                     </div>
                 </div>
             </div>

             {/* Text Content */}
             <div className="w-full md:w-2/3 text-white">
                 <div className="inline-flex items-center px-3 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest">Community Draft v0.69</span>
                 </div>
                 <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                     We Wrote the Book on <br/> Open Industrial Robotics
                 </h2>
                 <p className="text-lg text-white/80 font-mono-plex mb-8 leading-relaxed max-w-2xl">
                     Most robotics tutorials stop at "Hello World". We go deeper. 
                     Read 300+ pages on <strong>Cascaded PID loops</strong>, <strong>EtherCAT synchronization</strong>, and <strong>Memory Barriers</strong>. 
                     Learn how we built the RDT core from scratch.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                     <a href="https://github.com/hexakinetica/rdt-book" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 font-mono-plex font-bold uppercase text-sm hover:bg-hexa-cyan transition-colors flex items-center shadow-lg">
                         <BookOpen className="mr-2" size={18} />
                         Read on GitHub
                     </a>
                     <a href="#" className="px-8 py-4 border border-white/30 text-white font-mono-plex font-bold uppercase text-sm hover:bg-white/10 transition-colors flex items-center">
                         <Download className="mr-2" size={18} />
                         Download PDF
                     </a>
                 </div>
             </div>

         </div>
      </div>
    </section>
  );
};