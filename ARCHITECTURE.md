# Architecture

Hexakinetica marketing site — React 18 + TypeScript + Vite + TailwindCSS.
Current revision: **"Investor redesign"** — seven media-first sections, ~300 words of visible copy. The version number lives in `package.json` only.

## Entry

- `src/index.tsx` — mounts `<App />`, logs the running version to the browser console (`__APP_VERSION__` is injected from `package.json` via `define` in `vite.config.ts`).
- `src/App.tsx` — composes the seven landing-page sections in order.

## Page structure (`src/App.tsx`)

| # | Section | Component | Media |
|---|---------|-----------|-------|
| 1 | Hero | `Hero.tsx` | Full-bleed system photo (`/media/system-hero-*`); headline `WE BUILD ROBOTS. / DIFFERENTLY` in the photo's upper black zone; page-load CSS choreography; real-spec strip pinned to the bottom |
| 2 | Exploded view | `ExplodedView.tsx` | Scroll-scrubbed disassembly: 420vh pinned section, wheel drives `video.currentTime` on the all-keyframe `exploded-scrub.mp4`, 4:5 crop, accent progress hairline; poster fallback under reduced motion |
| 3 | Market | `Market.tsx` | Typographic IFR stats, no imagery |
| 4 | Platform | `Platform.tsx` | Three tiles (arm / cabinet / HMI) + standards strip |
| 5 | Lineup | `Lineup.tsx` | Typographic spec table Mini / Medium / Heavy |
| 6 | Roadmap | `Roadmap.tsx` | Hairline timeline 2025 / 2026 [NOW] / 2027 |
| 7 | Contact | `Contact.tsx` | Two ask rows (investors / engineers) over dimmed system photo |

`Navbar.tsx` is transparent over the hero and gains background + hairline on scroll. `Footer.tsx` is a single mono line.

## Shared primitives

- `Button.tsx` — `primary` (solid white, dark text; one per screen) and `secondary` (hairline ghost).
- `Reveal.tsx` — scroll reveal with variants `rise` (default), `blur-rise` (headings), `scale-media` (photo/video), `fade`; out-expo easing, honors `prefers-reduced-motion` via `useInView`.

## Design tokens

- Colors (`tailwind.config.js`): `hexa.bg #000000`, `surface #141416`, `ink #f4f4f5`, `ink2 #9c9da3`, `ink3 #6e6f76`, `accent = var(--accent)` (default `#ff4d00`, set in `src/index.css`).
- Fonts: `font-display` Michroma (headings only — owner decision), `font-sans` Inter (body), `font-mono-plex` IBM Plex Mono (figures, eyebrows, captions). Self-hosted woff2 latin subsets in `public/fonts/`, preloaded in `index.html`.
- Motion: `ease-out-expo cubic-bezier(0.16,1,0.3,1)`, `ease-swift`; durations 200 / 500 / 800 / 1100 ms. Hero choreography keyframes live in `src/index.css`.
- Prohibited by design direction: gradient text, colored glows, blur orbs, textures, hover scale on text/buttons, blueprint frames.

## Media pipeline

Masters live in `new_pictures/` (git-ignored). `npm run media` (`scripts/build-media.mjs`, sharp + ffmpeg-static) rebuilds everything the site serves from `public/media/`:

- `system-hero-{2560,1600}.{avif,webp}` + `system-hero-1600.jpg` — hero sources, preloaded in `index.html`.
- `exploded-scrub.mp4` + `exploded-poster.webp` — 1080×1920 all-keyframe (`-g 1`) encode (~4.5 MB) for the scroll-scrub section (instant `currentTime` seeks) and its poster.
- `platform-{arm,cabinet,hmi}.webp` — Platform tiles (exploded still, cabinet crop of the system photo, HMI screenshot).
- `public/og-cover.jpg` — 1200×630 social card, a manual crop of the system photo (the filename doubles as a cache-buster for messenger link previews).
