<script>
  import Footer from "./components/Footer.svelte";
  import Main from "./components/Main.svelte";
</script>

<style>
  :global(:root) {
    --cl-blue: #0f4c81;
    --cl-light-blue: #4c77b1;
    --cl-dark-blue: #002554;
    --cl-gray: #aaa;
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    height: 100%;
    margin: 0;
  }
</style>

<Main />
<Footer />
