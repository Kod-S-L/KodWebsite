# Code Style

## General

- Use clear and descriptive names.
- Keep files focused on one responsibility.
- Avoid large components.
- Avoid duplicated code.
- Prefer simple solutions.
- Do not over-engineer features.
- Respect the existing style of the project.

## Naming

- Components: PascalCase  
  Example: Navbar.astro, ProjectCard.astro

- Variables and functions: camelCase  
  Example: projectList, formatDate

- Constants: UPPER_SNAKE_CASE only for true constants.

- CSS classes should be readable and consistent.

## Astro Components

Recommended structure:

---
// imports, props and logic
---

<!-- markup -->

Rules:

- Keep frontmatter clean.
- Do not put unnecessary logic in templates.
- Extract repeated UI into components.
- Use props for reusable components.
- Prefer .astro components for static UI.
- Avoid adding client-side JavaScript unless it is really needed.

## TypeScript

- Use explicit types when they improve clarity.
- Avoid any unless strictly necessary.
- Keep data structures predictable.
- Prefer typed arrays or objects for repeated content.
- Keep logic readable and easy to debug.

## CSS

- Prefer global variables/design tokens for repeated colors, spacing and typography.
- Keep responsive behavior clear.
- Avoid random one-off values when a reusable value makes sense.
- Do not duplicate large CSS blocks.
- Avoid inline styles unless there is a strong reason.
- Keep visual style consistent across pages.

## Accessibility

- Use semantic HTML.
- Buttons should be buttons, links should be links.
- Images should have meaningful alt text unless decorative.
- Keep contrast readable.
- Ensure navigation works on mobile.
- Do not remove keyboard accessibility.

## Git

- One task per branch when possible.
- Keep commits small and descriptive.
- Do not mix unrelated changes.
- Do not include generated or unnecessary files in commits.