<script>
  import LangSelect from "../elements/LangSelect.svelte";
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
    <input type="search" placeholder="Enter the word" />
    <LangSelect />
    <LangSelect />
    <button>Translate</button>
  </form>
</main>
