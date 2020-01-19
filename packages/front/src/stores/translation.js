import { derived, writable } from 'svelte/store';
import langs from '../constants/langs.js';

export const langFrom = writable(langs.English);
export const langTo = writable(langs.Russian);
export const query = writable('');
export const loading = writable(false);

export const src = derived([langFrom, langTo, query], ([$langFrom, $langTo, $query]) => {
  if (!$query) return;
  loading.set(true);
  return `https://www.multitran.com/m.exe?s=${$query}&l1=${$langFrom}&l2=${$langTo}`;
});

export const result = writable();