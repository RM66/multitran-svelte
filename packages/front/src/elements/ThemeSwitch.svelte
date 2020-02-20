<script>
  import { onMount } from 'svelte';

  let val = !!localStorage.getItem('dark-mode');

  $: if (val) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', true);
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('dark-mode');
  }
</script>

<style>
  input {
    display: none;
  }

  label {
    color: var(--cl-darker-gray);
    cursor: pointer;
    position: fixed;
    right: 1em;
    top: 1em;
    user-select: none;
  }

  label::before {
    border: 1px solid var(--cl-gray);
    border-radius: 1em;
    content: '';
    display: inline-block;
    font-size: smaller;
    height: 1em;
    margin-right: 0.33em;
    position: relative;
    top: 2px;
    width: 1.75em;
  }

  input:checked + label::before {
    background: #333;
    border-color: var(--cl-dark-gray);
  }

  label::after {
    background: var(--cl-blue);
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 11px;
    left: 2px;
    opacity: 0.75;
    position: absolute;
    top: 4px;
    transition: background var(--tr-time), transform var(--tr-time);
    width: 11px;
  }

  label:hover::after {
    background: var(--cl-dark-blue);
  }

  input:checked + label::after {
    background: var(--cl-dark-blue);
    opacity: 1;
    transform: translateX(10px);
  }

  input:hover:checked + label::after {
    background: var(--cl-darker-blue);
  }
</style>

<input type="checkbox" id="dark-mode" bind:checked="{val}" />
<label for="dark-mode">dark</label>
