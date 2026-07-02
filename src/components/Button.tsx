import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  // The single filled CTA of a screen: white on dark reads as the most confident control.
  primary:
    'bg-hexa-ink text-hexa-bg hover:bg-white active:scale-[0.98]',
  secondary:
    'bg-transparent text-hexa-ink border border-white/15 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  href,
  onClick,
  children,
  className = '',
}) => {
  const classes = `inline-flex items-center justify-center rounded-md px-7 py-3.5 font-mono-plex text-sm font-bold uppercase tracking-[0.18em] transition-[background-color,border-color,transform] duration-200 ease-out-expo sm:text-xs ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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
