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

## Executive refinement pass

- **R30** — Building on `R13`, `R15`, and `R27`, the shared `AccentRail` primitive MUST render a visually lighter and more elegant vertical accent treatment with reduced glow intensity and smaller accent markers.
- **R31** — Building on `R3`, the controller image block in `HexaCoreMotionArchitecture.tsx` MUST remain card-free and use slightly softened rounded corners.
- **R32** — Building on `R5` and `R14`, the servo blueprint visual in `BuiltAsOneSystem.tsx` MUST remove the framed card/backplate and MUST remove the `Motion Hardware Detail` badge while keeping the image itself visible.
- **R33** — UI revision version `0.0.8` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.8`.
- **R34** — Requirement `R33` supersedes `R28` for the current active build while preserving `R28` as the previous visual revision baseline.

## White and cyan executive cleanup

- **R35** — Building on `R27` and `R30`, visible emphasized text MUST NOT use solid purple. Emphasized text MUST render as white or as a gradient treatment.
- **R36** — Button-like CTAs, navigation actions, tabs, and contact actions MUST use transparent white styling with white borders and subtle white hover states instead of filled or solid-purple button styling.
- **R37** — `HexaCoreMotionArchitecture.tsx` MUST remove the `See Platform Stack` action and reduce the gap above the lower technical-spec row so the lower content moves upward.
- **R38** — Photo feature blocks in the connected-platform and built-as-one-system sections MUST use a consistent lightweight rounded image treatment without heavy card backplates.
- **R39** — Vertical accent lines with top dots MUST render only in white or cyan. Purple and green legacy accent names MAY remain as API inputs but MUST resolve to white/cyan visual output.
- **R40** — UI revision version `0.0.9` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.9`.
- **R41** — Requirement `R40` supersedes `R33` for the current active build while preserving `R33` as the previous visual revision baseline.

## Gradient correction

- **R42** — Where executive emphasis uses gradient text, the gradient MUST use purple-to-cyan rather than white-to-cyan.
- **R43** — UI revision version `0.0.10` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.10`.
- **R44** — Requirement `R43` supersedes `R40` for the current active build while preserving `R40` as the previous visual revision baseline.

## Gradient consistency follow-up

- **R45** — Prominent gradient emphasis surfaces introduced in this executive cleanup, including highlight markers such as the active roadmap node, MUST use purple-to-cyan rather than white-to-cyan.
- **R46** — UI revision version `0.0.11` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.11`.
- **R47** — Requirement `R46` supersedes `R43` for the current active build while preserving `R43` as the previous visual revision baseline.

## HexaCore label cleanup

- **R48** — In `HexaCoreMotionArchitecture.tsx`, the `HexaCore PRO` photo label MUST not sit on a floating card/backplate, and the `PRO` text in that label MUST render in plain white.
- **R49** — UI revision version `0.0.12` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.12`.
- **R50** — Requirement `R49` supersedes `R46` for the current active build while preserving `R46` as the previous visual revision baseline.

## Operator workflow row layout

- **R51** — In `OperatorSoftwareWorkflow.tsx`, the four `Operator Workflow` rail cards MUST render in a single row on wide desktop layouts while preserving responsive stacking on smaller screens.
- **R52** — UI revision version `0.0.13` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.13`.
- **R53** — Requirement `R52` supersedes `R49` for the current active build while preserving `R49` as the previous visual revision baseline.

## Software workflow label cleanup

- **R54** — The four software workflow cards in `OperatorSoftwareWorkflow.tsx` MUST not display the repeated `Operator Workflow` eyebrow label.
- **R55** — UI revision version `0.0.14` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.14`.
- **R56** — Requirement `R55` supersedes `R52` for the current active build while preserving `R52` as the previous visual revision baseline.

## HexaCore spec card presentation

- **R57** — The four lower technical-spec items in `HexaCoreMotionArchitecture.tsx` MUST use the same refined `AccentRail`-style presentation language as the software workflow cards.
- **R58** — UI revision version `0.0.15` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.15`.
- **R59** — Requirement `R58` supersedes `R55` for the current active build while preserving `R55` as the previous visual revision baseline.

## HexaCore title wording cleanup

- **R60** — The HexaCore spec title `Robot Control Runtime` MUST be shortened to `Robot Control`.
- **R61** — UI revision version `0.0.16` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.16`.
- **R62** — Requirement `R61` supersedes `R58` for the current active build while preserving `R58` as the previous visual revision baseline.

## Connected platform header emphasis

- **R63** — In `ConnectedPlatform.tsx`, the introductory paragraph about robot arm development fragmentation MUST render at large display scale so it visually aligns with the section heading.
- **R64** — UI revision version `0.0.17` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.17`.
- **R65** — Requirement `R64` supersedes `R61` for the current active build while preserving `R61` as the previous visual revision baseline.

## Connected platform accent visibility

- **R66** — The `Engineering Documentation` card (`Feature 04`) in `ConnectedPlatform.tsx` MUST preserve a clearly visible left accent stripe and dot.
- **R67** — UI revision version `0.0.18` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.18`.
- **R68** — Requirement `R67` supersedes `R64` for the current active build while preserving `R64` as the previous visual revision baseline.

## Connected platform header balance

- **R69** — In `ConnectedPlatform.tsx`, the right-side introductory paragraph MUST use normal body-scale typography rather than display-scale typography, and the section header MUST use a balanced two-column layout so the left and right blocks align organically.
- **R70** — UI revision version `0.0.19` MUST update both package metadata and startup console logging to `Hexakinetica v0.0.19`.
- **R71** — Requirement `R70` supersedes `R67` for the current active build while preserving `R67` as the previous visual revision baseline.
