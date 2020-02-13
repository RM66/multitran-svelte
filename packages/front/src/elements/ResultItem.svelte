<script>
  import ItemHeadContent from './ItemHeadContent.svelte';

  export let data = [];
  export let preloader = false;
</script>

<style>
  @keyframes loading {
    0% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.75;
    }
    100% {
      opacity: 0.25;
    }
  }

  .item {
    --b-radius: 10px;
    background: #fff;
    border-radius: var(--b-radius);
    box-shadow: 0 0 3px 0px var(--cl-gray);
    display: grid;
    grid-template-columns: 5.25em auto;
    margin: 1em auto;
    max-width: 640px;
  }

  .item.preloader {
    animation: loading 1s infinite;
    background: #fff;
    height: 75vh;
  }

  .item > * {
    padding: 0.33em 0.66em;
  }

  .head {
    background: var(--cl-darker-gray);
    border-radius: var(--b-radius) var(--b-radius) 0 0;
    color: #fff;
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
    color: #000;
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
      <div class={type}>
        {#if type === 'head'}
          <div class="head">
            <ItemHeadContent {text} />
          </div>
        {:else}
          {@html text.join('')}
        {/if}
      </div>
    {/each}
  {/if}
</div>
