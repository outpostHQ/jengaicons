<script>import defaultAttributes from './defaultAttributes';
export let name = undefined;
export let color = 'currentColor';
export let size = 32;
export let strokeWidth = 1;
export let absoluteStrokeWidth = false;
export let iconNode = [];

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
})
    .join(' ');
</script>

<svg
  {...defaultAttributes}
  {...$$restProps}
  width={size}
  height={size}
  stroke={color}
  stroke-width={
    absoluteStrokeWidth
      ? Number(strokeWidth) * 32 / Number(size)
      : strokeWidth
  }
  class={
    mergeClasses(
      'jenga-icon',
      'jengaicons',
      name ? `jengaicons-${name}`: '',
      $$props.class
    )
  }
>
  {#each iconNode as [tag, attrs]}
    <svelte:element
      this={tag}
      {...attrs}
      fill={attrs.fill != null ? color : undefined}
      stroke={attrs.stroke != null ? color : undefined}
    />
  {/each}
  <slot />
</svg>
