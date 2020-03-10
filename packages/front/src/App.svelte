<script>
  import Footer from './sections/Footer.svelte';
  import Main from './sections/Main.svelte';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap');

  :global(:root) {
    --cl-white: #fff;
    --cl-background: #f2f2f2;
    --cl-gray: #ccc;
    --cl-dark-gray: #888;
    --cl-darker-gray: #666;
    --cl-darkest-gray: #434242;
    --cl-black: #111;
    --cl-dark-black: #000;
    --cl-blue: #4c77b1;
    --cl-dark-blue: #0f4c81;
    --cl-darker-blue: #002554;
    --cl-outline: #4d90fe;
    --cl-btn-outline: #4c83d7;
    --tr-time: 200ms;
  }

  :global(body.dark-mode) {
    --cl-white: #000;
    --cl-background: #222;
    --cl-gray: #434242;
    --cl-darker-gray: #aaa;
    --cl-darkest-gray: #ccc;
    --cl-black: #f2f2f2;
    --cl-dark-black: #fff;
    --cl-blue: #0f4c81;
    --cl-dark-blue: #3c67a1;
    --cl-darker-blue: #5c87c1;
    --cl-outline: #4c83d7;
    --cl-btn-outline: #3c67a1;
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

  @keyframes -global-blinking {
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
</style>

<Main />
<Footer />
