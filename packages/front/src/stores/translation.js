import config from 'appRoot/config.js';
import { get, writable } from 'svelte/store';
import langs from '../constants/langs.js';

export const langFrom = writable(langs.English);
export const langTo = writable(langs.Russian);
export const query = writable('');
export const result = writable();

export const reverse = () => {
  const _langFrom = get(langFrom);
  const _langTo = get(langTo);
  langFrom.set(_langTo);
  langTo.set(_langFrom);
};

export const translate = () => {
  const str = get(query).trim();
  if (!str) return;
  const params = new URLSearchParams({
    query: str,
    langFrom: get(langFrom),
    langTo: get(langTo)
  });
  result.set(fetch(`http://localhost:${config.backPort}/?${params}`).then(data => data.json()));
};
