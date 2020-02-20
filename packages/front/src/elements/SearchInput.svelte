<script>
  import { query } from '../stores/translation.js';
</script>

<style>
  input {
    background: 0;
    border: 0;
    color: var(--cl-black);
    font-size: large;
    height: 44px;
    margin-left: 0.33em;
    max-width: 50%;
    min-width: 146px;
    padding-left: 0.33em;
  }

  input::-webkit-search-cancel-button {
    filter: grayscale(1) contrast(0);
  }

  @media screen and (max-width: 768px) {
    input {
      padding-left: 0.5em;
    }
  }

  @media screen and (max-width: 320px) {
    input {
      font-size: medium;
    }
  }
</style>

<input bind:value="{$query}" type="search" placeholder="Enter the word" />
