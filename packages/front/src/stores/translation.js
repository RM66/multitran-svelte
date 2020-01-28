import config from 'appRoot/config.js';
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
    //TODO: брать значения из writable
    query: query,
    langFrom: langFrom,
    langTo: langTo
  });
  loading.set(true);
  fetch(`http://localhost:${config.backPort}/?${params}`)
    .then(data => data.json())
    .then(data => {
      result.set(data);
      loading.set(false);
    });
};
