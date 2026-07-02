# Requirements

## Document status

- This repository did not contain a dedicated requirements document before this change.
- This file establishes traceable UI requirements for current work without removing any existing project behavior.

## Cross-reference sources

- `ARCHITECTURE.md`
- `src/App.tsx`
- `src/components/Hero.tsx`
- `src/components/ExplodedView.tsx`
- `src/components/Market.tsx`
- `src/components/Platform.tsx`
- `src/components/Lineup.tsx`
- `src/components/Roadmap.tsx`
- `src/components/Contact.tsx`
- `src/components/Navbar.tsx`
- `src/components/Button.tsx`
- `src/components/Footer.tsx`

## Requirements

### REQ-UI-001 Mobile typography readability

- **Title:** Mobile typography must be larger without changing desktop typography.
- **Scope:** Landing-page text rendered by the shared navigation, footer, buttons, and content sections.
- **Requirement:** On screens below Tailwind `sm` (`<640px`), visible text shall use a larger base type scale than the previous revision.
- **Constraint:** Existing typography at `sm`, `md`, and `lg` breakpoints shall remain unchanged.
- **Rationale:** The mobile layout needs better readability while preserving the approved desktop presentation.
- **Verification:** Compare the mobile render before and after the change and confirm that only the mobile typography scale increases, while tablet and desktop breakpoints keep the prior classes.