# Jenga Icons for Svelte

Jenga Icons is a collection of adaptable icons designed for use in interfaces,
diagrams, and other applications.

[![NPM Version](https://img.shields.io/npm/v/@jengaicons/svelte.svg?style=flat)](https://www.npmjs.com/package/@jengaicons/svelte)
[![Discord](https://img.shields.io/discord/793832892781690891?color=7389D8&label=chat%20on%20Discord&logo=Discord&logoColor=ffffff)](https://discord.gg/sHnHPnAPZj)

## Installation

```sh
# with npm
npm install @jengaicons/svelte

# with yarn
yarn add @jengaicons/svelte

# with bun
bun add @jengaicons/svelte
```

## Usage

```svelte
<script>
  import { Activity, ActivityFill } from "@jengaicons/svelte"
</script>

<Activity />
<ActivityFill color="#6864d4" size={32} />
```

### Individual Icon Imports

For better tree-shaking, you can import icons individually:

```svelte
<script>
  import Activity from "@jengaicons/svelte/icons/Activity.svelte"
  import ActivityFill from "@jengaicons/svelte/icons/ActivityFill.svelte"
</script>

<Activity />
<ActivityFill color="#6864d4" size={32} />
```

## Props

The icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `currentColor` | Color of the icon's stroke and fill. Accepts CSS color strings (`hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors). |
| `size` | `number \| string` | `24` | Height and width of the icon. Accepts a number or string with units (`px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`). |
| `weight` | `number \| string` | `2` | Stroke width of the icon (only applies to regular/outline icons). |
| `mirrored` | `boolean` | `false` | Flips the icon horizontally. Useful for RTL languages. |
| `alt` | `string` | - | Accessible alt text for the icon. |

### Additional Attributes

All standard SVG attributes are passed through to the underlying `<svg>` element:

```svelte
<script>
  import { Activity } from "@jengaicons/svelte"
</script>

<Activity
  class="my-icon"
  style="margin-right: 8px;"
  aria-label="Activity icon"
  on:click={() => console.log('clicked')}
/>
```

## Icon Variants

Each icon comes in multiple variants:

- **Regular** (outline): `Activity`
- **Fill** (solid): `ActivityFill`

## TypeScript Support

This package includes TypeScript definitions out of the box.

```svelte
<script lang="ts">
  import { Activity } from "@jengaicons/svelte"
  import type { IconProps } from "@jengaicons/svelte"

  const iconProps: IconProps = {
    size: 24,
    color: "blue"
  }
</script>

<Activity {...iconProps} />
```

## SvelteKit

Works seamlessly with SvelteKit:

```svelte
<!-- +page.svelte -->
<script>
  import { Activity } from "@jengaicons/svelte"
</script>

<Activity size={32} color="var(--primary-color)" />
```

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
