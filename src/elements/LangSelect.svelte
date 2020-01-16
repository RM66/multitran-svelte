<script>
  import langs from '../constants/langs.js';
  import { langFrom, langTo } from '../stores/translation.js';

  export let from = false;
  export let to = false;

  $: selected = from && $langFrom || to && $langTo;
  $: other = from && $langTo || to && $langFrom;

  function setLang(e) {
    if (from) $langFrom = +e.target.value;
    if (to) $langTo = +e.target.value;
  }
</script>

<style></style>

<select bind:value={selected} on:change={setLang}>
  {#each Object.entries(langs) as [title, value]}
    <option disabled={value === other} {value}>{title}</option>
  {/each}
</select>
