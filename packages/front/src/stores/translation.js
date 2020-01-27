import { writable } from 'svelte/store';
import langs from '../constants/langs.js';

export const langFrom = writable(langs.English);
export const langTo = writable(langs.Russian);
export const query = writable('');
export const loading = writable(false);
export const result = writable();

export const translate = str => {
  if (!str) return;
  query.set(str);
  const params = new URLSearchParams({
    query: $query,
    langFrom: $langFrom,
    langTo: $langTo
  });
  loading.set(true);
  fetch(`http://localhost:4000/?${params}`)
    .then(data => data.json())
    .then(data => {
      result.set(data);
      loading.set(false);
    });
};
