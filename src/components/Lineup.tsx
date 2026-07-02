import React, { useState } from 'react';
import { GITHUB_URL } from '../siteLinks';
import { Reveal } from './Reveal';

type LineId = 'maker' | 'pro';

interface Model {
  name: string;
  payload: string;
  reach: string;
  use: string;
  status: string;
  statusAccent: boolean;
}

interface Line {
  id: LineId;
  label: string;
  text: string;
  link: { label: string; href: string; external: boolean };
  models: Model[];
}

const LINES: Line[] = [
  {
    id: 'maker',
    label: 'Maker line',
    text: 'Open hardware for learning and hands-on robotics development.',
    link: { label: 'GitHub →', href: GITHUB_URL, external: true },
    models: [
      {
        name: 'Mini M',
        payload: '0.5 kg',
        reach: '600 mm',
        use: 'prototyping',
        status: 'Available on GitHub',
        statusAccent: true,
      },
      {
        name: 'Medium M',
        payload: '6 kg',
        reach: '1200 mm',
        use: 'development / validation',
        status: 'In development · target spec',
        statusAccent: false,
      },
    ],
  },
  {
    id: 'pro',
    label: 'PRO line',
    text: 'Industrial mechanics, EtherCAT motion, and cabinet-based control — built for integration.',
    link: { label: 'Request overview →', href: '#contact', external: false },
    models: [
      {
        name: 'Mini PRO',
        payload: '0.5 kg',
        reach: '600 mm',
        use: 'compact automation',
        status: 'In development · target spec',
        statusAccent: false,
      },
      {
        name: 'Medium PRO',
        payload: '6 kg',
        reach: '1200 mm',
        use: 'light automation',
        status: 'In development · target spec',
        statusAccent: false,
      },
      {
        name: 'Heavy PRO',
        payload: '20 kg',
        reach: '1800 mm',
        use: 'industrial cells',
        status: 'Concept · target spec',
        statusAccent: false,
      },
    ],
  },
];

export const Lineup: React.FC = () => {
  const [activeId, setActiveId] = useState<LineId>('maker');
  const activeIndex = LINES.findIndex((l) => l.id === activeId);
  const active = LINES[activeIndex];

  const onTablistKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const step = e.key === 'ArrowRight' ? 1 : LINES.length - 1;
    const next = LINES[(activeIndex + step) % LINES.length];
    setActiveId(next.id);
    document.getElementById(`lineup-tab-${next.id}`)?.focus();
  };

  return (
    <section id="lineup" className="bg-hexa-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-7">
            <Reveal>
              <p className="font-mono-plex text-[11px] font-bold uppercase tracking-[0.28em] text-hexa-ink2">
                The lineup
              </p>
            </Reveal>
            <Reveal variant="blur-rise" delay={80}>
              <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
                Two lines,
                <br />
                <span className="text-white/40">one architecture</span>
              </h2>
            </Reveal>
          </div>

          {/* Cabinet-style toggle: the labels are the real tabs (focus, ARIA,
              arrow keys); the track between them is a redundant control hidden
              from assistive tech, so it stays out of the tab order. */}
          <Reveal delay={160}>
            <div
              role="tablist"
              aria-label="HexaArm lines"
              onKeyDown={onTablistKeyDown}
              className="flex items-center gap-4"
            >
              {LINES.map((line, i) => {
                const isActive = line.id === activeId;
                const tab = (
                  <button
                    key={line.id}
                    id={`lineup-tab-${line.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`lineup-panel-${line.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(line.id)}
                    className={`flex items-center py-3.5 font-mono-plex text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 md:py-2 ${
                      isActive ? 'text-white' : 'text-hexa-ink2 hover:text-white'
                    }`}
                  >
                    {line.label}
                  </button>
                );
                if (i === 0) return tab;
                return (
                  <React.Fragment key={line.id}>
                    <button
                      type="button"
                      aria-hidden="true"
                      tabIndex={-1}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setActiveId(activeId === 'maker' ? 'pro' : 'maker')}
                      className="relative h-11 w-[76px] rounded-full border border-white/10 bg-hexa-surface/60 md:h-9"
                    >
                      <span
                        className="absolute bottom-1 left-1 top-1 flex w-[calc(50%-0.25rem)] items-center justify-center gap-[3px] rounded-full bg-white transition-transform duration-500 ease-swift"
                        style={{ transform: `translateX(${activeIndex * 100}%)` }}
                      >
                        <span className="h-2.5 w-px bg-black/20"></span>
                        <span className="h-2.5 w-px bg-black/20"></span>
                        <span className="h-2.5 w-px bg-black/20"></span>
                      </span>
                    </button>
                    {tab}
                  </React.Fragment>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          {/* Keyed by line so the panel re-mounts and replays the rise animation on switch. */}
          <div
            key={active.id}
            id={`lineup-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`lineup-tab-${active.id}`}
            className="mt-14"
          >
            <div className="hero-rise-in flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
              <p className="max-w-[52ch] font-sans text-sm leading-relaxed text-hexa-ink2">
                {active.text}
              </p>
              <a
                href={active.link.href}
                {...(active.link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-mono-plex text-xs font-bold uppercase tracking-[0.18em] text-hexa-ink2 transition-colors duration-200 hover:text-white"
              >
                {active.link.label}
              </a>
            </div>

            {/* Both lines share the same 3-column rhythm so model cards align
                vertically; the Maker row's empty slot is intentional. */}
            <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
              {active.models.map((model, i) => (
                <article
                  key={model.name}
                  className="hero-rise-in space-y-6 border-t border-white/10 pt-6"
                  style={{ '--rise-delay': `${80 + i * 80}ms` } as React.CSSProperties}
                >
                  <h3 className="font-display text-xl text-white">{model.name}</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
                      <dt className="font-sans text-sm text-hexa-ink3">Payload</dt>
                      <dd className="font-mono-plex text-sm text-white [font-variant-numeric:tabular-nums]">
                        {model.payload}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
                      <dt className="font-sans text-sm text-hexa-ink3">Reach</dt>
                      <dd className="font-mono-plex text-sm text-white [font-variant-numeric:tabular-nums]">
                        {model.reach}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
                      <dt className="font-sans text-sm text-hexa-ink3">Use</dt>
                      <dd className="font-mono-plex text-sm text-white">{model.use}</dd>
                    </div>
                  </dl>
                  <p
                    className={`font-mono-plex text-[11px] uppercase tracking-[0.2em] ${
                      model.statusAccent ? 'text-hexa-accent' : 'text-hexa-ink2'
                    }`}
                  >
                    {model.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-16 font-sans text-sm text-hexa-ink3">
            Same controller, same software, across both lines.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
