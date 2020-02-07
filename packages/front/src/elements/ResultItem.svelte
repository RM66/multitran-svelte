<script>
  export let data = [];
  export let preloader = false;
</script>

<style>
  .item {
    --b-radius: 10px;
    background: #fff;
    border-radius: var(--b-radius);
    box-shadow: 0 0 3px 0px var(--cl-gray);
    margin: 1em auto;
    max-width: 640px;
  }

  .head {
    background: var(--cl-darker-gray);
    border-radius: var(--b-radius) var(--b-radius) 0 0;
    color: #fff;
    padding: 0.5em;
  }
</style>

<div class="item">
  {#each data as { type, text }}
  <div class="{type}">
    {@html text.join('')}
  </div>
  {/each}
</div>
