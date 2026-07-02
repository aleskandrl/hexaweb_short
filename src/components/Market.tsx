import React from 'react';
import { Reveal } from './Reveal';

const STATS = [
  { value: '542,000', label: 'industrial robots installed in 2024 (IFR)' },
  { value: '4.66M', label: 'robots in operation worldwide' },
  { value: '2×', label: 'growth in annual installations over ten years' },
];

export const Market: React.FC = () => {
  return (
    <section id="market" className="bg-hexa-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <Reveal>
            <p className="font-mono-plex text-[11px] font-bold uppercase tracking-[0.28em] text-hexa-ink2">
              The market
            </p>
          </Reveal>
          <Reveal variant="blur-rise" delay={80}>
            <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              Robotics is scaling.
              <br />
              <span className="text-white/40">Access isn't.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 100}>
              <div className="space-y-3 border-t border-white/10 pt-6">
                <span className="block font-mono-plex text-4xl text-white sm:text-5xl [font-variant-numeric:tabular-nums]">
                  {stat.value}
                </span>
                <span className="block max-w-[26ch] font-sans text-sm leading-relaxed text-hexa-ink2">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 max-w-2xl font-sans text-base leading-relaxed text-hexa-ink2 sm:text-lg">
            Closed controllers, proprietary tooling, and integration cost keep robots
            out of small factories, labs, and classrooms.{' '}
            <span className="text-white">That gap is our market.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
