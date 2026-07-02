import React from 'react';
import { Reveal } from './Reveal';

const LAYERS = [
  {
    name: 'HexaArm',
    text: 'Six-axis arms, one architecture from desktop to heavy payload.',
    image: '/media/platform-arm.webp',
    alt: 'Machined aluminium joint and carbon-fibre arm sleeve',
    width: 590,
    height: 640,
  },
  {
    name: 'HexaCore',
    text: 'Real-time EtherCAT motion controller running the entire line.',
    image: '/media/platform-cabinet.webp',
    alt: 'HexaCore controller cabinet with servo drives behind a transparent door',
    width: 590,
    height: 640,
  },
  {
    name: 'HexaStudio',
    text: 'Operator software and pendant: setup, jogging, programs, diagnostics.',
    image: '/media/platform-hmi.webp',
    alt: 'HexaStudio operator interface showing a robot program and live joint control',
    width: 1066,
    height: 640,
  },
];

const STANDARDS = ['ETHERCAT', 'PREEMPT_RT LINUX', 'C++20', 'ROS 2', 'OPEN URDF'];

export const Platform: React.FC = () => {
  return (
    <section id="platform" className="bg-hexa-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <Reveal>
            <p className="font-mono-plex text-[11px] font-bold uppercase tracking-[0.28em] text-hexa-ink2">
              The platform
            </p>
          </Reveal>
          <Reveal variant="blur-rise" delay={80}>
            <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              One system,
              <br />
              <span className="text-white/40">three layers</span>
            </h2>
          </Reveal>
        </div>

        {/* Justified row: each card's flex-grow equals its asset's aspect ratio
            (basis 0), and the frame keeps that same ratio — so all three images
            share one rendered height with no cropping and no leftover surface
            (the tablet must never be cropped or stretched). */}
        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-start">
          {LAYERS.map((layer, i) => (
            <Reveal
              key={layer.name}
              delay={i * 100}
              className="lg:min-w-0 lg:basis-0"
              style={{ flexGrow: layer.width / layer.height }}
            >
              <article className="space-y-5">
                <div
                  className="overflow-hidden rounded-lg bg-hexa-surface"
                  style={{ aspectRatio: `${layer.width} / ${layer.height}` }}
                >
                  <img
                    src={layer.image}
                    alt={layer.alt}
                    width={layer.width}
                    height={layer.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-800 ease-out-expo hover:scale-[1.02]"
                  />
                </div>
                <h3 className="font-display text-lg text-white">{layer.name}</h3>
                <p className="max-w-[36ch] font-sans text-sm leading-relaxed text-hexa-ink2">{layer.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 space-y-4 border-t border-white/10 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {STANDARDS.map((s) => (
                <li key={s} className="font-mono-plex text-xs tracking-[0.18em] text-hexa-ink2">
                  {s}
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm text-hexa-ink3">
              Developed together — no third-party controllers, no licensed software layers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
