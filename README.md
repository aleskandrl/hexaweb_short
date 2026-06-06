# Hexakinetica Website

Single-page React/Vite landing page for Hexakinetica — an open-architecture industrial robotics initiative focused on affordable, hackable, community-driven automation.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react icons
- Recharts for the market chart

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`npm run build` runs TypeScript project validation first and then builds the static site with Vite.

## Docker

The Dockerfile intentionally runs `npx vite build` directly instead of `npm run build`. This keeps container builds focused on producing the static Vite output and avoids blocking deployment on strict TypeScript diagnostics.

```bash
docker build -t hexakinetica-website .
docker run --rm -p 3000:3000 hexakinetica-website
```

## Project structure

```text
src/
  App.tsx              Page composition
  index.tsx            React entrypoint
  index.css            Tailwind entry and base styles
  components/          Landing-page sections
  assets/images/       Local visual assets
```

The site is intentionally simple: no router, no global state manager, and no backend API dependency.
