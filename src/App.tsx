import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HexakineticaPlatform } from './components/HexakineticaPlatform';
import { BuildAroundThePlatform } from './components/BuildAroundThePlatform';
import { Footer } from './components/Footer';
import { FocusedEngineering } from './components/FocusedEngineering';
import { InitializeProtocol } from './components/InitializeProtocol';
import { AdoptionGap } from './components/AdoptionGap';
import { ExecutionRoadmap } from './components/ExecutionRoadmap';
import { BuiltUponIndustrialOpenStandards } from './components/BuiltUponIndustrialOpenStandards';
import { ConnectedPlatform } from './components/ConnectedPlatform';
import { BuiltAsOneSystem } from './components/BuiltAsOneSystem';
import { FrequentlyAsked } from './components/FrequentlyAsked';
import { OperatorSoftwareWorkflow } from './components/OperatorSoftwareWorkflow';
import { Reveal } from './components/Reveal';
import { WAITLIST_URL } from './siteLinks';

// Local visual texture asset.
import carbonPattern from './assets/images/textures/carbon.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hexa-bg font-sans text-white selection:bg-hexa-purple selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* === INTRODUCTION: POSITIONING STATEMENT === */}
        <div id="hero">
          <Hero />
        </div>
        
        {/* Short proof-point strip that sets the tone. */}
        <div className="bg-[#0f0a1e] border-y border-hexa-purple/20 py-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url(${carbonPattern})` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-8 md:space-y-0 relative z-10">
            <Reveal delay={0} className="group cursor-default">
                <span className="block text-4xl font-display text-white group-hover:scale-110 transition-transform duration-300">Open</span>
                <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Source Architecture</span>
            </Reveal>
            <Reveal delay={120} className="group cursor-default">
                <span className="block text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-hexa-purple to-hexa-cyan group-hover:scale-110 transition-transform duration-300">100%</span>
                <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Hackable</span>
            </Reveal>
            <Reveal delay={240} className="group cursor-default">
                <span className="block text-4xl font-display text-white group-hover:scale-110 transition-transform duration-300">Real</span>
                <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Hardware Under Test</span>
            </Reveal>
          </div>
        </div>

        {/* === PART 1: THE PROBLEM WE SOLVE === */}
        <div id="market">
          <AdoptionGap />
        </div>

        {/* === PART 2: OUR SOLUTION, THE ECOSYSTEM === */}
        <div id="products">
          <HexakineticaPlatform />
        </div>
        <ConnectedPlatform />
        
        {/* === PART 3: HOW IT WORKS, TECHNICAL DETAILS === */}
        <OperatorSoftwareWorkflow />
        <BuiltAsOneSystem />
        <BuiltUponIndustrialOpenStandards />

        {/* === PART 4: VISION AND TEAM === */}
        <div id="timeline">
          <ExecutionRoadmap />
        </div>
        <div id="team">
          <FocusedEngineering /> 
        </div>
        
        {/* === PART 5: CALL TO ACTION === */}
        
        <div id="pricing">
          <BuildAroundThePlatform />
        </div>
        <FrequentlyAsked />
        
        {/* Final invitation to join the movement. */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hexa-purple to-purple-900 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black/0 to-black/0"></div>
            <Reveal className="max-w-4xl mx-auto px-4 text-left relative z-10">
                <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-widest mb-4">Join the Hexakinetica Movement</h2>
                <h3 className="text-4xl md:text-5xl font-display text-white uppercase mb-8 leading-tight drop-shadow-lg">
                   Build, test, and validate <br/> robot arms together
                </h3>
                 <p className="text-gray-300 mb-10 text-lg font-mono-plex max-w-2xl leading-relaxed">
                   We are developing a robotics ecosystem across hardware, controller architecture, software, and simulation.
                   If you build, teach, test, or integrate robotics, we want to hear from you.
                </p>
                <a 
                  href={WAITLIST_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent text-white border border-white/60 px-10 py-4 font-mono-plex font-bold uppercase text-sm hover:bg-white/10 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] inline-block"
                >
                   Join Early Access
                </a>
            </Reveal>
        </section>
        
        <div id="contact">
          <InitializeProtocol />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
