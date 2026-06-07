import React, { useState } from 'react';
import { ArrowRight, Cpu, Github, Settings, Wrench, Zap } from 'lucide-react';
import { GITHUB_URL } from '../siteLinks';
import { AccentRail } from './AccentRail';

type PlatformDirection = 'maker' | 'pro';

interface ProductCardProps {
  accent: 'cyan' | 'purple' | 'white';
  icon: React.ElementType;
  title: string;
  eyebrow?: string;
  specs?: Array<{ label: string; value: string }>;
  text: string;
  bottom: string;
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

interface SummaryCardProps {
  accent: 'cyan' | 'purple' | 'white';
  icon: React.ElementType;
  title: string;
  eyebrow: string;
  text: string;
  points?: string[];
  bottom: string;
}

const accentClasses = {
  cyan: {
    button: 'bg-transparent text-white border border-hexa-cyan/60 hover:bg-transparent',
  },
  purple: {
    button: 'bg-hexa-purple text-white hover:bg-purple-600',
  },
  white: {
    button: 'bg-transparent text-white border border-hexa-cyan/60 hover:bg-transparent',
  },
};

const ProductCard: React.FC<ProductCardProps> = ({ accent, icon: Icon, title, eyebrow, specs, text, bottom, cta }) => {
  const tone = accentClasses[accent];

  // First line is the brand ("HexaArm"), second line is the model name.
  const [brand, ...modelParts] = title.split(' ');
  const model = modelParts.join(' ');

  const actionClassName = `mt-auto inline-flex items-center justify-center rounded-md px-5 py-3 font-mono-plex text-xs font-bold uppercase tracking-widest transition-all ${tone.button}`;
  const action = cta?.href ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={actionClassName}>
      {cta.label}
      <ArrowRight size={15} className="ml-2" />
    </a>
  ) : cta ? (
    <button type="button" onClick={cta.onClick} className={actionClassName}>
      {cta.label}
      <ArrowRight size={15} className="ml-2" />
    </button>
  ) : null;

  return (
    <AccentRail
      accent={accent}
      icon={Icon}
      eyebrow={eyebrow}
      title={
        <>
          {brand}
          <br />
          {model}
        </>
      }
      titleClassName="text-2xl md:text-3xl leading-tight"
      description={text}
      descriptionClassName="text-base"
      className="min-h-[520px]"
      footer={
        <div className="space-y-6">
          <span className="block text-xs text-gray-500 uppercase font-mono-plex tracking-wider">{bottom}</span>
          {action}
        </div>
      }
    >
      {specs && (
        <div className="space-y-3 mt-1">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between gap-4 border-b border-white/10 pb-2 font-mono-plex text-sm">
              <span className="text-gray-500">{spec.label}</span>
              <span className="text-white text-right font-bold">{spec.value}</span>
            </div>
          ))}
        </div>
      )}
    </AccentRail>
  );
};

const SummaryCard: React.FC<SummaryCardProps> = ({ accent, icon: Icon, title, eyebrow, text, points, bottom }) => {
  return (
    <AccentRail
      accent={accent}
      icon={Icon}
      eyebrow={eyebrow}
      title={title}
      titleClassName="text-2xl md:text-3xl leading-tight"
      description={text}
      descriptionClassName="text-base"
      className="min-h-[520px]"
      footer={<span className="text-xs text-gray-500 uppercase font-mono-plex tracking-wider">{bottom}</span>}
    >
      {points && (
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start text-gray-400 font-mono-plex text-sm">
              <span className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </AccentRail>
  );
};

export const SelectEnvironment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlatformDirection>('maker');

  const scrollToProDirection = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center mb-16">
        <h3 className="text-gray-500 font-mono-plex text-sm uppercase tracking-widest mb-4">Select Platform Direction</h3>
        <div className="bg-hexa-card border border-gray-800 p-1 rounded-full flex space-x-2 relative overflow-hidden">
          <button
            type="button"
            onClick={() => setActiveTab('maker')}
            className={`relative z-10 px-8 py-3 rounded-full font-display uppercase text-sm tracking-wider transition-all ${activeTab === 'maker' ? 'bg-transparent text-white border border-hexa-cyan/60 shadow-[0_0_15px_rgba(152,243,255,0.25)]' : 'text-gray-500 hover:text-white'}`}
          >
            <span className="flex items-center"><Wrench size={16} className="mr-2" /> Maker Line</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pro')}
            className={`relative z-10 px-8 py-3 rounded-full font-display uppercase text-sm tracking-wider transition-all ${activeTab === 'pro' ? 'bg-hexa-purple text-white shadow-[0_0_15px_rgba(140,82,255,0.4)]' : 'text-gray-500 hover:text-white'}`}
          >
            <span className="flex items-center"><Settings size={16} className="mr-2" /> PRO Line</span>
          </button>
        </div>
      </div>

      {activeTab === 'maker' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <ProductCard
            accent="cyan"
            icon={Github}
            title="HexaArm Mini M"
            eyebrow="Open Maker Platform"
            specs={[
              { label: 'Payload', value: '0.5 kg' },
              { label: 'Reach', value: '600 mm' },
              { label: 'Status', value: 'Built / Available on GitHub' },
            ]}
            text="A compact robot arm for learning, prototyping, motion testing, and hands-on robotics development."
            bottom="Use case: learning / prototyping"
            cta={{ label: 'View on GitHub', href: GITHUB_URL }}
          />

          <ProductCard
            accent="cyan"
            icon={Cpu}
            title="HexaArm Medium M"
            eyebrow="Hands-On Development"
            specs={[
              { label: 'Target payload', value: '6 kg' },
              { label: 'Target reach', value: '1200 mm' },
              { label: 'Status', value: 'Under Development' },
            ]}
            text="A larger M-line robot arm for software testing, control experiments, and practical robotics development on accessible hardware."
            bottom="Use case: development / software validation"
            cta={{ label: 'Explore Maker Line', href: GITHUB_URL }}
          />

          <SummaryCard
            accent="white"
            icon={Wrench}
            title="Maker Line"
            eyebrow="Accessible Robotics Development"
            text="Built for users who want to understand, modify, and develop around robot arm hardware without starting from a traditional industrial automation stack."
            points={[
              'Learnable workflow',
              'Open development path',
              'Software + hardware testing',
              'Practical entry into robotics',
            ]}
            bottom="Focus: access / learning / experimentation"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <ProductCard
            accent="purple"
            icon={Settings}
            title="HexaArm Mini PRO"
            eyebrow="Compact PRO Direction"
            specs={[
              { label: 'Target payload', value: '0.5 kg' },
              { label: 'Target reach', value: '600 mm' },
              { label: 'Status', value: 'Under Development' },
            ]}
            text="A compact PRO robot arm concept for early automation studies, controller testing, and integration-oriented development."
            bottom="Use case: compact automation / integration study"
            cta={{ label: 'See PRO Direction', onClick: scrollToProDirection }}
          />

          <ProductCard
            accent="purple"
            icon={Cpu}
            title="HexaArm Medium PRO"
            eyebrow="PRO Development Platform"
            specs={[
              { label: 'Target payload', value: '6 kg' },
              { label: 'Target reach', value: '1200 mm' },
              { label: 'Status', value: 'Under Development' },
            ]}
            text="A medium PRO robot arm built around stronger mechanics, industrial motion components, EtherCAT control, and cabinet-based architecture."
            bottom="Use case: PRO development / automation"
            cta={{ label: 'Request Overview', onClick: scrollToProDirection }}
          />

          <ProductCard
            accent="purple"
            icon={Zap}
            title="HexaArm Heavy PRO"
            eyebrow="PRO Line Concept"
            specs={[
              { label: 'Target payload', value: '20 kg' },
              { label: 'Target reach', value: '1800 mm' },
              { label: 'Status', value: 'Concept Stage' },
            ]}
            text="A higher-capability robot arm concept built for industrial motion components, stronger mechanics, and integration-oriented control architecture."
            bottom="Use case: higher-payload automation / PRO study"
            cta={{ label: 'See PRO Direction', onClick: scrollToProDirection }}
          />
        </div>
      )}
    </div>
  );
};
