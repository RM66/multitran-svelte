<script>
  import LangSelect from "../elements/LangSelect.svelte";
  import { query } from '../stores/transl.js';
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
  <form>
    <img src="logo.png" alt="logo" />
    <input bind:value={$query} type="search" placeholder="Enter the word" />
    <LangSelect from />
    <LangSelect to />
    <button disabled={!$query}>Translate</button>
  </form>
</main>
