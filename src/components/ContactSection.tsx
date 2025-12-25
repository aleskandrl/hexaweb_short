import React from 'react';
import { Mail, Github, Youtube, Linkedin } from 'lucide-react';
import contactBg from '../assets/images/backgrounds/contact_bg.jpg';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Tunnel Effect Background */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed mix-blend-luminosity"
        style={{ backgroundImage: `url(${contactBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#05020a]/90 to-[#05020a]/80"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-12">
           <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4 flex items-center justify-center">
             <span className="w-8 h-px bg-hexa-cyan mr-3"></span> Communication <span className="w-8 h-px bg-hexa-cyan ml-3"></span>
           </h2>
           <h3 className="font-display text-5xl md:text-7xl text-white uppercase leading-none tracking-tight shadow-black drop-shadow-lg">
             Initialize <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Protocol</span>
           </h3>
        </div>
        
        <div className="bg-black/60 p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
            <p className="text-gray-400 font-mono-plex text-lg mb-10 max-w-2xl mx-auto">
                We are building the future of open robotics. Whether you are an investor, an engineer, or a pilot customer — we want to hear from you.
            </p>

            {/* Main Email Action */}
            <div className="mb-12">
                <a href="mailto:contact@hexakinetica.com" className="inline-flex items-center space-x-4 bg-hexa-purple/10 border border-hexa-purple/50 hover:bg-hexa-purple hover:text-white text-white px-8 py-6 rounded-2xl transition-all group">
                    <Mail size={32} />
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-widest opacity-70">Direct Line</div>
                        <div className="text-xl md:text-2xl font-display">contact@hexakinetica.com</div>
                    </div>
                </a>
            </div>

            {/* Socials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <a href="https://github.com/hexakinetica/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                    <Github size={32} className="text-gray-400 group-hover:text-white mb-3 transition-colors" />
                    <div className="text-sm text-white font-display uppercase">GitHub</div>
                    <div className="text-[10px] text-gray-500">Source Code</div>
                </a>

                <a href="https://www.youtube.com/@Hexakinetica" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                    <Youtube size={32} className="text-gray-400 group-hover:text-red-500 mb-3 transition-colors" />
                    <div className="text-sm text-white font-display uppercase">YouTube</div>
                    <div className="text-[10px] text-gray-500">Demos & Tests</div>
                </a>

                <a href="https://www.linkedin.com/company/hexakinetica" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                    <Linkedin size={32} className="text-gray-400 group-hover:text-blue-500 mb-3 transition-colors" />
                    <div className="text-sm text-white font-display uppercase">LinkedIn</div>
                    <div className="text-[10px] text-gray-500">Professional</div>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};