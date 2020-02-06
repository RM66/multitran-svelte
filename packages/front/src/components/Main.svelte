<script>
  import LangSelect from '../elements/LangSelect.svelte';
  import SearchInput from '../elements/SearchInput.svelte';
  import { query, result, reverse, translate } from '../stores/translation.js';
</script>

<style>
  :root {
    --img-size: 48px;
  }

  main {
    flex-grow: 1;
    text-align: center;
  }

  img {
    margin: -1px 0 -4px -2px;
    width: var(--img-size);
  }

  form {
    border: 1px solid var(--cl-gray);
    border-radius: var(--img-size);
    display: inline-flex;
    margin-top: 10vh;
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
    background-color: var(--cl-light-blue);
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
    background-color: var(--cl-blue);
  }
  button:active {
    background-color: var(--cl-dark-blue);
  }
  button:focus {
    background-color: var(--cl-btn-outline);
    outline: none;
  }

  @media screen and (max-width: 768px) {
    img {
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 1em;
    }

    form {
      max-width: 100%;
    }

    button {
      background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzVGNjM2OCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIvPjwvc3ZnPg==) no-repeat center;
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
  {#await $result}
    <div>
      <i>loading&hellip;</i>
    </div>
  {:then data}
    {#each data as item}
      <div class="item">
        {#each item as { type, text }}
          <div class={type}>
            {@html text.join('')}
          </div>
        {/each}
      </div>
    {/each}
  {/await}
</main>
