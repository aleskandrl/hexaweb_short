import React from 'react';
import { GITHUB_URL } from '../siteLinks';
import { Button } from './Button';

const SPECS = ['6 AXES', '0.5–20 KG PAYLOAD', 'ETHERCAT'];

export const Hero: React.FC = () => {
  const scrollToExploded = () => {
    document.getElementById('exploded')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-hexa-bg">
      {/* Full-bleed system photo; the asset's black background dissolves into the page. */}
      <div className="hero-media-in absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet="/media/system-hero-1600.avif 1600w, /media/system-hero-2560.avif 2560w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/media/system-hero-1600.webp 1600w, /media/system-hero-2560.webp 2560w"
            sizes="100vw"
          />
          <img
            src="/media/system-hero-1600.jpg"
            alt="The complete Hexakinetica system: HexaArm six-axis robot, HexaCore controller cabinet, and teach pendant"
            width={2560}
            height={1280}
            {...({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)}
            className="h-full w-full scale-[1.06] object-cover object-[42%_center]"
          />
        </picture>
        {/* Readability gradient behind the bottom spec strip only. */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-hexa-bg to-transparent"></div>
      </div>

      {/* Copy sits in the empty black zone above the cabinet. */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="max-w-3xl space-y-6 lg:-ml-6">
          <h1 className="hero-rise-in font-display text-3xl leading-snug text-white sm:text-4xl lg:text-5xl [--rise-delay:150ms]">
            WE BUILD ROBOTS
            <br />
            <span className="text-white/40">DIFFERENTLY</span>
          </h1>

          <p className="hero-rise-in max-w-xl font-sans text-base leading-relaxed text-hexa-ink2 sm:text-lg [--rise-delay:280ms]">
            A six-axis arm, real-time EtherCAT controller, and operator software —
            engineered as one system.
          </p>
        </div>
      </div>

      {/* CTAs live on the black area right of the robot, lower half of the frame. */}
      <div className="relative z-10 lg:absolute lg:inset-x-0 lg:bottom-[26%]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:flex lg:justify-end lg:px-8">
          <div className="hero-rise-in flex flex-wrap items-center gap-6 [--rise-delay:450ms]">
            <Button variant="primary" onClick={scrollToExploded}>
              See the system
            </Button>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-plex text-xs font-bold uppercase tracking-[0.18em] text-hexa-ink2 transition-colors duration-200 hover:text-white"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="hero-rise-in flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between [--rise-delay:600ms]">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {SPECS.map((spec) => (
              <li key={spec} className="font-mono-plex text-xs tracking-[0.18em] text-hexa-ink2">
                {spec}
              </li>
            ))}
          </ul>
          <p className="font-mono-plex text-[10px] uppercase tracking-[0.2em] text-hexa-ink3">
            HexaArm · HexaCore · Pendant — validation build, in testing
          </p>
        </div>
      </div>
    </section>
  );
};
