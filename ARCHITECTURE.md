# Architecture

Hexakinetica marketing site — React 18 + TypeScript + Vite + TailwindCSS.

## Entry

- `src/index.tsx` — mounts `<App />`, logs the running version to the browser console (`Hexakinetica v0.0.1`).
- `src/App.tsx` — composes the landing-page sections.

## Sections (`src/components/`)

Single-page layout assembled from independent section components, e.g. `Navbar`, `Hero`, `ConnectedPlatform`, `BuiltAsOneSystem`, `HexakineticaPlatform`, `Footer`.

## Images (`src/assets/images/`)

Imported directly into components and bundled by Vite. Naming convention: kebab-case, no spaces.

| Image | Used in | Role |
|-------|---------|------|
| `hero/hexaarm-new.png` | `Hero.tsx` | Static hero visual — the HexaArm robotic arm. Single image, no carousel, no framed card. |
| `products/axis-5-reducer.png` | `ConnectedPlatform.tsx` | Visible-mechanics proof. Close-up of an axis-5 joint with the cover removed, exposing the reducer/gearbox. Rendered inside the **Visible Architecture** bento card. |
| `products/servo-gear-blueprint.png` | `BuiltAsOneSystem.tsx` | Motion-hardware detail (unchanged). |

## Hero

`Hero.tsx` renders a two-column layout: copy + CTAs on the left, a single static `hexaarm-new.png` on the right, backed by a soft purple/cyan glow. No `useState`/`useEffect`, no auto-rotating carousel, no framed black card.

## ConnectedPlatform

`ConnectedPlatform.tsx` renders a bento grid of `Feature` cards. The `Feature` interface carries an optional `image?: string`; only the first feature (**Visible Architecture**) sets it, so the Axis 5 reducer photo appears there and other cards remain image-free.
