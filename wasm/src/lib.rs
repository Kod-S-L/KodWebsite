use wasm_bindgen::prelude::*;

/// Returns a greeting string — placeholder showing how Rust functions
/// can be called from JavaScript after compiling to WebAssembly.
///
/// # Example (JavaScript)
/// ```js
/// import init, { greet } from './pkg/kod_wasm.js';
/// await init();
/// console.log(greet("KOD")); // => "Hello from Rust, KOD!"
/// ```
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello from Rust, {}!", name)
}

/// Adds two unsigned 32-bit integers — useful for testing WASM numeric
/// interoperability between Rust and JavaScript.
#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}
