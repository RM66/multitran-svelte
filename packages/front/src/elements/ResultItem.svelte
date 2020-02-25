<script>
  import ItemHeadContent from './ItemHeadContent.svelte';

  export let data = [];
  export let preloader = false;
</script>

<style>
  .item {
    --b-radius: 10px;
    background: var(--cl-white);
    border-radius: var(--b-radius);
    box-shadow: 0 0 3px 0px var(--cl-gray);
    display: grid;
    grid-template-columns: 5.25em auto;
    margin: 1em auto;
    max-width: 640px;
  }

  .item.preloader {
    animation: blinking 1s infinite;
    background: var(--cl-white);
    height: 75vh;
  }

  .item > * {
    padding: 0.33em 0.66em;
  }

  .head {
    background: var(--cl-darker-gray);
    border-radius: var(--b-radius) var(--b-radius) 0 0;
    color: var(--cl-white);
    grid-column: 1 / -1;
    padding: 0.5em;
  }

  .preloader .head {
    height: 2.125em;
  }

  .subj {
    font-size: smaller;
    font-style: italic;
    padding-top: 9px;
  }

  .tran {
    color: var(--cl-dark-black);
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    text-align: left;
  }
  .tran:last-child {
    padding-bottom: 0.55em;
  }
</style>

<div class="item" class:preloader>
  {#if preloader}
    <div class="head" />
    <div />
  {:else}
    {#each data as { type, text }}
      {#if type === 'head'}
        <div class="head">
          <ItemHeadContent {text} />
        </div>
      {:else}
        <div class={type}>
          {@html text.join('')}
        </div>
      {/if}
    {/each}
  {/if}
</div>
