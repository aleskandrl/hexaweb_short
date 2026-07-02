import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExplodedView } from './components/ExplodedView';
import { Market } from './components/Market';
import { Platform } from './components/Platform';
import { Lineup } from './components/Lineup';
import { Roadmap } from './components/Roadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-hexa-bg font-sans text-hexa-ink selection:bg-hexa-accent selection:text-hexa-bg">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ExplodedView />
        <Market />
        <Platform />
        <Lineup />
        <Roadmap />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
