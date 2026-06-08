# Requirements

## Hero (first screen)

- **R1** — The hero visual MUST be a single static image of `HexaArm_new` (`src/assets/images/hero/hexaarm-new.png`).
- **R2** — The hero MUST NOT use an auto-rotating carousel / switching photos.
- **R3** — The hero visual MUST NOT be wrapped in a framed/bordered card. A soft glow backdrop is allowed.
- **R21** — The bordered supporting paragraph block beneath the main hero headline MAY be removed or commented out when the presentation should remain more minimal and headline-led.
- **R22** — UI revision version `0.0.5` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.5`.
- **R23** — Requirement `R22` supersedes `R19` for the current active build while preserving `R19` as the previous visual revision baseline.
- **R24** — The chart and metric-card comparison block inside `AdoptionGap.tsx` MAY be commented out entirely when executive presentation should avoid the dense infographic section.
- **R25** — UI revision version `0.0.6` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.6`.
- **R26** — Requirement `R25` supersedes `R22` for the current active build while preserving `R22` as the previous visual revision baseline.
- **R28** — UI revision version `0.0.7` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.7`.
- **R29** — Requirement `R28` supersedes `R25` for the current active build while preserving `R25` as the previous visual revision baseline.

## Visible mechanics proof

- **R4** — `Axis 5 reducer` (`src/assets/images/products/axis-5-reducer.png`) — close-up of an axis-5 joint with the cover removed, showing the reducer — MUST be used as the visual proof inside the **Visible Architecture** card in `ConnectedPlatform.tsx`.
- **R5** — `servo-gear-blueprint.png` in `BuiltAsOneSystem.tsx` MUST remain untouched.

## Versioning

- **R6** — Package version is `0.0.1`.
- **R7** — The running version MUST be printed to the browser console on startup (`Hexakinetica v0.0.1`).
- **R11** — Requirements `R6` and `R7` define the previous released baseline (`0.0.1`) and remain in this document for traceability.

## Adoption gap section

- **R8** — The `AdoptionGap.tsx` comparison block MUST keep the left chart visually dominant on large screens by slightly widening the chart column relative to the metric-card column.
- **R9** — The four right-side metric cards in `AdoptionGap.tsx` MUST use increased internal vertical spacing so the two-card rows visually align in overall height with the chart panel.
- **R10** — UI revision version `0.0.2` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.2`.
- **R12** — Requirement `R10` supersedes `R6` and `R7` for the current active build while preserving the older version requirements as historical traceability records.

## Visual language refresh

- **R13** — Text-first content blocks across the landing page SHOULD replace heavy rectangular card backplates with a vertical accent-line layout where this improves readability and visual consistency.
- **R14** — Media-heavy elements such as charts, product images, and UI screenshots MAY retain lightweight framed treatment so the page keeps visual structure and hierarchy.
- **R15** — The connected-platform, adoption-gap metrics, operator workflow highlights, access tiers, FAQ rows, and contact channel blocks MUST follow the new vertical-line content pattern introduced in this redesign.
- **R16** — UI revision version `0.0.3` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.3`.
- **R17** — Requirement `R16` supersedes `R10` for the current active build while preserving `R10` as the previous visual revision baseline.
- **R18** — In the `AccentRail` visual pattern, the top eyebrow labels and the icons MUST render in white for consistent executive presentation; accent colors may remain only in the vertical rail, accent dot, and subtle borders/backgrounds.
- **R19** — UI revision version `0.0.4` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.4`.
- **R20** — Requirement `R19` supersedes `R16` for the current active build while preserving `R16` as the previous visual revision baseline.
- **R27** — The current executive visual revision MUST remove decorative, CTA, navigation, FAQ, and social icon components from the landing page. Functional affordances MUST remain understandable through text labels, accent rails, simple bullets, or text symbols.
