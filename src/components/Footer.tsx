import React from 'react';
import { Linkedin, Youtube, Heart, Github, Mail } from 'lucide-react';

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
              An independent, non-profit initiative led by engineers, makers, and innovators. We don't aim for profit—we aim for innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/hexakinetica/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-hexa-cyan transition-colors"><Github size={20} /></a>
              <a href="https://www.youtube.com/@Hexakinetica" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-hexa-cyan transition-colors"><Youtube size={20} /></a>
              <a href="https://www.linkedin.com/company/hexakinetica" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-hexa-cyan transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:contact@hexakinetica.com" className="text-gray-500 hover:text-hexa-cyan transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Community</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href="https://github.com/hexakinetica/" target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">Github Repo</a></li>
              <li><a href="https://github.com/hexakinetica/" target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">Documentation</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScbr9Jbu8GRUh6469mXskMJ12ORzINa7Fu9etrx7c3La6z1Eg/viewform" target="_blank" rel="noopener noreferrer" className="hover:text-hexa-purple transition-colors">Become a Contributor</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Projects</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href="#" className="hover:text-hexa-purple transition-colors">HexaArm Medium DIY</a></li>
              <li><a href="#" className="hover:text-hexa-purple transition-colors">HexaCore Controller</a></li>
              <li><a href="#" className="hover:text-hexa-purple transition-colors">HexaVision</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white font-display tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-mono-plex">
              <li><a href="mailto:contact@hexakinetica.com" className="hover:text-white">contact@hexakinetica.com</a></li>
              <li className="pt-4 text-hexa-cyan">Open to partnerships and sponsors.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono-plex">
          <p className="flex items-center">&copy; {new Date().getFullYear()} HexaKinetica. Built with <Heart size={12} className="mx-1 text-red-500" /> by the community.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Open Source License</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};