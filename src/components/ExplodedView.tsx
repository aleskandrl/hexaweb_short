import React, { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';

const SIDE_LABELS = ['6 AXES', 'INDUSTRIAL REDUCERS', 'REFERENCE CAD & URDF'];

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-scrubbed disassembly: the section pins for ~1.5 extra viewports and
 * the wheel drives video.currentTime. The scrub source is encoded with a
 * keyframe on every frame (see scripts/build-media.mjs), so seeks are instant.
 * Reduced-motion users get the static poster instead.
 */
export const ExplodedView: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const outer = outerRef.current;
    const video = videoRef.current;
    if (!outer || !video) return;

    let target = 0;
    let current = -1;
    let raf = 0;

    const measure = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      target = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
    };

    const tick = () => {
      // Ease toward the scroll position so wheel steps read as motion, not jumps.
      current = current < 0 ? target : current + (target - current) * 0.18;
      if (video.duration && Math.abs(video.currentTime - current * video.duration) > 0.02) {
        video.currentTime = current * video.duration;
      }
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${current})`;
      }
      raf = requestAnimationFrame(tick);
    };

    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [reduced]);

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
  ) : (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
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
    <div ref={outerRef} id="exploded" className="relative bg-hexa-bg" style={{ height: reduced ? 'auto' : '420vh' }}>
      <div className={`${reduced ? '' : 'sticky top-0'} flex min-h-[100svh] items-center py-16`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl space-y-7">
              <Reveal variant="blur-rise">
                <h2 className="font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
                  Designed to be
                  <br />
                  <span className="text-white/40">taken apart</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-sans text-base leading-relaxed text-hexa-ink2 sm:text-lg">
                  CAD, hardware, motion control, HMI, simulation workflow, and
                  validation tools — all our own design. Reference CAD and URDF
                  are public.
                
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6">
                  {SIDE_LABELS.map((label) => (
                    <li key={label} className="font-mono-plex text-xs tracking-[0.18em] text-hexa-ink2">
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
                  {!reduced && (
                    <div className="mt-5 h-px w-full overflow-hidden bg-white/10">
                      <div
                        ref={progressRef}
                        className="h-full w-full origin-left bg-hexa-accent"
                        style={{ transform: 'scaleX(0)' }}
                      ></div>
                    </div>
                  )}
                  <p className="mt-4 text-center font-mono-plex text-[10px] uppercase tracking-[0.24em] text-hexa-ink3">
                    HexaArm — exploded view · scroll to disassemble
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
