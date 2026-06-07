import React from 'react';
import { Mail, Github, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_MAILTO, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '../siteLinks';
import contactBg from '../assets/images/backgrounds/contact_bg.jpg';
import { AccentRail } from './AccentRail';
import { Reveal } from './Reveal';

export const InitializeProtocol: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Tunnel Effect Background */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed mix-blend-luminosity"
        style={{ backgroundImage: `url(${contactBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#05020a]/90 to-[#05020a]/80"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <Reveal className="mb-12">
           <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4 flex items-center justify-start">
             <span className="w-8 h-px bg-hexa-cyan mr-3"></span> Communication
           </h2>
           <h3 className="font-display text-5xl md:text-7xl text-white uppercase leading-none tracking-tight shadow-black drop-shadow-lg">
             Initialize <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">Protocol</span>
           </h3>
        </Reveal>
        
        <div className="space-y-10">
            <p className="text-gray-400 font-mono-plex text-lg max-w-2xl">
                We are developing a next-gen robotics ecosystem across hardware, controller architecture, operator software, simulation, and validation. If you are an engineer, educator, maker, partner, or automation team — we want to hear from you.
            </p>

            <AccentRail
                accent="purple"
                icon={Mail}
                eyebrow="Direct Line"
                title={CONTACT_EMAIL}
                titleClassName="text-2xl md:text-3xl"
                footer={
                    <a href={CONTACT_MAILTO} className="inline-flex items-center border border-hexa-purple/50 px-6 py-3 text-white transition-all hover:bg-hexa-purple hover:text-white">
                        Send Email
                    </a>
                }
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <AccentRail
                    accent="white"
                    icon={Github}
                    eyebrow="Channel"
                    title="GitHub"
                    titleClassName="text-xl uppercase"
                    description="Source Code"
                    descriptionClassName="text-[10px] uppercase tracking-[0.22em] text-gray-500"
                    footer={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-mono-plex uppercase tracking-widest text-white border-b border-white/20 pb-1">Open Link</a>}
                />

                <AccentRail
                    accent="cyan"
                    icon={Youtube}
                    eyebrow="Channel"
                    title="YouTube"
                    titleClassName="text-xl uppercase"
                    description="Demos & Tests"
                    descriptionClassName="text-[10px] uppercase tracking-[0.22em] text-gray-500"
                    footer={<a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-mono-plex uppercase tracking-widest text-white border-b border-white/20 pb-1">Open Link</a>}
                />

                <AccentRail
                    accent="purple"
                    icon={Linkedin}
                    eyebrow="Channel"
                    title="LinkedIn"
                    titleClassName="text-xl uppercase"
                    description="Professional"
                    descriptionClassName="text-[10px] uppercase tracking-[0.22em] text-gray-500"
                    footer={<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-mono-plex uppercase tracking-widest text-white border-b border-white/20 pb-1">Open Link</a>}
                />
            </div>
        </div>

      </div>
    </section>
  );
};