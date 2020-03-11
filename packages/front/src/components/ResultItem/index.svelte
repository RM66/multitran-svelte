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
    padding-bottom: .25em;
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
    background: var(--cl-darkest-gray);
    border-radius: var(--b-radius) var(--b-radius) 0 0;
    color: var(--cl-white);
    font-size: inherit;
    grid-column: 1 / -1;
    font-weight: inherit;
    margin: 0 0 .25em;
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

<article class="item" class:preloader>
  {#if preloader}
    <h2 class="head" />
    <div />
  {:else}
    {#each data as { type, text }}
      {#if type === 'head'}
        <h2 class="head">
          <ItemHeadContent {text} />
        </h2>
      {:else}
        <div class={type} aria-label={type === 'tran' ? 'translation' : null}>
          {@html text.join('')}
        </div>
      {/if}
    {/each}
  {/if}
</article>
