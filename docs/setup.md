# Setup Notes

This document describes how to set up the KOD website project locally.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 18 | [nodejs.org](https://nodejs.org) |
| npm | ≥ 8 | Bundled with Node.js |
| Git | any | [git-scm.com](https://git-scm.com) |

Optional (only needed for the WebAssembly module):

| Tool | Install |
|------|---------|
| Rust | `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \| sh` |
| wasm-pack | `cargo install wasm-pack` |

---

## Clone & Install

```bash
git clone https://github.com/Kod-S-L/KodWebsite.git
cd KodWebsite
npm install
```

---

## Start the Dev Server

```bash
npm run dev
```

The site will be available at **http://localhost:4321** by default.  
Astro hot-reloads on every file save.

---

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` directory (static files ready to serve).

---

## Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally for final checking before deploy.

---

## Environment

No environment variables are required for the base project.  
If you add server-side features in the future, document any required `.env`
values here.

---

## Editor Recommendations

- **VS Code** with the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- Prettier for formatting (optional but recommended)
- ESLint for linting (optional)
