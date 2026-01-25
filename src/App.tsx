import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { PerformanceChart } from './components/PerformanceChart';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { MarketAnalysis } from './components/MarketAnalysis';
import { Timeline } from './components/Timeline';
import { PartnersLogos } from './components/PartnersLogos';
import { FeaturesGrid } from './components/FeaturesGrid';
import { TechSpecs } from './components/TechSpecs';
import { UseCases } from './components/UseCases';
import { FAQ } from './components/FAQ';
import { DeveloperExperience } from './components/DeveloperExperience';

// Импорт локального ассета
import carbonPattern from './assets/images/textures/carbon.png';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hexa-bg font-sans text-white selection:bg-hexa-purple selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* === ВСТУПЛЕНИЕ: ЗАЯВЛЕНИЕ О СЕБЕ === */}
        <div id="hero">
          <Hero />
        </div>
        
        {/* Краткий блок с ключевыми тезисами для задания тона */}
        <div className="bg-[#0f0a1e] border-y border-hexa-purple/20 py-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url(${carbonPattern})` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-8 md:space-y-0 relative z-10">
            <div className="group cursor-default">
               <span className="block text-4xl font-display text-hexa-cyan group-hover:scale-110 transition-transform duration-300">Open</span>
               <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Source Architecture</span>
            </div>
            <div className="group cursor-default">
               <span className="block text-4xl font-display text-hexa-purple group-hover:scale-110 transition-transform duration-300">100%</span>
               <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Hackable</span>
            </div>
            <div className="group cursor-default">
               <span className="block text-4xl font-display text-white group-hover:scale-110 transition-transform duration-300">Community</span>
               <span className="text-sm uppercase font-bold text-gray-400 tracking-widest font-mono-plex">Driven Innovation</span>
            </div>
          </div>
        </div>

        {/* === ЧАСТЬ 1: ПРОБЛЕМА, КОТОРУЮ МЫ РЕШАЕМ === */}
        <div id="market">
          <MarketAnalysis />
        </div>
        <PerformanceChart />

        {/* === ЧАСТЬ 2: НАШЕ РЕШЕНИЕ (ЭКОСИСТЕМА) === */}
        <div id="products">
          <ProductSection />
        </div>
        <FeaturesGrid />
        
        {/* === ЧАСТЬ 3: КАК ЭТО РАБОТАЕТ (ТЕХНИЧЕСКИЕ ДЕТАЛИ) === */}
        <DeveloperExperience />
        <TechSpecs />
        <PartnersLogos />

        {/* === ЧАСТЬ 4: НАШЕ ВИДЕНИЕ И КОМАНДА === */}
        <div id="timeline">
          <Timeline />
        </div>
        <div id="team">
          <TeamSection /> 
        </div>
        
        {/* === ЧАСТЬ 5: ПРИЗЫВ К ДЕЙСТВИЮ === */}
        
        <div id="pricing">
          <Pricing />
        </div>
        <FAQ />
        
        {/* Финальный призыв присоединиться к движению */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hexa-purple to-purple-900 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black/0 to-black/0"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-widest mb-4">Join the HexaKinetica Movement</h2>
                <h3 className="text-4xl md:text-5xl font-display text-white uppercase mb-8 leading-tight drop-shadow-lg">
                   Great things are <br/> built together
                </h3>
                <p className="text-gray-300 mb-10 text-lg font-mono-plex max-w-2xl mx-auto leading-relaxed">
                   We are a non-profit collective of passionate engineers, makers, and innovators. 
                   Whether you code, design, or build, we need you.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbr9Jbu8GRUh6469mXskMJ12ORzINa7Fu9etrx7c3La6z1Eg/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-10 py-4 font-mono-plex font-bold uppercase text-sm hover:bg-hexa-cyan hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block"
                >
                   Become a Contributor
                </a>
            </div>
        </section>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;