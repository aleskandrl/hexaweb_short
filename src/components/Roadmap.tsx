import React from 'react';
import { Reveal } from './Reveal';

const MILESTONES = [
  {
    year: '2025',
    now: false,
    text: 'Platform architecture. First prototypes.',
  },
  {
    year: '2026',
    now: true,
    text: 'Hardware validation. Pilot integrations in labs and education.',
  },
  {
    year: '2027',
    now: false,
    text: 'Series production. Medium and Heavy lines.',
  },
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="bg-hexa-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <Reveal>
            <p className="font-mono-plex text-xs font-bold uppercase tracking-[0.28em] text-hexa-ink2 sm:text-[11px]">
              Roadmap
            </p>
          </Reveal>
          <Reveal variant="blur-rise" delay={80}>
            <h2 className="font-display text-3xl leading-snug text-white sm:text-3xl lg:text-4xl">
              From validation
              <br />
              <span className="text-white/40">to production</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 100}>
              <article className="relative space-y-4 border-t border-white/10 pt-6">
                {/* Timeline node on the hairline; the current phase carries the accent. */}
                <span
                  className={`absolute -top-[3.5px] left-0 h-1.5 w-1.5 rounded-full ${
                    m.now ? 'bg-hexa-accent' : 'bg-white/40'
                  }`}
                ></span>
                <p className="font-mono-plex text-xl text-white [font-variant-numeric:tabular-nums] sm:text-lg">
                  {m.year}
                  {m.now && (
                    <span className="ml-3 text-xs uppercase tracking-[0.2em] text-hexa-accent sm:text-[11px]">
                      Now
                    </span>
                  )}
                </p>
                <p className="max-w-[32ch] font-sans text-base leading-relaxed text-hexa-ink2 sm:text-sm">{m.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
