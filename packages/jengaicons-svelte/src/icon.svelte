<script lang="ts">
  import defaultAttributes from './defaultAttributes.js';
  import type { Snippet } from 'svelte';

  let {
    name = undefined,
    color = 'currentColor',
    size = 32,
    strokeWidth = 1,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    children,
    ...rest
  }: {
    name?: string;
    color?: string;
    size?: number;
    strokeWidth?: number;
    absoluteStrokeWidth?: boolean;
    iconNode?: [string, Record<string, unknown>][];
    class?: string;
    children?: Snippet;
    [key: string]: unknown;
  } = $props();

  const mergeClasses = (...classes: (string | undefined)[]) =>
    classes
      .filter((cls, index, array) => Boolean(cls) && array.indexOf(cls) === index)
      .join(' ');
</script>

<svg
  {...defaultAttributes}
  {...rest}
  width={size}
  height={size}
  stroke={color}
  stroke-width={absoluteStrokeWidth ? Number(strokeWidth) * 32 / Number(size) : strokeWidth}
  class={mergeClasses('jenga-icon', 'jengaicons', name ? `jengaicons-${name}` : '', className)}
>
  {#each iconNode as [tag, attrs]}
    {@const elementAttrs = {
      ...attrs,
      fill: attrs.fill != null ? color : undefined,
      stroke: attrs.stroke != null ? color : undefined
    }}
    <svelte:element this={tag} {...elementAttrs} />
  {/each}
  {@render children?.()}
</svg>
