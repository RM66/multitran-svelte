import config from 'appRoot/config.js';
import { get, writable } from 'svelte/store';

export const langFrom = writable('1');
export const langTo = writable('2');
export const query = writable('');
export const result = writable([]);

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
