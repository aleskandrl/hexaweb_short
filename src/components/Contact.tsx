import React from 'react';
import { CONTACT_EMAIL, CONTACT_MAILTO, GITHUB_URL } from '../siteLinks';
import { Reveal } from './Reveal';

const ROWS = [
  {
    label: 'Partners',
    action: 'Request the info',
    link: CONTACT_EMAIL,
    href: `${CONTACT_MAILTO}?subject=Deck%20request`,
    external: false,
  },
  {
    label: 'Engineers',
    action: 'Read the code',
    link: 'github.com/hexakinetica',
    href: GITHUB_URL,
    external: true,
  },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-hexa-bg py-28">
      {/* Dimmed system photo as the closing backdrop. */}
      <div className="absolute inset-0">
        <img
          src="/media/system-hero-1600.webp"
          alt=""
          aria-hidden="true"
          width={1600}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hexa-bg via-hexa-bg/70 to-hexa-bg"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-rise">
          <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
            Talk to the team
          </h2>
        </Reveal>

        <div className="mt-14 max-w-3xl">
          {ROWS.map((row, i) => (
            <Reveal key={row.label} delay={i * 100}>
              <a
                href={row.href}
                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-2 border-t border-white/10 py-8 transition-colors duration-200 last:border-b sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-mono-plex text-[11px] font-bold uppercase tracking-[0.28em] text-hexa-ink2">
                  {row.label}
                </span>
                <span className="font-sans text-lg text-white sm:text-xl">
                  {row.action}{' '}
                  <span className="text-hexa-ink2 transition-colors duration-200 group-hover:text-hexa-accent">
                    → {row.link}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
