import App from '../core';

export const BASE_URL = App.State('https://api.notify.me').persist();

export const HEADERS = App.State({
  'Access-Control-Allow-Origin': 'https://notify.best',
  Origin: 'https://notify.best',
  Dev: false
});

export const NotifyAPI = {};

// export const NotifyAPI = App.Request.API({
//   baseURL: BASE_URL.value,
//   credentials: 'include',
//   timeout: 10000,
//   headers: HEADERS.value
// });
