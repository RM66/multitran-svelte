<script>
  export let href = '';
</script>

<style>
  a {
    border-bottom: 1px solid transparent;
    color: var(--cl-dark-blue);
    display: inline-block;
    text-decoration: none;
    transition: border-color var(--tr-time);
  }

  a:hover {
    border-bottom-color: var(--cl-blue);
  }

  a:active {
    color: var(--cl-darker-blue);
  }
</style>

<a {href} target="_blank" rel="noopener noreferrer">
  <slot />
</a>
