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

let prevParams;

export const translate = () => {
  const val = get(query)
    .trim()
    .toLowerCase();
  if (!val) return;
  const params = new URLSearchParams({
    query: val,
    langFrom: get(langFrom),
    langTo: get(langTo)
  }).toString();
  if (params === prevParams) return;
  prevParams = params;
  result.set(fetch(`http://localhost:${config.backPort}/?${params}`).then(data => data.json()));
};
