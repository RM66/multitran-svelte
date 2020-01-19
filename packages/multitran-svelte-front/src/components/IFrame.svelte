<script>
  export let src;
</script>

<iframe
  {src}
  name="mtr"
  hidden
  title
  sandbox
  referrerpolicy="no-referrer"
  on:load={e => src && console.log('on:load', e.path[0].contentDocument)} />
