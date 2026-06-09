import React from 'react';
import { CONTACT_EMAIL, CONTACT_MAILTO, GITHUB_URL, LINKEDIN_URL, WAITLIST_URL, YOUTUBE_URL } from '../siteLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="font-display text-2xl tracking-widest uppercase">
              HEXA<span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan">KINETICA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-mono-plex">
              A next-gen robotics ecosystem developing robot arm hardware, motion control, operator software, simulation, and engineering documentation.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-mono-plex">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">YouTube</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
              <a href={CONTACT_MAILTO} className="text-gray-500 hover:text-white transition-colors">Email</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Community</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Source Code</a></li>
              <li><a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Join Early Access</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Projects</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href="#products" className="hover:text-white transition-colors">Maker / PRO Lines</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">HexaCore Controller</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href={CONTACT_MAILTO} className="hover:text-white">{CONTACT_EMAIL}</a></li>
              <li className="pt-4 text-white">Open to partnerships and sponsors.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono-plex">
          <p>&copy; {new Date().getFullYear()} Hexakinetica. Built by the community.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Development</a>
            <a href={CONTACT_MAILTO} className="hover:text-white">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
