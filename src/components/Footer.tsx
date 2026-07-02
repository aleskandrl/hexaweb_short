import React from 'react';
import { CONTACT_MAILTO, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from '../siteLinks';

const LINKS = [
  { name: 'GitHub', href: GITHUB_URL },
  { name: 'YouTube', href: YOUTUBE_URL },
  { name: 'LinkedIn', href: LINKEDIN_URL },
  { name: 'Email', href: CONTACT_MAILTO },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-hexa-bg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 font-mono-plex text-xs uppercase tracking-[0.2em] text-hexa-ink3 sm:flex-row sm:items-center sm:px-6 sm:text-[11px] lg:px-8">
        <span>© {new Date().getFullYear()} Hexakinetica</span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="-mx-2 -my-3 px-2 py-3 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
