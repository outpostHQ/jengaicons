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

  // Definition tags (mask/gradient/…) are kept verbatim, no color remapping.
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

  const escapeAttr = (value: unknown) =>
    String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

  function serializeNode(node: IconChild, insideDef: boolean): string {
    const tag = node[0];
    const attrs = (node[1] ?? {}) as Record<string, unknown>;
    const childNodes = (node[2] ?? []) as IconChild[];
    const isDef = insideDef || DEF_TAGS.has(tag);
    const elementAttrs: Record<string, unknown> = isDef
      ? { stroke: 'none', ...attrs }
      : {
          ...attrs,
          fill: attrs.fill != null ? color : undefined,
          stroke: attrs.stroke != null ? color : (attrs.fill != null ? 'none' : undefined)
        };
    const attrString = Object.entries(elementAttrs)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
      .join(' ');
    const open = attrString ? `${tag} ${attrString}` : tag;
    if (!childNodes.length) return `<${open}/>`;
    return `<${open}>${childNodes.map((child) => serializeNode(child, isDef)).join('')}</${tag}>`;
  }

  // Render via {@html} inside <svg> so nodes resolve to the SVG namespace.
  // <svelte:element> from a snippet would create HTML-namespace paths that never paint.
  const innerSvg = $derived(iconNode.map((node) => serializeNode(node, false)).join(''));
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
  {@html innerSvg}
  {@render children?.()}
</svg>
