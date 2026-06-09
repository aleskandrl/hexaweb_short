import React from 'react';

type AccentTone = 'cyan' | 'purple' | 'green' | 'white';

interface AccentRailProps {
  accent?: AccentTone;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tag?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

const accentToneMap: Record<AccentTone, { line: string; dot: string; eyebrow: string }> = {
  cyan: {
    line: 'bg-gradient-to-b from-hexa-cyan/85 via-hexa-cyan/40 to-transparent',
    dot: 'bg-hexa-cyan/90 shadow-[0_0_12px_rgba(152,243,255,0.28)]',
    eyebrow: 'text-white',
  },
  purple: {
    line: 'bg-gradient-to-b from-white/90 via-white/35 to-transparent',
    dot: 'bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.22)]',
    eyebrow: 'text-white',
  },
  green: {
    line: 'bg-gradient-to-b from-hexa-cyan/80 via-hexa-cyan/35 to-transparent',
    dot: 'bg-hexa-cyan/90 shadow-[0_0_12px_rgba(152,243,255,0.24)]',
    eyebrow: 'text-white',
  },
  white: {
    line: 'bg-gradient-to-b from-white/90 via-white/35 to-transparent',
    dot: 'bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.22)]',
    eyebrow: 'text-white',
  },
};

export const AccentRail: React.FC<AccentRailProps> = ({
  accent = 'white',
  eyebrow,
  title,
  description,
  tag,
  children,
  footer,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  contentClassName = '',
}) => {
  const tone = accentToneMap[accent];

  return (
    <article className={`relative pl-6 ${className}`}>
      <div className={`pointer-events-none absolute left-0 top-1.5 bottom-1.5 w-[0.5px] ${tone.line}`}></div>
      <div className={`pointer-events-none absolute -left-[3px] top-1.5 h-2 w-2 rounded-full ${tone.dot}`}></div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start">
          <div className={`min-w-0 ${contentClassName}`}>
            {eyebrow && (
              <p className={`mb-3 text-[11px] font-mono-plex font-bold uppercase tracking-[0.24em] ${tone.eyebrow}`}>
                {eyebrow}
              </p>
            )}

            <h4 className={`font-display text-2xl text-white ${titleClassName}`}>{title}</h4>

            {description && (
              <div className={`mt-4 text-gray-400 font-mono-plex leading-relaxed ${descriptionClassName}`}>
                {description}
              </div>
            )}

            {children && <div className="mt-6">{children}</div>}
            {footer && <div className="mt-6 border-t border-white/10 pt-4">{footer}</div>}
          </div>
        </div>

        {tag && <div className="shrink-0">{tag}</div>}
      </div>
    </article>
  );
};