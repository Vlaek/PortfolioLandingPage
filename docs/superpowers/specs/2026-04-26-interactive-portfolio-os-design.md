# Interactive Portfolio OS Redesign

## Goal

Redesign the existing React/Vite portfolio into a modern, product-like portfolio experience. The site should feel like an interactive developer interface rather than a static landing page, while preserving the current project content, skills, experience history, and deployment setup.

## Direction

Use the approved **Interactive Portfolio OS** direction:

- Dark, polished interface with warm accent highlights.
- First screen focused on Vladislav Eichwald as a frontend/fullstack developer.
- Projects treated as the main product surface, with filters and fast actions.
- Skills shown as a grouped matrix instead of isolated generic tiles.
- Experience shown as a compact, readable feed with the current role emphasized.

## Architecture

Keep the project on the current stack:

- React 18
- Vite
- TypeScript
- SCSS Modules
- Existing `react-icons`, `react-modal`, and `react-scroll` dependencies where useful

No framework migration is needed. The redesign should be implemented by reshaping components and styles inside the existing app. This keeps the work focused, avoids dependency churn, and preserves the GitHub Pages deployment path.

## Component Design

The app should move from generic sections to portfolio-specific sections:

- `Nav`: sticky compact navigation with active links and a stronger brand mark.
- `Header` or `Hero`: first-viewport identity section with role, pitch, calls to action, stack chips, and small credibility stats.
- `ProjectsSection`: featured project grid with category or stack filters, project cards, and direct links.
- `Project`: richer card with screenshot, title, subtitle, tech chips, live/GitHub actions, and modal trigger.
- `ProjectModal`: modern detail view with summary, technology list, media gallery, live/GitHub buttons, and responsive layout.
- `SkillsSection`: grouped skill matrix for frontend, backend, tools, languages, and libraries.
- `ExperienceSection`: modern feed or timeline that puts the current fullstack role first and keeps earlier education/work items scannable.
- `Footer`: contact-focused finish with GitHub, website/contact links, and a concise closing line.

The existing generic `Section` component can be simplified, replaced, or kept as a layout primitive if it still helps.

## Data Design

Keep `src/data/data.ts` as the source of truth, but improve its shape where needed:

- Add derived or explicit project categories such as `Frontend`, `Backend`, `Fullstack`, `3D`, or `UI`.
- Normalize repeated technology strings into chip-friendly values where practical.
- Avoid changing project URLs or image filenames unless a broken value is found.
- Preserve all existing projects, skills, and experience entries unless a field is clearly placeholder text.

If placeholder project descriptions such as `test project` remain, replace them with short accurate copy based on the existing title, subtitle, and repository context already present in the data.

## Visual System

Use a restrained dark interface with multiple accent colors, avoiding a one-note palette:

- Base: near-black and deep charcoal.
- Primary accent: green/teal for interactive states.
- Secondary accent: amber for highlights.
- Supporting neutrals: slate text, subtle borders, soft surfaces.

Cards should use modest 8px radii, stable dimensions, and responsive grids. Avoid nested card layouts. Use section bands and constrained inner content instead of floating page-wide cards.

Typography should be modern and readable. Font sizes must use responsive constraints without viewport-width scaling. Text must not overlap or overflow buttons/cards on mobile.

## Interaction

Expected interactions:

- Smooth navigation to sections.
- Project filtering by category or technology group.
- Project cards open a detail modal.
- Modal can be closed by close button, overlay, and Escape through `react-modal`.
- External links open in a new tab with safe `rel` attributes.
- Animations are subtle and should respect `prefers-reduced-motion`.

The site should remain fully usable without relying on animation.

## Responsiveness

Design for:

- Mobile: one-column hero, compact navigation, project filters that wrap cleanly, cards with readable text and stable media.
- Tablet: two-column project grid where space allows.
- Desktop: strong hero composition, richer grid, and concise timeline/feed.

All fixed-format elements such as cards, project images, icon buttons, and filter controls need stable sizing so hover states or dynamic content do not shift layout.

## Accessibility

The redesign should improve accessibility:

- Semantic section landmarks and clear headings.
- Buttons for actions that open modals or change filters.
- Links for navigation to external pages.
- Meaningful image alt text.
- Visible focus states.
- Keyboard-accessible modal and filters.
- Sufficient contrast for text, buttons, borders, and chips.

## Testing And Verification

Run these checks after implementation:

- `yarn build`
- `yarn lint` if existing lint configuration can run cleanly
- Browser verification through the local Vite dev server
- Desktop and mobile screenshots in the in-app browser
- Quick interaction checks for navigation, project filters, modal open/close, and external action links

If lint fails because of pre-existing config or dependency issues unrelated to the redesign, document the failure and still run build/browser verification.

## Out Of Scope

This redesign will not:

- Migrate to Next.js or another framework.
- Add backend services.
- Add analytics.
- Replace all project screenshots with newly generated media.
- Change deployment away from GitHub Pages.
