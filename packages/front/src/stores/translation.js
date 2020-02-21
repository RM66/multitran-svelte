import config from 'appRoot/config.js';
import { get, writable, derived } from 'svelte/store';

export const query = writable('');
export const langFrom = writable(localStorage.getItem('lang-from') || '1');
export const langTo = writable(localStorage.getItem('lang-to') || '2');

langFrom.subscribe(val => localStorage.setItem('lang-from', val));
langTo.subscribe(val => localStorage.setItem('lang-to', val));

export const result = writable();

export const reverse = () => {
  const _langFrom = get(langFrom);
  const _langTo = get(langTo);
  langFrom.set(_langTo);
  langTo.set(_langFrom);
};

let prevParams = writable(new URLSearchParams());

export const normalQuery = derived(query, ($query, set) => set($query.trim().toLowerCase()), '');

export const sameParams = derived(
  [prevParams, normalQuery, langFrom, langTo],
  ([$prevParams, $normalQuery, $langFrom, $langTo], set) => {
    set(
      $prevParams.get('query') === $normalQuery &&
        $prevParams.get('langFrom') === $langFrom &&
        $prevParams.get('langTo') === $langTo
    );
  },
  false
);

export const translate = () => {
  if (!get(normalQuery) || get(sameParams)) return;
  const params = new URLSearchParams({
    query: get(normalQuery),
    langFrom: get(langFrom),
    langTo: get(langTo)
  });
  prevParams.set(params);
  result.set(fetch(`http://localhost:${config.backPort}/?${params}`).then(data => data.json()));
};
