<script>
  import { langFrom, langList, langTo } from '../stores/langs.js';

  export let from = false;
  export let to = false;

  $: selected = from && $langFrom || to && $langTo;
  $: other = from && $langTo || to && $langFrom;

  function setLang(e) {
    from && langFrom.set(+e.target.value);
    to && langTo.set(+e.target.value);
  }
</script>

<style></style>

<select bind:value={selected} on:change={setLang}>
  {#each Object.entries(langList) as [title, value]}
    <option disabled={value === other} {value}>{title}</option>
  {/each}
</select>
