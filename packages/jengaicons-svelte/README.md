# Jenga Icons for Svelte

Jenga Icons is a collection of over 2,500 beautifully crafted icons designed for use in interfaces, diagrams, and other applications.

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
  import { Activity, ActivityFill, AirplayMono } from "@jengaicons/svelte"
</script>

<Activity />
<ActivityFill color="#6864d4" size={32} />
<AirplayMono size={24} />
```

## Icon Variants

Jenga Icons comes with **three variants** to suit different design needs:

| Variant | Count | Naming | Description |
|---------|-------|--------|-------------|
| **Regular** | 1,208 | `Activity`, `AddressBook` | Outline/stroke icons with customizable weight |
| **Fill** | 1,205 | `ActivityFill`, `AddressBookFill` | Solid filled icons |
| **Mono** | 122 | `AirplayMono`, `GithubMono` | Brand logos and monochrome icons |

### Regular (Outline) Icons
```svelte
<script>
  import { Activity, Bell, Calendar } from "@jengaicons/svelte"
</script>

<Activity />
<Bell strokeWidth={1.5} />
<Calendar size={32} color="blue" />
```

### Fill (Solid) Icons
```svelte
<script>
  import { ActivityFill, BellFill, CalendarFill } from "@jengaicons/svelte"
</script>

<ActivityFill />
<BellFill size={32} />
<CalendarFill color="#6864d4" />
```

### Mono (Brand) Icons
```svelte
<script>
  import { GithubMono, TwitterMono, FigmaMono } from "@jengaicons/svelte"
</script>

<GithubMono />
<TwitterMono size={32} />
<FigmaMono color="black" />
```

## Tree-Shaking & Individual Imports

For optimal bundle size, import icons individually:

```svelte
<script>
  // Direct import - best for tree-shaking
  import Activity from "@jengaicons/svelte/icons/Activity"
  import ActivityFill from "@jengaicons/svelte/icons/ActivityFill"
</script>

<Activity />
<ActivityFill />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `currentColor` | Icon color. Accepts any CSS color value. |
| `size` | `number \| string` | `32` | Icon dimensions (width & height). |
| `strokeWidth` | `number \| string` | `1` | Stroke width for Regular icons. |
| `absoluteStrokeWidth` | `boolean` | `false` | Scale stroke width with icon size. |
| `class` | `string` | `''` | CSS class name. |

All standard SVG attributes are also supported and passed through to the `<svg>` element.

### Examples

```svelte
<script>
  import { Activity } from "@jengaicons/svelte"
</script>

<!-- Basic usage -->
<Activity />

<!-- Custom size and color -->
<Activity size={48} color="#6366f1" />

<!-- Custom stroke width -->
<Activity strokeWidth={2} />

<!-- With CSS class -->
<Activity class="my-icon hover:text-blue-500" />

<!-- With inline styles -->
<Activity style="margin-right: 8px;" />

<!-- With event handlers -->
<Activity onclick={() => console.log('clicked')} />
```

## TypeScript

Full TypeScript support is included:

```svelte
<script lang="ts">
  import { Activity } from "@jengaicons/svelte"
  import type { IconProps } from "@jengaicons/svelte"

  const props: IconProps = {
    size: 24,
    color: "currentColor",
    strokeWidth: 1.5
  }
</script>

<Activity {...props} />
```

## SvelteKit

Works out of the box with SvelteKit:

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { Activity, Bell, Settings } from "@jengaicons/svelte"
</script>

<nav>
  <Activity size={20} />
  <Bell size={20} />
  <Settings size={20} />
</nav>
```

## Bundle Size

Each icon adds approximately **300-700 bytes** (uncompressed) to your bundle. With tree-shaking, only the icons you import are included.

| Import | Approximate Size |
|--------|-----------------|
| 1 icon | ~1.3 KB |
| 10 icons | ~5 KB |
| 100 icons | ~50 KB |

*Sizes are uncompressed. Gzipped sizes are ~60-70% smaller.*

## License

Jenga Icons is a project by [Outpost](https://outpost.run).

Released under the MIT License.
