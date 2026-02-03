# Jenga Icons

Jenga Icons is a collection of adaptable icons designed for use in interfaces,
diagrams, and other applications.

[![NPM Version - React](https://img.shields.io/npm/v/@jengaicons/react.svg?style=flat&label=react)](https://www.npmjs.com/package/@jengaicons/react)
[![NPM Version - Svelte](https://img.shields.io/npm/v/@jengaicons/svelte.svg?style=flat&label=svelte)](https://www.npmjs.com/package/@jengaicons/svelte)
[![Discord](https://img.shields.io/discord/793832892781690891?color=7389D8&label=chat%20on%20Discord&logo=Discord&logoColor=ffffff)](https://discord.gg/sHnHPnAPZj)

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@jengaicons/react](./packages/jengaicons-react) | [![npm](https://img.shields.io/npm/v/@jengaicons/react.svg)](https://www.npmjs.com/package/@jengaicons/react) | React components |
| [@jengaicons/svelte](./packages/jengaicons-svelte) | [![npm](https://img.shields.io/npm/v/@jengaicons/svelte.svg)](https://www.npmjs.com/package/@jengaicons/svelte) | Svelte components |

---

## React

### Installation

```sh
# with npm
npm install @jengaicons/react

# with yarn
yarn add @jengaicons/react

# with bun
bun add @jengaicons/react
```

### Usage

```tsx
import { Activity, ActivityFill } from "@jengaicons/react"

function App() {
  return (
    <div>
      <Activity />
      <ActivityFill color="#6864d4" size={32} />
    </div>
  )
}
```

### Next.js Optimization

Use the [modularizeImports feature](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports) for better tree-shaking:

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

Apply default styles to all icons using React Context:

```tsx
import { Activity, ActivityFill, JengaIconContext } from "@jengaicons/react"

function App() {
  return (
    <JengaIconContext.Provider value={{ color: "red", size: 24 }}>
      <Activity />
      <ActivityFill color="blue" /> {/* Override with blue */}
    </JengaIconContext.Provider>
  )
}
```

---

## Svelte

### Installation

```sh
# with npm
npm install @jengaicons/svelte

# with yarn
yarn add @jengaicons/svelte

# with bun
bun add @jengaicons/svelte
```

### Usage

```svelte
<script>
  import { Activity, ActivityFill } from "@jengaicons/svelte"
</script>

<Activity />
<ActivityFill color="#6864d4" size={32} />
```

### Individual Imports

For better tree-shaking:

```svelte
<script>
  import Activity from "@jengaicons/svelte/icons/Activity.svelte"
</script>

<Activity />
```

---

## Props

Both React and Svelte packages share the same props API:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `currentColor` | Color of the icon's stroke and fill. Accepts CSS color strings (`hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors). |
| `size` | `number \| string` | `24` | Height and width of the icon. Accepts a number or string with units (`px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`). |
| `weight` | `number \| string` | `2` | Stroke width of the icon (only applies to regular/outline icons). |
| `mirrored` | `boolean` | `false` | Flips the icon horizontally. Useful for RTL languages. |
| `alt` | `string` | - | Accessible alt text for the icon. |
| `style` | `object` | - | Style object passed to the underlying `<svg>` element. |

All standard SVG attributes are also supported and passed through to the `<svg>` element.

---

## Icon Variants

Each icon comes in multiple variants:

- **Regular** (outline): `Activity`, `Airplay`, `Archive`, ...
- **Fill** (solid): `ActivityFill`, `AirplayFill`, `ArchiveFill`, ...

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
