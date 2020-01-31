<script>
  import Footer from "./components/Footer.svelte";
  import Main from "./components/Main.svelte";
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

  :global(:root) {
    --cl-blue: #0f4c81;
    --cl-light-blue: #4c77b1;
    --cl-dark-blue: #002554;
    --cl-gray: #aaa;
    --cl-dark-gray: #888;
    --tr-time: 200ms;
  }

  :global(html) {
    height: 100%;
    width: 100%;
  }

  :global(body) {
    box-sizing: border-box;
    color: #333;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }

  :global(*) {
    font-family: Comfortaa, Verdana, cursive;
  }
</style>

<Main />
<Footer />
