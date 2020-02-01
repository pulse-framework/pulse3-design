import App from '../../core';
import { ACCOUNT_TEMPLATE } from './AccountBuilder';
import { StateGroup, persist } from '../../../lib/root';
import { NotifyAPI } from '../../api';

export interface AccountBody {
  id?: number;
  email?: string;
  status?: string;
}

export const AccountState = App.StateGroup({
  DATA_LOADED: false,
  CURRENT_ACCOUNT_ID: 0,
  LAST_EMAIL: false,
  MFA_TICKET: false,
  SESSION_TOKEN: false,
  IS_NEW_ACCOUNT: false
});

persist([
  AccountState.CURRENT_ACCOUNT_ID,
  AccountState.LAST_EMAIL,
  AccountState.SESSION_TOKEN
]);

AccountState.DATA_LOADED.watch(() => {});

export const AccountCollection = App.Collection({
  groups: ['AUTHED']
});

export const isAuth = App.Computed([AccountState.SESSION_TOKEN], function() {
  return AccountState.SESSION_TOKEN.isSet;
});

export function logout(): void {
  AccountState.SESSION_TOKEN.reset();
}
