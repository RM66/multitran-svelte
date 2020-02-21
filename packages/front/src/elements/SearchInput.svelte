<script>
  import langs from '../constants/langs.js';
  import { recognize } from '../services/speech.js';
  import { langFrom, query } from '../stores/translation.js';

  function hear() {
    recognize(langs[$langFrom].code);
  }
</script>

<style>
  input {
    background: 0;
    border: 0;
    color: var(--cl-black);
    font-size: large;
    height: 44px;
    margin-left: 0.33em;
    max-width: calc(50% - 44px);
    min-width: 146px;
    padding-left: 0.33em;
  }

  input::-webkit-search-cancel-button {
    filter: grayscale(1) contrast(0);
  }

  .microphone {
    background: 0;
    border: 0;
    opacity: 0.66;
  }

  :global(body.dark-mode) .microphone {
    filter: invert(1);
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

    .microphone {
      display: none;
    }
  }
</style>

<input bind:value="{$query}" type="search" placeholder="Enter the word" />
<button type="button" class="microphone" on:click="{hear}">🎤</button>
