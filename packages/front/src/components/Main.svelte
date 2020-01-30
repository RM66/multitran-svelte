<script>
  import LangSelect from '../elements/LangSelect.svelte';
  import { query, result, translate } from '../stores/translation.js';

  let inputVal = '';
</script>

<style>
  main {
    flex-grow: 1;
    text-align: center;
  }

  img {
    margin: -1px 0 -4px -2px;
    width: 48px;
  }

  form {
    align-items: center;
    border: 1px solid var(--cl-gray);
    border-radius: 48px;
    display: inline-flex;
    justify-content: center;
    margin-top: 25vh;
  }

  form > * {
    border: 0;
  }
</style>

<main>
  <form on:submit|preventDefault={() => (translate(inputVal.trim()))}>
    <img src="logo.png" alt="logo" />
    <input bind:value={inputVal} type="search" placeholder="Enter the word" />
    <LangSelect from />
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
