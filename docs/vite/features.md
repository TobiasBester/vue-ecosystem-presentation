---
prev:
    text: Vite
    link: /vite/
next:
    text: Honorable Mentions
    link: /more-stuff
---

## Features

### Faster development server
- Improved startup time:
  - Dependencies are pre-built (to ESM) with esbuild.
  - Vue components are served over ESM, so the browser only needs to fetch
  what will be on the screen.
- Improved app updates:
  - Hot Module Replacement over ESM: Only update and reload the bare minimum

### [Optimized](https://vitejs.dev/guide/features.html#build-optimizations) production builds
- Not yet leveraging esbuild and ESM
- Code and chunk splitting
- Lazy-loading
- Tree-shaking

### Support for:
- Typescript
- CSS Pre- and Post-processors
- Static asset handling
- Importing JSON, WASM, CSS in modules
- Static or SSR (currently experimental) build targets
- Relatively simple migration for Vue CLI projects

[Awesome Vite](https://github.com/vitejs/awesome-vite)
