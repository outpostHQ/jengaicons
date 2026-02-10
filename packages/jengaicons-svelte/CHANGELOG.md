# @jengaicons/svelte

## 0.5.0

### Bug Fixes

- **fix: SSR module resolution on Vercel** — Added top-level `svelte` and `module` fields to `package.json` and `import` conditions to the `exports` map. This fixes `.svelte` file resolution failures during SSR builds on Vercel and other strict bundler environments. Previously, only local dev servers (with Vite's Svelte plugin) could resolve the component imports correctly.