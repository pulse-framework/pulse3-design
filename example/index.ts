import React from 'react';
import Pulse, { Request, Collection } from '../lib/main';

// Controllers
import AccountController from './modules/accounts';

// creates an instance of Pulse with runtime
export const App = new Pulse({
  framework: React,
  plugins: [Request, Collection]
});

export const baseURL = App.State('https://api.notify.me').persist();
export const NotifyAPI = Request.API({
  baseURL,
  credentials: 'include',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': 'https://notify.best',
    Origin: 'https://notify.best', // For mobile app only.
    Dev: false
  }
});

export default {
  AccountController
};
