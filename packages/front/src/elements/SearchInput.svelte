<script>
  import { query } from '../stores/translation.js';
</script>

<style>
  input {
    border: 0;
    font-size: large;
    font-weight: bold;
    height: 44px;
    margin-left: 0.33em;
    padding-left: 0.33em;
  }
</style>

<input bind:value="{$query}" type="search" placeholder="Enter the word" />
