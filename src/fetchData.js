export function fetchData(idx = 0, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(records[idx]);
    }, delay + 500 * Math.random());
  });
}

import { writable, get } from "svelte/store";

export const news = writable({});

export async function getNews() {
  let char = get(data)[idx];
  if (char) return char;

  let API = "http://localhost:3789/api/news";
  response = await fetch(API);
  news  = await response.json();
  return news;
}
