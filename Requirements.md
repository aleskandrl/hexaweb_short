# Requirements

## Hero (first screen)

- **R1** — The hero visual MUST be a single static image of `HexaArm_new` (`src/assets/images/hero/hexaarm-new.png`).
- **R2** — The hero MUST NOT use an auto-rotating carousel / switching photos.
- **R3** — The hero visual MUST NOT be wrapped in a framed/bordered card. A soft glow backdrop is allowed.

## Visible mechanics proof

- **R4** — `Axis 5 reducer` (`src/assets/images/products/axis-5-reducer.png`) — close-up of an axis-5 joint with the cover removed, showing the reducer — MUST be used as the visual proof inside the **Visible Architecture** card in `ConnectedPlatform.tsx`.
- **R5** — `servo-gear-blueprint.png` in `BuiltAsOneSystem.tsx` MUST remain untouched.

## Versioning

- **R6** — Package version is `0.0.1`.
- **R7** — The running version MUST be printed to the browser console on startup (`Hexakinetica v0.0.1`).
