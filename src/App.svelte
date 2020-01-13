<script>
  import Footer from "./components/Footer.svelte";
  import Main from "./components/Main.svelte";
</script>

<style>
  :global(:root) {
    --cl-red: rgb(244, 67, 54);
    --cl-pink: rgb(233, 30, 99);
    --cl-purple: rgb(156, 39, 176);
    --cl-deep-purple: rgb(103, 58, 183);
    --cl-indigo: rgb(63, 81, 181);
    --cl-blue: rgb(33, 150, 243);
    --cl-light-blue: rgb(3, 169, 244);
    --cl-cyan: rgb(0, 188, 212);
    --cl-teal: rgb(0, 150, 136);
    --cl-green: rgb(76, 175, 80);
    --cl-light-green: rgb(139, 195, 74);
    --cl-lime: rgb(205, 220, 57);
    --cl-yellow: rgb(255, 235, 59);
    --cl-amber: rgb(255, 193, 7);
    --cl-orange: rgb(255, 152, 0);
    --cl-deep-orange: rgb(255, 87, 34);
    --cl-brown: rgb(121, 85, 72);
    --cl-grey: rgb(158, 158, 158);
    --cl-blue-grey: rgb(96, 125, 139);
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

  :global(a) {
    color: var(--cl-indigo);
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>

<Main />
<Footer />
