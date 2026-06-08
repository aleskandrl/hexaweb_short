# Architecture

Hexakinetica marketing site — React 18 + TypeScript + Vite + TailwindCSS.

## Entry

- `src/index.tsx` — mounts `<App />`, logs the running version to the browser console (`Hexakinetica v0.0.7`).
- `src/App.tsx` — composes the landing-page sections.

## Shared visual primitives

- `src/components/AccentRail.tsx` — reusable text-first content primitive with a vertical accent line, top accent dot, optional tag, optional footer, and configurable accent tone (`cyan`, `purple`, `green`, `white`). The current executive visual revision intentionally removes the previous optional icon slot; accent colors are limited to the rail, accent dot, and subtle supporting borders/backgrounds.

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

`Hero.tsx` renders a two-column layout: copy + CTAs on the left, a single static `hexaarm-new.png` on the right, backed by a soft purple/cyan glow. The former bordered supporting paragraph beneath the main headline is currently commented out to keep the hero more minimal. No `useState`/`useEffect`, no auto-rotating carousel, no framed black card.

## ConnectedPlatform

`ConnectedPlatform.tsx` renders a grid of platform feature blocks using `AccentRail`. The `Feature` interface carries an optional `image?: string`; only the first feature (**Visible Architecture**) sets it, so the Axis 5 reducer photo appears there and other cards remain image-free.

## AdoptionGap

`AdoptionGap.tsx` currently keeps the introductory copy and conclusion visible, while the former chart-and-metrics comparison block is commented out per executive presentation feedback.

## Visual language notes

- Text-first sections now prefer `AccentRail` over solid rectangular cards.
- The `0.0.7` executive revision is iconless: decorative content icons, CTA arrows, FAQ chevrons, social icons, and navigation icons are removed in favor of typography, accent rails, simple bullets, text labels, and text symbols.
- Media-heavy elements such as screenshots, technical visuals, and chart panels may still use light framing to preserve hierarchy.
- Sections refactored to this pattern include `AdoptionGap.tsx`, `ConnectedPlatform.tsx`, `BuiltAsOneSystem.tsx`, `OperatorSoftwareWorkflow.tsx`, `BuildAroundThePlatform.tsx`, `FrequentlyAsked.tsx`, `InitializeProtocol.tsx`, `SelectEnvironment.tsx`, and the text content area of `HexaCoreMotionArchitecture.tsx`.
