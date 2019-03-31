import fetch from 'node-fetch';


export const Headers = {
  'Content-Type': 'application/json'
};

// COMMON GET HTTP
export async function Get(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(error => error)
}

// COMMON POST HTTP
export async function Post(url, headers) {
  return fetch(url, headers)
    .then(res => res.json())
    .catch(error => error)
}
