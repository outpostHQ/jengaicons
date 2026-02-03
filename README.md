# Jenga Icons

A collection of **2,500+ beautifully crafted icons** in three variants, designed for React and Svelte applications.

[![NPM Version - React](https://img.shields.io/npm/v/@jengaicons/react.svg?style=flat&label=react)](https://www.npmjs.com/package/@jengaicons/react)
[![NPM Version - Svelte](https://img.shields.io/npm/v/@jengaicons/svelte.svg?style=flat&label=svelte)](https://www.npmjs.com/package/@jengaicons/svelte)
[![Discord](https://img.shields.io/discord/793832892781690891?color=7389D8&label=chat%20on%20Discord&logo=Discord&logoColor=ffffff)](https://discord.gg/sHnHPnAPZj)

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@jengaicons/react](./packages/jengaicons-react) | [![npm](https://img.shields.io/npm/v/@jengaicons/react.svg)](https://www.npmjs.com/package/@jengaicons/react) | React components |
| [@jengaicons/svelte](./packages/jengaicons-svelte) | [![npm](https://img.shields.io/npm/v/@jengaicons/svelte.svg)](https://www.npmjs.com/package/@jengaicons/svelte) | Svelte 5 components |

---

## Icon Variants

All icons come in **three variants**:

| Variant | Count | Naming Convention | Description |
|---------|-------|-------------------|-------------|
| **Regular** | 1,208 | `Activity`, `Bell` | Outline/stroke icons with adjustable weight |
| **Fill** | 1,205 | `ActivityFill`, `BellFill` | Solid filled icons |
| **Mono** | 122 | `GithubMono`, `TwitterMono` | Brand logos and monochrome icons |

---

## React

### Installation

```sh
npm install @jengaicons/react
# or
yarn add @jengaicons/react
# or
bun add @jengaicons/react
```

### Usage

```tsx
import { Activity, ActivityFill, GithubMono } from "@jengaicons/react"

function App() {
  return (
    <div>
      {/* Regular (outline) */}
      <Activity size={24} color="currentColor" />

      {/* Fill (solid) */}
      <ActivityFill size={24} color="#6864d4" />

      {/* Mono (brand) */}
      <GithubMono size={24} />
    </div>
  )
}
```

### Next.js Optimization

```ts
// next.config.mjs
import { nextJsModularizeImport } from "@jengaicons/react"

const nextConfig = {
  modularizeImports: {
    "@jengaicons/react": nextJsModularizeImport,
  },
}

export default nextConfig
```

### Global Configuration (React Context)

```tsx
import { Activity, JengaIconContext } from "@jengaicons/react"

function App() {
  return (
    <JengaIconContext.Provider value={{ color: "blue", size: 24 }}>
      <Activity /> {/* Inherits color and size */}
    </JengaIconContext.Provider>
  )
}
```

---

## Svelte

### Installation

```sh
npm install @jengaicons/svelte
# or
yarn add @jengaicons/svelte
# or
bun add @jengaicons/svelte
```

### Usage

```svelte
<script>
  import { Activity, ActivityFill, GithubMono } from "@jengaicons/svelte"
</script>

<!-- Regular (outline) -->
<Activity size={24} color="currentColor" />

<!-- Fill (solid) -->
<ActivityFill size={24} color="#6864d4" />

<!-- Mono (brand) -->
<GithubMono size={24} />
```

### Individual Imports (Best for Tree-Shaking)

```svelte
<script>
  import Activity from "@jengaicons/svelte/icons/Activity"
  import ActivityFill from "@jengaicons/svelte/icons/ActivityFill"
</script>
```

---

## Props

Both packages share the same props API:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `currentColor` | Icon color (any CSS color value) |
| `size` | `number \| string` | `32` | Width and height in pixels |
| `strokeWidth` | `number \| string` | `1` | Stroke width (Regular icons only) |
| `mirrored` | `boolean` | `false` | Flip icon horizontally (RTL support) |
| `class` | `string` | - | CSS class name |
| `style` | `object` | - | Inline styles |

All standard SVG attributes are passed through to the `<svg>` element.

---

## Bundle Size

Icons are optimized for minimal bundle size with full tree-shaking support:

| Package | Per Icon | Gzipped |
|---------|----------|---------|
| React | ~800 bytes | ~400 bytes |
| Svelte | ~400 bytes | ~200 bytes |

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
