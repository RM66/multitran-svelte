<script>
  import langs from '../constants/langs.js';
  import { recognize, SpeechRecognition } from '../services/speech.js';
  import { langFrom, query } from '../stores/translation.js';

  let recongition = false;

  function hear() {
    recognize(langs[$langFrom].code, {
      onStart: () => (recongition = true),
      onResult: val => ($query = val),
      onEnd: () => (recongition = false)
    });
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
    cursor: pointer;
    opacity: 0.66;
  }

  .microphone.recongition {
    animation: blinking 1s infinite;
  }

  :global(body.dark-mode) .microphone {
    filter: invert(1);
  }

  @media screen and (max-width: 768px) {
    input {
      padding-left: 0.5em;
    }

    input::-webkit-input-placeholder {
      font-size: medium;
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

<input bind:value={$query} type="search" placeholder="Enter the word" />
{#if SpeechRecognition}
  <button type="button" class="microphone" class:recongition on:click={hear}>🎤</button>
{/if}
