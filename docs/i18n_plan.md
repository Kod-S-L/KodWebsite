# Multilingual support plan

## Status

**Not implemented.** The site is currently English-only. Adding multilingual
support touches every page and the routing model, so it is intentionally
deferred to a dedicated change.

## Target languages

In rough order of priority:

1. Catalan — `/ca/`
2. Spanish — `/es/`
3. English — `/en/` (and the default at `/`, with a redirect)

## Goals

- Clean, indexable URLs per language (`/ca/about`, `/es/about`, `/en/about`).
- One canonical source of truth for all visible copy.
- A small, predictable language switcher in the header.
- `<html lang="…">` set per locale.
- `hreflang` tags so search engines know about the alternates.
- Zero regressions on the existing English routes during migration.

## Recommended approach (Astro idiomatic)

Astro now supports i18n routing natively, which avoids pulling in a
heavy library. The recommended migration:

### 1. Configure i18n in `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://kodwebsite.vercel.app',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: { prefixDefaultLocale: false }, // keep `/` for English
  },
});
```

This keeps `/` working for English while serving `/es/...` and `/ca/...`
for the other languages.

### 2. Move pages into locale folders

Restructure `src/pages/` so language-aware routes live under their locale:

```
src/pages/
├── index.astro            # English root (alias of /en)
├── about.astro            # English (alias of /en/about)
├── projects.astro
├── contact.astro
├── es/
│   ├── index.astro
│   ├── about.astro
│   ├── projects.astro
│   └── contact.astro
└── ca/
    ├── index.astro
    ├── about.astro
    ├── projects.astro
    └── contact.astro
```

Each localized page imports the same components but passes its own copy.

### 3. Centralize copy in typed dictionaries

```
src/i18n/
├── en.ts
├── es.ts
├── ca.ts
└── index.ts   # exports getDictionary(locale) and a `Locale` union type
```

Pages read strings from the dictionary instead of hard-coding them.

### 4. Add a language switcher to the navbar

Reuse the existing `Navbar.astro`. Add a small dropdown or a row of
language codes (`CA · ES · EN`) wired to the equivalent path in each
locale, computed from `Astro.url.pathname`.

### 5. SEO updates in `BaseLayout.astro`

- Set `<html lang={locale}>`.
- Emit `<link rel="alternate" hreflang="…">` for each available locale,
  plus `hreflang="x-default"` pointing at the English version.
- Update `<title>` and `<meta name="description">` per locale.

## What NOT to do

- Do not introduce a heavy i18n library when typed dictionaries are enough.
- Do not half-translate pages (mixed languages on the same page).
- Do not localize URLs partially (e.g. `/about` in English but
  `/sobre-nosotros` in Spanish) until naming has been agreed across the
  team and locked down — inconsistency hurts SEO.

## Estimated scope

- `astro.config.mjs` i18n setup — 30 min.
- Page restructure + dictionary scaffolding — half a day.
- Translation pass for each locale — depends on copy volume.
- Language switcher + `hreflang` tags — 1–2 hours.

Total: roughly one focused day of work for a basic three-language launch.

## Until then

- Keep all visible copy in English.
- Keep this document up to date if the plan evolves.
