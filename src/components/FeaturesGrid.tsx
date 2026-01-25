import React from 'react';
import { Code, Globe, RefreshCcw, GitMerge, Wrench, LucideIcon, ArrowUpRight } from 'lucide-react';

// --- Types ---
interface Feature {
  id: string; 
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string; 
  gradient: string; 
}

// --- Data ---
const FEATURES: Feature[] = [
  {
    id: "01",
    icon: Code,
    title: "100% Hackable",
    description: "No black boxes. Full access to Python/C++ control loops. You own the hardware, you own the logic.",
    className: "md:col-span-5", 
    gradient: "from-hexa-purple/20 to-transparent"
  },
  {
    id: "02",
    icon: Wrench,
    title: "Right to Repair",
    description: "No vendor lock-in. Built on standard EtherCAT & x86 parts. Component failed? Buy a generic replacement anywhere.",
    className: "md:col-span-4", 
    gradient: "from-white/10 to-transparent"
  },
  {
    id: "03",
    icon: RefreshCcw,
    title: "Zero Bloatware",
    description: "Paying for 100% complexity for 10% of tasks is over. We strip the excess, cutting hardware costs by 60%.",
    className: "md:col-span-4",
    gradient: "from-green-500/10 to-transparent"
  },
  {
    id: "04",
    icon: Globe,
    title: "Community Driven",
    description: "Features arrive faster than corporate roadmaps. Thousands of engineers pushing the core forward.",
    className: "md:col-span-4",
    gradient: "from-hexa-cyan/10 to-transparent"
  }
];

// --- Components ---

const BentoCard: React.FC<Feature> = ({ id, icon: Icon, title, description, className, gradient }) => (
  <div className={`relative bg-hexa-card border border-white/5 rounded-xl p-6 overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between ${className}`}>
    
    {/* Hover Gradient Background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
    
    {/* Background Pattern (Noise/Grid) */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

    {/* Big Background Number */}
    <div className="absolute -right-4 -top-6 text-[120px] font-display font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
      {id}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={24} />
        </div>
        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" size={20} />
      </div>

      <h4 className="text-2xl font-display text-white mb-3 group-hover:translate-x-1 transition-transform">{title}</h4>
      <p className="text-gray-400 font-mono-plex text-base leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

const MainCard: React.FC = () => (
  <div className="md:col-span-7 bg-hexa-card border border-hexa-cyan/30 rounded-xl p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(152,243,255,0.05)] hover:shadow-[0_0_50px_rgba(152,243,255,0.1)] transition-all duration-500">
    
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-hexa-cyan/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(152,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(152,243,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

    {/* Removed h-full and justify-between to make it hug content (thinner) */}
    <div className="relative z-10 flex flex-col justify-center">
      <div>
        <div className="flex items-center space-x-3 mb-4">
           <span className="flex h-2 w-2 rounded-full bg-hexa-cyan animate-pulse"></span>
           <span className="text-hexa-cyan font-mono-plex text-sm uppercase tracking-widest">Flagship Feature</span>
        </div>
        
        <div className="flex items-center mb-4">
          <GitMerge className="text-hexa-cyan mr-4" size={42} />
          <h4 className="text-2xl md:text-3xl font-display text-white tracking-wide">Unified Core</h4>
        </div>
        
        {/* Removed mb-8 since there are no tags below */}
        <p className="text-gray-300 font-mono-plex text-base leading-relaxed max-w-lg">
          One architecture to rule them all. From <span className="text-white font-bold border-b border-hexa-cyan/50">DIY Prototypes</span> to <span className="text-white font-bold border-b border-hexa-purple/50">Factory Floors</span>. 
          Write code once, deploy anywhere. The only limit is your physics, not our firmware.
        </p>
      </div>

      {/* TAGS REMOVED HERE as requested */}
    </div>
  </div>
);

// --- Main Layout ---
export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-32 bg-hexa-bg relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-hexa-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hexa-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4 flex items-center">
              <span className="w-10 h-px bg-hexa-cyan mr-3"></span> Why Us?
            </h2>
            <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-cyan to-hexa-purple">Unfair</span><br/> Advantage
            </h3>
          </div>
          <p className="text-gray-500 font-mono-plex text-xs md:text-sm max-w-md text-right mt-6 md:mt-0">
            We don't just sell robots.<br/>
            We sell the infrastructure of freedom.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Row 1: Thinner now */}
          <MainCard />
          <BentoCard {...FEATURES[0]} />

          {/* Row 2: Three equal cards */}
          {FEATURES.slice(1).map((feature) => (
            <BentoCard key={feature.id} {...feature} />
          ))}

        </div>
      </div>
    </section>
  );
};