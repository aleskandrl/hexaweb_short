import React from 'react';
import { Linkedin, Youtube, Heart, Github, Mail } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_MAILTO, GITHUB_URL, LINKEDIN_URL, WAITLIST_URL, YOUTUBE_URL } from '../siteLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-hexa-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="font-display text-2xl tracking-widest uppercase">
              HEXA<span className="text-hexa-purple">KINETICA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-mono-plex">
              An early-stage robotics platform developing accessible robot arm hardware, motion control, operator software, simulation, and engineering documentation.
            </p>
            <div className="flex space-x-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Open HexaKinetica GitHub" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="Open HexaKinetica YouTube" className="text-gray-500 hover:text-white transition-colors"><Youtube size={20} /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Open HexaKinetica LinkedIn" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={CONTACT_MAILTO} aria-label="Email HexaKinetica" className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Community</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">GitHub</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">Source Code</a></li>
              <li><a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">Join Early Access</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Projects</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href="#products" className="hover:text-hexa-purple transition-colors">Maker / PRO Lines</a></li>
              <li><a href="#products" className="hover:text-hexa-purple transition-colors">HexaCore Controller</a></li>
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
          <p className="flex items-center">&copy; {new Date().getFullYear()} HexaKinetica. Built with <Heart size={12} className="mx-1 text-red-500" /> by the community.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Development</a>
            <a href={CONTACT_MAILTO} className="hover:text-white">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
