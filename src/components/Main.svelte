<script>
  import IFrame from "../components/IFrame.svelte";
  import LangSelect from "../elements/LangSelect.svelte";
  import { loading, query, translate, src } from '../stores/translation.js';
</script>

<style>
  main {
    flex-grow: 1;
  }

  form {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 25vh;
  }
</style>

<main>
  <form on:submit|preventDefault={() => $loading = true}>
    <img src="logo.png" alt="logo" />
    <input bind:value={$query} type="search" placeholder="Enter the word" />
    <LangSelect from />
    <LangSelect to />
    <button disabled={$loading || !$query}>Translate</button>
  </form>
  {#if $loading && $query}
    <i>loading&hellip;</i>
  {/if}
</main>
<IFrame src={$src} />