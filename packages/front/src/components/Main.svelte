<script>
  import LangSelect from '../elements/LangSelect.svelte';
  import SearchInput from '../elements/SearchInput.svelte';
  import { result, reverse, translate } from '../stores/translation.js';
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
    margin-top: 25vh;
  }

  .reverse {
    color: var(--cl-dark-gray);
    cursor: pointer;
    font-family: monospace;
    font-size: larger;
    line-height: 44px;
    user-select: none;
  }

  button {
    background: var(--cl-light-blue);
    border: 0;
    border-radius: 0 var(--img-size) var(--img-size) 0;
    color: #fff;
    cursor: pointer;
    margin: -1px -1px -1px 0;
    padding-right: .75em;
    transition: background var(--tr-time);;
  }
  button:hover {
    background: var(--cl-blue);
  }
  button:active {
    background: var(--cl-dark-blue);
  }
</style>


<main>
  <form on:submit|preventDefault={translate}>
    <img src="logo.png" alt="logo" />
    <SearchInput />
    <LangSelect from />
    <a on:click={reverse} class="reverse" tabindex="0">&nbsp;&lt;&gt;&nbsp;</a>
    <LangSelect to />
    <button>Translate</button>
  </form>
  <div>
    {#await $result}
      <i>loading&hellip;</i>
    {:then data}
      <p>{data || ''}</p>
    {/await}
  </div>
</main>
