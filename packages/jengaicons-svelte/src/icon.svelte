<script lang="ts">
  import defaultAttributes from './defaultAttributes.js';
  import type { Snippet } from 'svelte';

  type IconChild = [string, Record<string, unknown>] | [string, Record<string, unknown>, IconChild[]];

  let {
    name = undefined,
    color = 'currentColor',
    size = 32,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    viewBox = '0 0 32 32',
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
    viewBox?: string;
    iconNode?: IconChild[];
    class?: string;
    children?: Snippet;
    [key: string]: unknown;
  } = $props();

  // Tags whose subtree *defines* graphics (masks, gradients, …). Their contents
  // are rendered verbatim — no color/stroke remapping — so they keep working.
  const DEF_TAGS = new Set([
    'mask',
    'linearGradient',
    'radialGradient',
    'pattern',
    'filter',
    'symbol'
  ]);

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
  {viewBox}
  stroke={color}
  stroke-width={absoluteStrokeWidth ? Number(strokeWidth) * 32 / Number(size) : strokeWidth}
  class={mergeClasses('jenga-icon', 'jengaicons', name ? `jengaicons-${name}` : '', className)}
>
  {#each iconNode as node, i (i)}
    {@render renderNode(node, false)}
  {/each}
  {@render children?.()}
</svg>

{#snippet renderNode(node: IconChild, insideDef: boolean)}
  {@const tag = node[0]}
  {@const attrs = node[1] ?? {}}
  {@const childNodes = (node[2] ?? []) as IconChild[]}
  {@const isDef = insideDef || DEF_TAGS.has(tag)}
  {@const childInsideDef = isDef}
  {@const elementAttrs = isDef
    ? // Definition subtree (mask/gradient/…): keep attrs verbatim so the
      // definition still works; default stroke to 'none' so it doesn't inherit
      // the root <svg>'s stroke and erode the mask/shape.
      { stroke: 'none', ...attrs }
    : {
        ...attrs,
        fill: attrs.fill != null ? color : undefined,
        stroke: attrs.stroke != null ? color : (attrs.fill != null ? 'none' : undefined)
      }}
  {#if childNodes.length}
    <svelte:element this={tag} {...elementAttrs}>
      {#each childNodes as child, i (i)}
        {@render renderNode(child, childInsideDef)}
      {/each}
    </svelte:element>
  {:else}
    <svelte:element this={tag} {...elementAttrs} />
  {/if}
{/snippet}
