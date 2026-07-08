import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  /** When set on an href button, downloads the file instead of opening a new
   *  tab. `true` keeps the server filename; a string forces a download name. */
  download?: boolean | string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  // The single filled CTA of a screen. A soft, muted light-grey (owner pick) —
  // calmer and more premium on pure black than a glaring white.
  primary:
    'bg-[#c6c8d1] text-hexa-bg hover:bg-[#d6d7dd] active:scale-[0.98]',
  secondary:
    'bg-transparent text-hexa-ink border border-white/15 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  href,
  download,
  onClick,
  children,
  className = '',
}) => {
  const classes = `inline-flex items-center justify-center rounded-md px-7 py-3.5 font-mono-plex text-sm font-bold uppercase tracking-[0.18em] transition-[background-color,border-color,transform] duration-200 ease-out-expo sm:text-xs ${variantClasses[variant]} ${className}`;

  if (href) {
    // A download link stays on-page (no new tab); a normal link opens a tab.
    const linkProps = download
      ? { download }
      : ({ target: '_blank', rel: 'noopener noreferrer' } as const);
    return (
      <a href={href} {...linkProps} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
