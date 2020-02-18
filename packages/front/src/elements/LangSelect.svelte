<script>
  import langs from '../constants/langs.js';
  import { langFrom, langTo } from '../stores/translation.js';

  export let from = false;
  export let to = false;

  const sortedLangs = Object.entries(langs).sort((a, b) => (a[1].title > b[1].title ? 1 : -1));

  $: selected = (from && $langFrom) || (to && $langTo);
  $: other = (from && $langTo) || (to && $langFrom);

  function setLang(e) {
    if (from) $langFrom = e.target.value;
    if (to) $langTo = e.target.value;
  }
</script>

<style>
  .lang-select {
    align-items: center;
    border: solid var(--cl-gray);
    border-width: 0 1px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  select {
    background: transparent;
    border: 0;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    .lang-code {
      display: block;
      font-size: smaller;
      padding: 0.5em;
      pointer-events: none;
      position: absolute;
      text-transform: uppercase;
      z-index: 1;
    }

    select {      
      color: #fff;
      width: 56px;
    }

    option {
      color: var(--cl-black);
    }
  }
  
  @media screen and (max-width: 400px) {
    select {      
      width: 48px;
    }
  }

  @media screen and (max-width: 320px) {
    select {      
      width: 42px;
    }
  }
</style>

<div class="lang-select">
  <span class="lang-code" hidden>{langs[selected].code.split('-')[0]}</span>
  <select bind:value={selected} on:change={setLang}>
    {#each sortedLangs as [number, { title }]}
      <option disabled={number === other} value={number}>{title}</option>
    {/each}
  </select>
</div>
