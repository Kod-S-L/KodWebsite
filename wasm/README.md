# wasm — Optional Rust/WebAssembly Module

This folder contains an **optional** Rust crate that can be compiled to
WebAssembly and loaded by the Astro frontend.

> **You do NOT need Rust to build or run the KOD website.**  
> This module only becomes relevant when implementing performance-critical or
> compute-heavy features that benefit from near-native speed in the browser.

---

## When would you use this?

Potential use-cases for the WASM module include:

- Client-side cryptography / hashing
- Heavy data processing (e.g. parsing, compression)
- Real-time simulations or visualisations
- Any algorithm that is too slow in pure JavaScript

---

## Prerequisites

- [Rust](https://rustup.rs/) (`rustup` recommended)
- [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/)

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install wasm-pack
cargo install wasm-pack
```

---

## Build

Run from inside this `wasm/` directory:

```bash
wasm-pack build --target web --out-dir ../public/wasm-pkg
```

This will:
1. Compile the Rust code to WebAssembly.
2. Generate JavaScript/TypeScript bindings via `wasm-bindgen`.
3. Place the output in `public/wasm-pkg/` so Astro serves it as a static asset.

---

## Usage in Astro pages

```astro
---
// Import lazily so the WASM binary is only fetched when needed
---
<script>
  const { default: init, greet, add } = await import('/wasm-pkg/kod_wasm.js');
  await init();

  console.log(greet('KOD'));   // "Hello from Rust, KOD!"
  console.log(add(21, 21));    // 42
</script>
```

---

## Project structure

```
wasm/
├── Cargo.toml      # Rust package manifest
├── README.md       # This file
└── src/
    └── lib.rs      # Rust source — exported functions become JS-callable
```

---

## Notes

- The compiled output (`public/wasm-pkg/`) is git-ignored — it is a build
  artefact and should be regenerated locally or in CI.
- Keep this module **thin**. Heavy dependencies inflate binary size and slow
  initial page load.
- All exported functions must be annotated with `#[wasm_bindgen]`.
