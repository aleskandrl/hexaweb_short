import React, { useEffect, useRef, useState } from 'react';
import { GITHUB_DESKTOP_URL } from '../siteLinks';
import { Reveal } from './Reveal';
import { Button } from './Button';

// Aspect ratio of the HexaStudio render (studio-*.{avif,webp,jpg}).
const RATIO = 2888 / 1755;
// HexaStudio Desktop installer. Served straight from the Desktop GitHub repo at a
// STABLE path with a CONSTANT filename, so updating the app is just: overwrite
// installer/HexaStudioDesktop-Setup.zip in that repo and push — this href never
// changes. The download runs on github's own domain (raw.githubusercontent.com),
// keeping SmartScreen/Safe Browsing reputation on a trusted host, not our site.
// It is shipped ZIPPED on purpose: browsers flag a bare .exe download but pass a
// .zip straight through — the installer sits inside, byte-for-byte unchanged.
const DESKTOP_VERSION = '0.1.139';
const DOWNLOAD_HREF =
  'https://raw.githubusercontent.com/hexakinetica/HexaStudio-Desktop/main/installer/HexaStudioDesktop-Setup.zip';
const DOWNLOAD_NAME = `HexaStudioDesktop-Setup-${DESKTOP_VERSION}.zip`;

const STANDARDS = ['ETHERCAT', 'RT LINUX', 'C++20', 'ROS 2', 'OPEN URDF'];
const HIGHLIGHTS = ['TEACH & JOG', 'SIM ↔ REAL'];

// The two supporting layers that recede as HexaStudio grows. Frame ratio matches
// each tile's flex-grow so the justified row shares one rendered height.
const SIBLINGS = [
  { name: 'HexaArm', text: 'Six-axis arms, one architecture from desktop to heavy payload.', image: '/media/platform-arm.webp', width: 738, height: 800, ratio: 0.92 },
  { name: 'HexaCore', text: 'Real-time EtherCAT motion controller running the entire line.', image: '/media/platform-cabinet.webp', width: 880, height: 528, ratio: 0.92 },
];

const STUDIO_ALT =
  'HexaStudio operator interface on the HK-T10-Slim tablet: program list, live 3D robot view, and per-joint jog control';
const STUDIO_LINE = 'Try our robot control system on your PC — right in the built-in simulator.';

// Pinned scroll length + how far the card travels/grows.
const SECTION_VH = 260;
const HOLD_TAIL = 0.14;
const END_WIDTH = 0.67; // final card width as a fraction of the stage
// SmoothDamp follow time — higher = smoother/laggier grow (see ExplodedView).
// Kept tight so the grow reacts briskly the instant you start scrolling.
const SMOOTH_TIME = 0.22;
const MAX_DT = 1 / 10;
// Card is fully grown by this progress; the rest settles the copy in.
const GROW_END = 0.85;

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;

const clamp = (n: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, n));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const ramp = (e0: number, e1: number, x: number): number => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
// Ease-out (cubic): steep at the start so the grow responds immediately, then
// decelerates into place — feels brisk up front, smooth at the finish.
const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

/**
 * "One system, three layers" — HexaArm, HexaCore, HexaStudio.
 *
 * Desktop pins for ~1.6 extra viewports and scrubs one continuous, SmoothDamped
 * move: the HexaStudio tile (the SAME card as the final render) grows from its
 * place in the three-tile row into a large panel on the left, while the siblings,
 * heading and standards strip fly back, and a short pitch + Windows download
 * resolve on the right, vertically centred on the tablet. Phones/reduced-motion
 * get the static stack, with a full-height beat where the tablet sits alone in
 * frame before the copy and CTA.
 */
export const Platform: React.FC = () => {
  const [animate, setAnimate] = useState(() => !prefersReducedMotion() && isDesktop());

  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const startSlotRef = useRef<HTMLDivElement>(null);
  const endSlotRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const studioLabelRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const stdRef = useRef<HTMLDivElement>(null);

  // Keep the gate live so rotating across the 1024px / reduced-motion boundary
  // swaps to the correct layout instead of stranding the pinned transforms.
  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAnimate(mqDesktop.matches && !mqReduce.matches);
    sync();
    mqDesktop.addEventListener('change', sync);
    mqReduce.addEventListener('change', sync);
    return () => {
      mqDesktop.removeEventListener('change', sync);
      mqReduce.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (!animate) return;
    const outer = outerRef.current;
    const stage = stageRef.current;
    const card = cardRef.current;
    const startSlot = startSlotRef.current;
    const endSlot = endSlotRef.current;
    if (!outer || !stage || !card || !startSlot || !endSlot) return;

    let target = 0;
    let cur = 0;
    let vel = 0;
    let seeded = false;
    let lastT = performance.now();
    let raf = 0;
    let running = false;
    let visible = false;
    type Slot = { cx: number; cy: number; w: number };
    let s: Slot | null = null;
    let e: Slot | null = null;

    const centerOf = (el: HTMLElement, stageRect: DOMRect): Slot => {
      const r = el.getBoundingClientRect();
      return { cx: r.left - stageRect.left + r.width / 2, cy: r.top - stageRect.top + r.height / 2, w: r.width };
    };

    // Slot geometry is scroll-invariant relative to the stage, so measure it once
    // per layout (mount / resize / enter), not per frame. The card's base box is
    // the end slot at native size; the grow is a pure transform (translate + scale),
    // so no layout/reflow happens per frame.
    const cacheRects = () => {
      const stageRect = stage.getBoundingClientRect();
      s = centerOf(startSlot, stageRect);
      e = centerOf(endSlot, stageRect);
      const eh = e.w / RATIO;
      card.style.left = `${e.cx - e.w / 2}px`;
      card.style.top = `${e.cy - eh / 2}px`;
      card.style.width = `${e.w}px`;
      card.style.height = `${eh}px`;
    };

    const measure = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      target = clamp(raw / (1 - HOLD_TAIL), 0, 1);
      ensureRunning();
    };

    const frame = (p: number) => {
      if (!s || !e) cacheRects();
      const sr = s as Slot;
      const er = e as Slot;
      const m = easeOut(clamp(p / GROW_END, 0, 1));
      const w = lerp(sr.w, er.w, m);
      const cx = lerp(sr.cx, er.cx, m);
      const cy = lerp(sr.cy, er.cy, m);
      // Scale down from the end box and translate its centre to the current centre.
      card.style.transform = `translate(${cx - er.cx}px, ${cy - er.cy}px) scale(${w / er.w})`;
      card.style.opacity = '1';

      const a = ramp(0, 0.42, p);
      if (armRef.current) {
        armRef.current.style.opacity = `${1 - a}`;
        armRef.current.style.transform = `translate3d(${-42 * a}px, ${-46 * a}px, 0) scale(${1 - 0.14 * a})`;
      }
      if (coreRef.current) {
        coreRef.current.style.opacity = `${1 - a}`;
        coreRef.current.style.transform = `translate3d(${-16 * a}px, ${-54 * a}px, 0) scale(${1 - 0.14 * a})`;
      }
      const hf = ramp(0, 0.34, p);
      if (introRef.current) {
        introRef.current.style.opacity = `${1 - hf}`;
        introRef.current.style.transform = `translate3d(0, ${-30 * hf}px, 0)`;
      }
      if (stdRef.current) stdRef.current.style.opacity = `${1 - ramp(0, 0.3, p)}`;
      if (studioLabelRef.current) studioLabelRef.current.style.opacity = `${1 - ramp(0, 0.32, p)}`;

      const d = ramp(0.55, 1, p);
      if (descRef.current) {
        descRef.current.style.opacity = `${d}`;
        // Panel is flex-centred (no transform needed for centring). Slide it in on
        // the X only, then at rest drop the transform AND the compositing layer so
        // the CTA text regains sub-pixel antialiasing instead of reading blurry.
        if (d >= 1) {
          descRef.current.style.transform = 'none';
          descRef.current.style.willChange = 'auto';
        } else {
          descRef.current.style.transform = `translate3d(${30 * (1 - d)}px, 0, 0)`;
          descRef.current.style.willChange = 'transform, opacity';
        }
        descRef.current.style.pointerEvents = d > 0.6 ? 'auto' : 'none';
        // Keep the invisible CTA out of the tab order + a11y tree until revealed.
        descRef.current.inert = d < 0.6;
      }
    };

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastT) / 1000, MAX_DT);
      lastT = now;
      if (!seeded) {
        cur = target;
        seeded = true;
      } else if (dt > 0) {
        // Critically-damped low-pass (SmoothDamp) — eases the grow in and out
        // with no overshoot, frame-rate independent.
        const omega = 2 / SMOOTH_TIME;
        const x = omega * dt;
        const expo = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
        const change = cur - target;
        const temp = (vel + omega * change) * dt;
        vel = (vel - omega * temp) * expo;
        cur = target + (change + temp) * expo;
      }
      frame(cur);
      // Stop once settled; a scroll/resize re-arms the loop via measure().
      if (Math.abs(cur - target) < 1e-4 && Math.abs(vel) < 1e-4) {
        running = false;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    function ensureRunning() {
      if (running || !visible) return;
      running = true;
      lastT = performance.now();
      raf = requestAnimationFrame(tick);
    }

    const onResize = () => {
      cacheRects();
      measure();
    };

    // Only run the loop while the section is near the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) {
          cacheRects();
          measure();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
          running = false;
        }
      },
      { rootMargin: '200px 0px 200px 0px' }
    );
    io.observe(outer);

    if (descRef.current) descRef.current.inert = true;
    cacheRects();
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', onResize);
    };
  }, [animate]);

  const heading = (
    <>
      <p className="font-mono-plex text-xs font-bold uppercase tracking-[0.28em] text-hexa-ink2 sm:text-[11px]">
        The platform
      </p>
      <h2 className="mt-6 font-display text-3xl leading-snug text-white sm:text-3xl lg:text-4xl">
        One system,
        <br />
        <span className="text-white/40">three layers</span>
      </h2>
    </>
  );

  const studioCard = (
    <div className="h-full w-full overflow-hidden rounded-lg">
      <picture>
        <source type="image/avif" srcSet="/media/studio-1600.avif 1600w, /media/studio-2560.avif 2560w" sizes="(min-width: 1024px) 62vw, 100vw" />
        <source type="image/webp" srcSet="/media/studio-1600.webp 1600w, /media/studio-2560.webp 2560w" sizes="(min-width: 1024px) 62vw, 100vw" />
        <img src="/media/studio-1600.jpg" alt={STUDIO_ALT} width={2560} height={1556} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </picture>
    </div>
  );

  const descriptionPanel = (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-white sm:text-xl">HexaStudio Desktop</h3>
        <p className="font-sans text-lg leading-relaxed text-hexa-ink2 sm:text-base">{STUDIO_LINE}</p>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6">
        {HIGHLIGHTS.map((h) => (
          <li key={h} className="font-mono-plex text-sm tracking-[0.18em] text-hexa-ink2 sm:text-xs">
            {h}
          </li>
        ))}
      </ul>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-5">
          <Button variant="primary" href={DOWNLOAD_HREF} download={DOWNLOAD_NAME}>
            Download
          </Button>
          {/* GitHub as the Hero-style text link (not a boxed button). */}
          <a
            href={GITHUB_DESKTOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono-plex text-sm font-bold uppercase tracking-[0.18em] text-hexa-ink2 transition-colors duration-200 hover:text-white sm:text-xs"
          >
            GitHub →
          </a>
        </div>
        <p className="font-mono-plex text-[11px] uppercase tracking-[0.2em] text-hexa-ink3 sm:text-[10px]">
          Windows 11 64-bit · Beta {DESKTOP_VERSION}
        </p>
      </div>
    </div>
  );

  // ---- Desktop: pinned cinematic ---------------------------------------------
  if (animate) {
    return (
      <div ref={outerRef} id="platform" className="relative bg-hexa-bg" style={{ height: `${SECTION_VH}vh` }}>
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-16">
          <div ref={stageRef} className="relative mx-auto h-[84vh] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading — recedes */}
            <div ref={introRef} className="absolute left-4 top-0 will-change-[transform,opacity] sm:left-6 lg:left-8">
              {heading}
            </div>

            {/* Big target slot (left) — invisible, defines where the card lands */}
            <div
              ref={endSlotRef}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 opacity-0 sm:left-6 lg:left-8"
              style={{ width: `${END_WIDTH * 100}%`, aspectRatio: '2888 / 1755' }}
              aria-hidden="true"
            />

            {/* Three-tile row — justified so all three share one height and fill the
                width (flex-grow ∝ each frame's ratio, basis 0). The start state. */}
            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 items-start gap-6 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
              <div ref={armRef} className="min-w-0 will-change-[transform,opacity]" style={{ flexGrow: SIBLINGS[0].ratio, flexBasis: 0 }}>
                <div className="overflow-hidden rounded-lg bg-hexa-surface" style={{ aspectRatio: '92 / 100' }}>
                  <img src={SIBLINGS[0].image} alt="" width={SIBLINGS[0].width} height={SIBLINGS[0].height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 font-display text-lg text-white">{SIBLINGS[0].name}</p>
              </div>
              <div ref={coreRef} className="min-w-0 will-change-[transform,opacity]" style={{ flexGrow: SIBLINGS[1].ratio, flexBasis: 0 }}>
                <div className="overflow-hidden rounded-lg bg-hexa-surface" style={{ aspectRatio: '92 / 100' }}>
                  <img src={SIBLINGS[1].image} alt="" width={SIBLINGS[1].width} height={SIBLINGS[1].height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 font-display text-lg text-white">{SIBLINGS[1].name}</p>
              </div>
              {/* HexaStudio start slot — the moving card overlays this exactly */}
              <div className="flex min-w-0 flex-col" style={{ flexGrow: RATIO, flexBasis: 0 }}>
                <div ref={startSlotRef} className="rounded-lg" style={{ aspectRatio: '2888 / 1755' }} aria-hidden="true" />
                <p ref={studioLabelRef} className="mt-4 font-display text-lg text-white will-change-[opacity]">HexaStudio</p>
              </div>
            </div>

            {/* The one card that grows (absolute, driven by the effect) */}
            <div ref={cardRef} className="absolute left-0 top-0 opacity-0 will-change-transform">
              {studioCard}
            </div>

            {/* Short pitch + download — resolves in on the right, centred on the tablet */}
            <div
              ref={descRef}
              className="absolute inset-y-0 right-4 flex w-[24%] min-w-[280px] flex-col justify-center opacity-0 will-change-[transform,opacity] sm:right-6 lg:right-8"
            >
              {descriptionPanel}
            </div>

            {/* Standards strip — recedes */}
            <div ref={stdRef} className="absolute bottom-0 left-4 right-4 will-change-[opacity] sm:left-6 sm:right-6 lg:left-8 lg:right-8">
              <div className="space-y-4 border-t border-white/10 pt-6">
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {STANDARDS.map((s) => (
                    <li key={s} className="font-mono-plex text-sm tracking-[0.18em] text-hexa-ink2 sm:text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-base text-hexa-ink3 sm:text-sm">
                  Developed together — no third-party controllers, no hidden layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- Mobile / reduced-motion: static stacked -------------------------------
  return (
    <section id="platform" className="bg-hexa-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          <Reveal>{heading}</Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12">
          {SIBLINGS.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 80}>
              <article className="space-y-5">
                <div className="overflow-hidden rounded-lg bg-hexa-surface" style={{ aspectRatio: `${layer.width} / ${layer.height}` }}>
                  <img src={layer.image} alt={layer.name} width={layer.width} height={layer.height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-3xl leading-tight text-white sm:text-lg sm:leading-normal">{layer.name}</h3>
                <p className="max-w-[36ch] font-sans text-lg leading-relaxed text-hexa-ink2 sm:text-sm">{layer.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* HexaStudio — the tablet, its pitch and the download compose ONE panel that
            arrives together on scroll and holds the frame on its own (a full-height
            beat), instead of a lone tablet floating on black. */}
        <div className="flex min-h-[100svh] flex-col justify-center gap-8 py-12">
          <Reveal variant="scale-media" className="w-full">
            <div className="overflow-hidden rounded-lg" style={{ aspectRatio: '2888 / 1755' }}>
              {studioCard}
            </div>
          </Reveal>
          <Reveal delay={120}>{descriptionPanel}</Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 space-y-4 border-t border-white/10 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {STANDARDS.map((s) => (
                <li key={s} className="font-mono-plex text-sm tracking-[0.18em] text-hexa-ink2 sm:text-xs">
                  {s}
                </li>
              ))}
            </ul>
            <p className="font-sans text-base text-hexa-ink3 sm:text-sm">
              Developed together — no third-party controllers, no hidden layers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
