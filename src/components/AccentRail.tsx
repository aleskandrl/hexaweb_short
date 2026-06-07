import React from 'react';

type AccentTone = 'cyan' | 'purple' | 'green' | 'white';

interface AccentRailProps {
  accent?: AccentTone;
  icon?: React.ElementType;
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
  iconSize?: number;
}

const accentToneMap: Record<AccentTone, { line: string; dot: string; icon: string; eyebrow: string }> = {
  cyan: {
    line: 'bg-gradient-to-b from-hexa-cyan via-hexa-cyan/70 to-transparent',
    dot: 'bg-hexa-cyan shadow-[0_0_20px_rgba(152,243,255,0.45)]',
    icon: 'border-hexa-cyan/25 bg-hexa-cyan/10 text-white',
    eyebrow: 'text-white',
  },
  purple: {
    line: 'bg-gradient-to-b from-hexa-purple via-hexa-purple/70 to-transparent',
    dot: 'bg-hexa-purple shadow-[0_0_20px_rgba(140,82,255,0.45)]',
    icon: 'border-hexa-purple/25 bg-hexa-purple/10 text-white',
    eyebrow: 'text-white',
  },
  green: {
    line: 'bg-gradient-to-b from-green-500 via-green-500/70 to-transparent',
    dot: 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]',
    icon: 'border-green-500/20 bg-green-500/10 text-white',
    eyebrow: 'text-white',
  },
  white: {
    line: 'bg-gradient-to-b from-white via-white/55 to-transparent',
    dot: 'bg-white shadow-[0_0_18px_rgba(255,255,255,0.35)]',
    icon: 'border-white/10 bg-white/5 text-white',
    eyebrow: 'text-white',
  },
};

export const AccentRail: React.FC<AccentRailProps> = ({
  accent = 'white',
  icon: Icon,
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
  iconSize = 22,
}) => {
  const tone = accentToneMap[accent];

  return (
    <article className={`relative pl-7 ${className}`}>
      <div className={`pointer-events-none absolute left-0 top-1 bottom-1 w-px ${tone.line}`}></div>
      <div className={`pointer-events-none absolute -left-[4px] top-1 h-2.5 w-2.5 rounded-full ${tone.dot}`}></div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          {Icon && (
            <div className={`mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${tone.icon}`}>
              <Icon size={iconSize} />
            </div>
          )}

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