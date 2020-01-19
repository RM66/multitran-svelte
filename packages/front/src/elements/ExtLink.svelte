<script>
  export let href;
</script>

<style>
  a {
    color: var(--cl-indigo);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<a {href} target="_blank" rel="noopener">
  <slot />
</a>
