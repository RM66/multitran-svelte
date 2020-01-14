<script>
  import langs from "../constants/langs.js";
</script>

<style>

</style>

<select>
  {#each Object.entries(langs) as [title, value]}
    <option {value}>{title}</option>
  {/each}
</select>
