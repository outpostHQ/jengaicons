<script>
  import defaultAttributes from './defaultAttributes.js';

  let {
    name = undefined,
    color = 'currentColor',
    size = 32,
    strokeWidth = 1,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className = '',
    children,
    ...restProps
  } = $props();

  const mergeClasses = (...classes) => classes.filter((cls, index, array) => {
    return Boolean(cls) && array.indexOf(cls) === index;
  }).join(' ');
</script>

<svg
  {...defaultAttributes}
  {...restProps}
  width={size}
  height={size}
  stroke={color}
  stroke-width={absoluteStrokeWidth ? Number(strokeWidth) * 32 / Number(size) : strokeWidth}
  class={mergeClasses('jenga-icon', 'jengaicons', name ? `jengaicons-${name}` : '', className)}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element
      this={tag}
      {...attrs}
      fill={attrs.fill != null ? color : undefined}
      stroke={attrs.stroke != null ? color : undefined}
    />
  {/each}
  {@render children?.()}
</svg>
