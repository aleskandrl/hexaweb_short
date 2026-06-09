# Architecture

Hexakinetica marketing site — React 18 + TypeScript + Vite + TailwindCSS.

## Entry

- `src/index.tsx` — mounts `<App />`, logs the running version to the browser console (`Hexakinetica v0.0.19`).
- `src/App.tsx` — composes the landing-page sections.

## Shared visual primitives

- `src/components/AccentRail.tsx` — reusable text-first content primitive with a refined vertical accent line, smaller top accent dot, optional tag, optional footer, and configurable accent tone (`cyan`, `purple`, `green`, `white`). The current executive visual revision intentionally removes the previous optional icon slot; rail and dot rendering is limited to white and cyan even when legacy accent names are passed.
- `src/components/OperatorSoftwareWorkflow.tsx` — software workflow section with a text column, product screenshot, and a four-card `AccentRail` row that collapses responsively on smaller screens; the four cards intentionally omit repeated eyebrow labels.

## Sections (`src/components/`)

Single-page layout assembled from independent section components, e.g. `Navbar`, `Hero`, `ConnectedPlatform`, `BuiltAsOneSystem`, `HexakineticaPlatform`, `Footer`.

- `src/components/HexaCoreMotionArchitecture.tsx` — controller hero block plus a lower four-item spec row now presented with the same `AccentRail` visual language used in the workflow cards.

## Images (`src/assets/images/`)

Imported directly into components and bundled by Vite. Naming convention: kebab-case, no spaces.

| Image | Used in | Role |
|-------|---------|------|
| `hero/hexaarm-new.png` | `Hero.tsx` | Static hero visual — the HexaArm robotic arm. Single image, no carousel, no framed card. |
| `products/axis-5-reducer.png` | `ConnectedPlatform.tsx` | Visible-mechanics proof. Close-up of an axis-5 joint with the cover removed, exposing the reducer/gearbox. Rendered inside the **Visible Architecture** bento card. |
| `products/servo-gear-blueprint.png` | `BuiltAsOneSystem.tsx` | Motion-hardware detail shown without the previous framed card or floating label. |
| `products/hexacore-cabinet.png` | `HexaCoreMotionArchitecture.tsx` | Controller visual presented card-free with softened rounded corners and a plain white `HexaCore PRO` label without a floating card backplate. |

## Hero

`Hero.tsx` renders a two-column layout: copy + CTAs on the left, a single static `hexaarm-new.png` on the right, backed by a soft purple/cyan glow. The former bordered supporting paragraph beneath the main headline is currently commented out to keep the hero more minimal. No `useState`/`useEffect`, no auto-rotating carousel, no framed black card.

## ConnectedPlatform

`ConnectedPlatform.tsx` renders a grid of platform feature blocks using `AccentRail`. The `Feature` interface carries an optional `image?: string`; only the first feature (**Visible Architecture**) sets it, so the Axis 5 reducer photo appears there and other cards remain image-free. The section header now uses a balanced two-column layout with a body-scale right-side paragraph, while `Feature 04` uses a cyan accent so its left stripe remains clearly visible.

## AdoptionGap

`AdoptionGap.tsx` currently keeps the introductory copy and conclusion visible, while the former chart-and-metrics comparison block is commented out per executive presentation feedback.

## Visual language notes

- Text-first sections now prefer `AccentRail` over solid rectangular cards, and the shared rail is intentionally thinner and less glowy than in the previous revision.
- The `0.0.11` executive refinement removes solid purple text, keeps emphasized text and prominent gradient highlight surfaces in purple/cyan, and standardizes button-like CTAs as transparent white controls.
- Photo feature blocks now share a lightweight rounded image treatment without heavy card backplates.
- The `0.0.7` executive revision is iconless: decorative content icons, CTA arrows, FAQ chevrons, social icons, and navigation icons are removed in favor of typography, accent rails, simple bullets, text labels, and text symbols.
- Media-heavy elements such as screenshots, technical visuals, and chart panels may still use light framing to preserve hierarchy, but executive feedback may remove that framing when it feels visually heavy.
- Sections refactored to this pattern include `AdoptionGap.tsx`, `ConnectedPlatform.tsx`, `BuiltAsOneSystem.tsx`, `OperatorSoftwareWorkflow.tsx`, `BuildAroundThePlatform.tsx`, `FrequentlyAsked.tsx`, `InitializeProtocol.tsx`, `SelectEnvironment.tsx`, and the text content area of `HexaCoreMotionArchitecture.tsx`.
