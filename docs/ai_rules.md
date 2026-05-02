# AI Rules

## Goal

These rules define how AI assistants should work inside this repository.

The assistant must help generate clean, consistent and maintainable code for the KOD website.

## General Rules

- Always inspect the existing code before creating or editing files.
- Respect the current architecture and naming conventions.
- Do not create unnecessary files, folders or dependencies.
- Keep changes minimal and directly related to the requested task.
- Prefer readable code over clever code.
- Avoid duplicated logic and duplicated styles.
- Explain important decisions briefly when generating code.
- Never assume that a feature should exist unless it is requested or already implied by the project.

## Project Structure Rules

Use the current structure:

- `src/components/` for reusable Astro components.
- `src/layouts/` for page layouts.
- `src/pages/` for Astro file-based routes.
- `src/styles/` for global CSS, variables and shared styling.
- `public/` for static assets.
- `docs/` for documentation.
- `wasm/` only for optional Rust/WebAssembly features.

Do not move files without a clear reason.

## Astro Rules

- Prefer `.astro` components for presentational UI.
- Use TypeScript when logic or typed data structures are needed.
- Keep components small and reusable.
- Avoid putting too much logic directly inside pages.
- Use layouts for repeated page structure.
- Use semantic HTML whenever possible.

## Styling Rules

- Use global design tokens when possible.
- Keep visual consistency across pages.
- Use responsive design from the beginning.
- Avoid inline styles unless there is a strong reason.
- Do not mix several styling approaches unnecessarily.

## Quality Rules

Before considering a task finished:

- The code should be readable.
- The UI should work on desktop and mobile.
- The change should not break existing pages.
- The implementation should be easy for another teammate to understand.