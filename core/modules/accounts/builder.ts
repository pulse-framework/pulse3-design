import App from '../../core';
import { AccountBody } from './accounts';

export const ACCOUNT_TEMPLATE = App.State({
  username: 'jamie',
  displayName: 'Jamie Pine'
});

export function create(account: AccountBody): AccountBody {
  ACCOUNT_TEMPLATE.patch({ username: 'jamie' });
  return ACCOUNT_TEMPLATE.value;
}
