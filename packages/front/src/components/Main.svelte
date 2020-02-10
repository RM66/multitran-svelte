<script>
  import LangSelect from '../elements/LangSelect.svelte';
  import ResultItem from '../elements/ResultItem.svelte';
  import SearchInput from '../elements/SearchInput.svelte';
  import { sameParams, query, result, reverse, translate } from '../stores/translation.js';
</script>

<style>
  :root {
    --img-size: 48px;
  }

  main {
    flex-grow: 1;
    padding: 1em;
    text-align: center;
  }

  img {
    margin: -1px 0 -4px -2px;
    width: var(--img-size);
  }

  form {
    background: #fff;
    border: 1px solid var(--cl-gray);
    border-radius: var(--img-size);
    box-shadow: 0 -1em 1em 1em var(--cl-background);
    display: inline-flex;
    margin-top: 10vh;
    position: sticky;
    top: 1em;
    transition: margin-top var(--tr-time);
  }

  form:last-child {
    margin-top: 25vh;
  }

  .reverse {
    color: var(--cl-dark-gray);
    cursor: pointer;
    font-family: monospace;
    font-size: larger;
    line-height: 44px;
    text-decoration: none;
    user-select: none;
  }

  button {
    background-color: var(--cl-blue);
    border: 0;
    border-radius: 0 var(--img-size) var(--img-size) 0;
    color: #fff;
    cursor: pointer;
    flex-grow: 1;
    margin: -1px -1px -1px 0;
    padding-right: 0.75em;
    transition: background-color var(--tr-time);
  }
  button:hover {
    background-color: var(--cl-dark-blue);
  }
  button:active {
    background-color: var(--cl-darker-blue);
  }
  button:focus {
    background-color: var(--cl-btn-outline);
    outline: none;
  }

  @media screen and (max-width: 768px) {
    main {
      padding: 0;
    }

    img {
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: -4em;
    }

    form {
      max-width: 100%;
      top: 0;
    }

    button {
      background: transparent
        url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg==)
        no-repeat center;
      font-size: 0;
      width: 48px;
    }

    button:hover {
      background-color: transparent;
    }
  }
</style>

<main>
  <form on:submit|preventDefault={translate}>
    <img src="logo.png" alt="logo" />
    <SearchInput />
    <LangSelect from />
    <a href on:click|preventDefault={reverse} class="reverse" tabindex="0">&nbsp;&lt;&gt;&nbsp;</a>
    <LangSelect to />
    <button>Translate</button>
  </form>
  {#if $sameParams}
    {#await $result}
      <ResultItem preloader />
    {:then response}
      {#each response as data}
        <ResultItem {data} />
      {/each}
    {/await}
  {/if}
</main>
