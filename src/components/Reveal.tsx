import React from 'react';
import { useInView } from '../hooks/useInView';

type RevealVariant = 'rise' | 'blur-rise' | 'scale-media' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** 'rise' for content, 'blur-rise' for section headings, 'scale-media' for photo/video. */
  variant?: RevealVariant;
  className?: string;
  style?: React.CSSProperties;
}

const hiddenClasses: Record<RevealVariant, string> = {
  rise: 'opacity-0 translate-y-3',
  'blur-rise': 'opacity-0 translate-y-3 blur-[6px]',
  'scale-media': 'opacity-0 scale-[1.05]',
  fade: 'opacity-0',
};

const visibleClasses: Record<RevealVariant, string> = {
  rise: 'opacity-100 translate-y-0',
  'blur-rise': 'opacity-100 translate-y-0 blur-0',
  'scale-media': 'opacity-100 scale-100',
  fade: 'opacity-100',
};

/**
 * Reveals content once it scrolls into view. Respects prefers-reduced-motion
 * via useInView (renders visible immediately).
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  variant = 'rise',
  className = '',
  style,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[transform,opacity,filter] duration-800 ease-out-expo ${
        inView ? visibleClasses[variant] : hiddenClasses[variant]
      } ${className}`}
      style={{ ...style, transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};
