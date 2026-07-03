import React, { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';

const SIDE_LABELS = ['6 AXES', 'INDUSTRIAL', 'REFERENCE CAD & URDF'];

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isPhone = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

// Desktop scrub tuning. FRAME_COUNT must match the count built by
// scripts/build-media.mjs (FRAME_FPS * clip length).
const FRAME_COUNT = 300;
const FRAME_SIZE = 1080; // square canvas backing store, matches the built frames
const SMOOTH_TIME = 0.4; // SmoothDamp follow time in s; higher = smoother/laggier
const MAX_DT = 1 / 20; // clamp dt so a tab-away doesn't produce one huge easing step
const frameUrl = (i: number): string =>
  `/media/frames/frame-${String(i).padStart(3, '0')}.webp`;

/**
 * Scroll-scrubbed disassembly: the section pins for ~1.5 extra viewports and
 * the wheel scrubs an image sequence drawn to a <canvas>. Frames are pre-decoded
 * bitmaps, so drawImage is instant — unlike seeking video.currentTime every
 * frame, which the browser coalesces into visible stutter (see build-media.mjs
 * for the frame pipeline). On phones the pinned stack doesn't fit a small
 * viewport and thumb-scrubbing reads as a stuck page, so the section flows
 * normally and the video plays once when it enters view. Reduced-motion users
 * get the static poster.
 */
export const ExplodedView: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = prefersReducedMotion();
  const scrub = !reduced && !isPhone();

  useEffect(() => {
    if (!scrub) return;
    const outer = outerRef.current;
    const canvas = canvasRef.current;
    if (!outer || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = FRAME_SIZE;
    canvas.height = FRAME_SIZE;

    const frames: HTMLImageElement[] = new Array(FRAME_COUNT);
    const loaded: boolean[] = new Array(FRAME_COUNT).fill(false);
    let cancelled = false;

    let target = 0;
    let current = -1;
    let vel = 0; // SmoothDamp velocity (progress units / s)
    let lastDrawn = -1;
    let raf = 0;
    let lastT = performance.now();

    const nearestLoaded = (idx: number): HTMLImageElement | null => {
      if (loaded[idx]) return frames[idx];
      // Fall back to the closest frame already in hand so the canvas never gaps.
      for (let d = 1; d < FRAME_COUNT; d++) {
        if (idx - d >= 0 && loaded[idx - d]) return frames[idx - d];
        if (idx + d < FRAME_COUNT && loaded[idx + d]) return frames[idx + d];
      }
      return posterReady ? poster : null;
    };

    const draw = (idx: number) => {
      const img = nearestLoaded(idx);
      if (img) ctx.drawImage(img, 0, 0, FRAME_SIZE, FRAME_SIZE);
    };

    // Poster stand-in until the first frame lands, so the box is never blank.
    const poster = new Image();
    let posterReady = false;
    poster.onload = () => {
      posterReady = true;
      if (!cancelled && lastDrawn < 0) draw(0);
    };
    poster.src = '/media/exploded-poster.webp';

    const measure = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
    };

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastT) / 1000, MAX_DT);
      lastT = now;

      if (current < 0) {
        current = target; // seed on the first frame
      } else if (dt > 0) {
        // SmoothDamp (critically-damped filter): velocity-aware low-pass, so the
        // robot eases in AND out with no overshoot — smoother than a plain running
        // average, and frame-rate independent (identical on 60/120 Hz).
        const omega = 2 / SMOOTH_TIME;
        const x = omega * dt;
        const expo = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
        const change = current - target;
        const temp = (vel + omega * change) * dt;
        vel = (vel - omega * temp) * expo;
        let output = target + (change + temp) * expo;
        // Prevent overshoot past the scroll target.
        if ((target - current > 0) === (output > target)) {
          output = target;
          vel = 0;
        }
        current = output;
      }

      const idx = Math.round(current * (FRAME_COUNT - 1));
      if (idx !== lastDrawn) {
        draw(idx);
        lastDrawn = idx;
      }
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${current})`;
      }
      raf = requestAnimationFrame(tick);
    };

    const startPreload = () => {
      if (cancelled) return;
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = 'low';
        img.onload = () => {
          if (cancelled) return;
          loaded[i] = true;
          // Show real content the moment frame 0 lands, before rAF seeds current.
          if (i === 0 && lastDrawn <= 0) draw(0);
        };
        img.src = frameUrl(i);
        frames[i] = img;
      }
    };

    // Preload ~1 viewport early, but yield the network to the hero LCP first.
    const kickPreload = () => {
      const ric = (
        window as unknown as {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
        }
      ).requestIdleCallback;
      if (ric) ric(startPreload, { timeout: 2000 });
      else window.setTimeout(startPreload, 200);
    };
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io?.disconnect();
            if (document.readyState === 'complete') kickPreload();
            else window.addEventListener('load', kickPreload, { once: true });
          }
        },
        { root: null, rootMargin: '0px 0px 100% 0px', threshold: 0 }
      );
      io.observe(outer);
    } else {
      startPreload();
    }

    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', kickPreload);
      io?.disconnect();
      poster.onload = null;
      for (const img of frames) {
        if (img) {
          img.onload = null;
          img.src = '';
        }
      }
    };
  }, [scrub]);

  // Phone: play the disassembly once when the video scrolls into view.
  useEffect(() => {
    if (scrub || reduced) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [scrub, reduced]);

  const media = reduced ? (
    <img
      src="/media/exploded-poster.webp"
      alt="HexaArm robot arm separating into its individual components"
      width={1080}
      height={1350}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
    />
  ) : scrub ? (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="HexaArm robot arm separating into its individual components"
      className="block h-full w-full"
    />
  ) : (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="metadata"
      poster="/media/exploded-poster.webp"
      width={1080}
      height={1920}
      aria-label="HexaArm robot arm separating into its individual components"
      className="h-full w-full object-cover"
    >
      <source src="/media/exploded-scrub.mp4" type="video/mp4" />
    </video>
  );

  return (
    <div ref={outerRef} id="exploded" className="relative bg-hexa-bg" style={{ height: scrub ? '420vh' : 'auto' }}>
      <div className={`${scrub ? 'sticky top-0' : ''} flex min-h-[100svh] items-center py-16`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-6 md:gap-12 lg:grid-cols-2">
            <div className="max-w-xl space-y-5 md:space-y-7">
              <Reveal variant="blur-rise">
                <h2 className="font-display text-3xl leading-snug text-white sm:text-3xl lg:text-4xl">
                  Designed to be
                  <br />
                  <span className="text-white/40">taken apart</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-sans text-lg leading-relaxed text-hexa-ink2 sm:text-lg">
                  CAD, hardware, motion control, HMI, simulation workflow, and
                  validation tools — all our own design. Reference CAD and URDF
                  are public.
                
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6">
                  {SIDE_LABELS.map((label) => (
                    <li key={label} className="font-mono-plex text-sm tracking-[0.18em] text-hexa-ink2 sm:text-xs">
                      {label}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Reveal variant="scale-media" className="w-full max-w-[560px]">
                <div>
                  {/* Square crop trims the video's empty top/bottom so the robot reads larger. */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-hexa-bg">
                    {media}
                  </div>
                  {scrub && (
                    <div className="mt-5 h-px w-full overflow-hidden bg-white/10">
                      <div
                        ref={progressRef}
                        className="h-full w-full origin-left bg-hexa-accent"
                        style={{ transform: 'scaleX(0)' }}
                      ></div>
                    </div>
                  )}
                  <p className="mt-4 text-center font-mono-plex text-[11px] uppercase tracking-[0.24em] text-hexa-ink3 sm:text-[10px]">
                    {scrub ? 'HexaArm — exploded view · scroll to disassemble' : 'HexaArm — exploded view'}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
