import React from 'react';
import { Code, Globe, RefreshCcw, GitMerge, Wrench, LucideIcon } from 'lucide-react';
import axis5ReducerImg from '../assets/images/products/axis-5-reducer.png';
import { AccentRail } from './AccentRail';
import { Reveal } from './Reveal';

// --- Types ---
interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  gradient: string;
  image?: string;
}

// --- Data ---
const FEATURES: Feature[] = [
  {
    id: "01",
    icon: Code,
    title: "Visible Architecture",
    description: "The platform is designed to be understandable: mechanics, controller logic, motor communication, software, and simulation are presented as one connected system.",
    className: "md:col-span-5",
    gradient: "from-hexa-purple/20 to-transparent",
    image: axis5ReducerImg
  },
  {
    id: "02",
    icon: Wrench,
    title: "PRO Motion Stack",
    description: "The PRO direction is built around practical motion-control components: industrial IPC hardware, EtherCAT motion control, servo drives, motor interfaces, I/O, and cabinet-based control architecture.",
    className: "md:col-span-4", 
    gradient: "from-white/10 to-transparent"
  },
  {
    id: "03",
    icon: RefreshCcw,
    title: "Simulation-to-Hardware Workflow",
    description: "CAD, simulation, controller logic, and physical prototypes are developed together so motion behavior can be tested before and alongside real hardware.",
    className: "md:col-span-4",
    gradient: "from-green-500/10 to-transparent"
  },
  {
    id: "04",
    icon: Globe,
    title: "Engineering Documentation",
    description: "The platform direction includes clear documentation for system architecture, interfaces, hardware decisions, software workflow, and development materials shared with early users.",
    className: "md:col-span-4",
    gradient: "from-hexa-cyan/10 to-transparent"
  }
];

const featureAccentById: Record<string, 'cyan' | 'purple' | 'green' | 'white'> = {
  '01': 'cyan',
  '02': 'white',
  '03': 'green',
  '04': 'purple',
};

// --- Components ---

const BentoCard: React.FC<Feature> = ({ id, icon: Icon, title, description, className, image }) => (
  <AccentRail
    accent={featureAccentById[id] ?? 'white'}
    icon={Icon}
    eyebrow={`Feature ${id}`}
    title={title}
    description={description}
    descriptionClassName="text-base"
    className={className}
  >
    {image && (
      <div className="overflow-hidden rounded-lg border border-white/10 bg-black/30">
        <img
          src={image}
          loading="lazy"
          decoding="async"
          alt="Axis 5 reducer joint detail with cover removed"
          className="h-44 md:h-52 w-full object-cover opacity-85 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
        />
      </div>
    )}
  </AccentRail>
);

const MainCard: React.FC = () => (
  <AccentRail
    accent="cyan"
    icon={GitMerge}
    eyebrow="Flagship Feature"
    title="Unified Platform Core"
    titleClassName="text-2xl md:text-3xl tracking-wide"
    description={(
      <>
        Maker and PRO hardware directions are built around the same platform foundation: <span className="text-white font-bold border-b border-hexa-cyan/50">robot hardware</span>, <span className="text-white font-bold border-b border-hexa-purple/50">motion control</span>, operator software, simulation workflow, and engineering documentation.
        <br />
        <br />
        This allows the platform to grow across different robot sizes and capability levels without becoming a collection of disconnected prototypes.
      </>
    )}
    descriptionClassName="text-base max-w-2xl"
    className="md:col-span-7"
  />
);

// --- Main Layout ---
export const ConnectedPlatform: React.FC = () => {
  return (
    <section className="py-32 bg-hexa-bg relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-hexa-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hexa-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Header */}
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-white font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4 flex items-center">
              <span className="w-10 h-px bg-hexa-cyan mr-3"></span> Why Us?
            </h2>
            <h3 className="font-display text-3xl md:text-5xl text-white uppercase leading-none">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-hexa-cyan to-hexa-purple">Connected</span><br/> Robotics Platform
            </h3>
          </div>
          <p className="text-gray-400 font-mono-plex text-xs md:text-sm max-w-xl text-left mt-6 md:mt-0 leading-relaxed">
            Robot arm development should not be split across isolated CAD files, controllers, scripts, and undocumented hardware decisions. Hexakinetica connects the stack so users can study, test, modify, and build around the system.
          </p>
        </Reveal>

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
