# [KOD] Website

Official website for the **KOD** team — built with [Astro](https://astro.build) and TypeScript, deployed on Vercel.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18  
- **npm** ≥ 8

### Installation

```bash
git clone https://github.com/Kod-S-L/KodWebsite.git
cd KodWebsite
npm install
```

### Development

```bash
npm run dev
```

Starts the Astro dev server at **http://localhost:4321** with hot reload.

### Build

```bash
npm run build
```

Produces a static site in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally for final verification.

---

## ☁️ Vercel Deployment

The site is configured for **zero-config deployment on Vercel**:

1. Push to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Astro — accept the defaults and click **Deploy**.

For manual deploys or CLI usage, see [`docs/deployment.md`](docs/deployment.md).

---

## 📁 Folder Structure

```
KodWebsite/
├── public/              # Static assets served as-is (favicon, robots.txt, …)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Logo.astro
│   │   ├── Icon.astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── PageHeader.astro
│   │   ├── CallToAction.astro
│   │   ├── ServiceCard.astro
│   │   ├── ProjectCard.astro
│   │   └── ProjectsCarousel.astro
│   ├── data/            # Shared typed data
│   │   ├── nav-links.ts
│   │   ├── services.ts
│   │   └── projects.ts
│   ├── layouts/         # Page layouts (BaseLayout wraps every page)
│   ├── pages/           # File-based routing (index, about, projects, contact, 404)
│   └── styles/          # Global CSS variables and base styles
├── docs/                # Team documentation
│   ├── ai_rules.md      # Rules for AI assistants working in this repo
│   ├── code_style.md    # Code style conventions
│   ├── project_context.md
│   ├── setup.md         # Local development setup guide
│   ├── deployment.md    # Vercel & alternative deployment instructions
│   ├── workflow.md      # Git workflow, PR process, team conventions
│   └── i18n_plan.md     # Plan for adding /ca, /es, /en multilingual routes
├── wasm/                # Optional Rust/WebAssembly module (see below)
│   ├── src/lib.rs       # Rust source code
│   ├── Cargo.toml       # Rust package manifest
│   └── README.md        # WASM build & usage instructions
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment hints
└── package.json
```

---

## 🦀 Rust / WebAssembly (Optional)

> **The Rust/WASM module is entirely optional** and not required to build or
> run the website.

The `wasm/` folder contains a placeholder Rust crate that can be compiled to
WebAssembly. It is only needed if you want to implement performance-critical
features (e.g. client-side crypto, heavy data processing) that would be too
slow in pure JavaScript.

See [`wasm/README.md`](wasm/README.md) for full build and usage instructions.

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [`docs/setup.md`](docs/setup.md) | Local environment setup |
| [`docs/deployment.md`](docs/deployment.md) | Deployment on Vercel and alternatives |
| [`docs/workflow.md`](docs/workflow.md) | Git workflow, PR process, team conventions |
| [`docs/i18n_plan.md`](docs/i18n_plan.md) | Plan for adding multilingual routes (`/ca`, `/es`, `/en`) |

---

## 👥 Team

KOD is a team of three developers. Learn more on the [About page](/about).

---

## 📄 License

MIT — see `LICENSE` for details.
