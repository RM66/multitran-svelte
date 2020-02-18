<script>
  import { onMount } from 'svelte';

  export let text = [];
  let data = {};

  onMount(() => {
    const part = text.pop();
    const str = text.join('');
    const i = str.indexOf('[');
    data = {
      word: str.slice(0, i),
      transcr: str.slice(i),
      part
    };
  });
</script>

<style>
  .transcr,
  .part {
    margin-left: 0.1em;
  }

  .transcr {
    color: var(--cl-gray);
  }

  .part {
    font-style: italic;
  }
</style>

<span class="word">{@html data.word}</span>
<span class="transcr">{data.transcr}</span>
<span class="part">{data.part}</span>
