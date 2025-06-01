<script>
    import Icon from '../icon.svelte'
    const iconNode = [["path",{"d":"M1.5 16.577h4.615l5.77-12.692 9.23 24.23 5.77-11.538H31.5"}]]
  </script>


    <Icon  name="example" {...$$props} iconNode={iconNode}>
        <slot />
    </Icon>