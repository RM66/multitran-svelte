import config from 'appRoot/config.js';
import { get, writable } from 'svelte/store';
import langs from '../constants/langs.js';

export const langFrom = writable(langs.English);
export const langTo = writable(langs.Russian);
export const query = writable('');
export const result = writable();

export const translate = str => {
  if (!str) return;
  query.set(str);
  const params = new URLSearchParams({
    query: get(query),
    langFrom: get(langFrom),
    langTo: get(langTo)
  });
  result.set(
    fetch(`http://localhost:${config.backPort}/?${params}`).then(data => data.json())
  );
};
