<script>
  import Footer from './components/Footer.svelte';
  import Main from './components/Main.svelte';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap');

  :global(:root) {
    --cl-background: #f2f2f2;
    --cl-blue: #4c77b1;
    --cl-dark-blue: #0f4c81;
    --cl-darker-blue: #002554;
    --cl-gray: #ccc;
    --cl-dark-gray: #888;
    --cl-darker-gray: #434242;
    --cl-black: #111;
    --cl-outline: #4d90fe;
    --cl-btn-outline: #4c83d7;
    --tr-time: 200ms;
  }

  :global(html) {
    height: 100%;
    width: 100%;
  }

  :global(body) {
    background: var(--cl-background);
    box-sizing: border-box;
    color: var(--cl-black);
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }

  :global(*) {
    box-sizing: border-box;
    font-family: Comfortaa, cursive;
    outline-color: var(--cl-outline);
  }

  :global([disabled]) {
    opacity: 0.75;
    pointer-events: none;
  }
</style>

<Main />
<Footer />
