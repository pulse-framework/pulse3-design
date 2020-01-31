import { App } from '../../index';
import { AccountBody } from './accounts';

export const ACCOUNT_TEMPLATE = App.State({
  username: null,
  displayName: null
});

export function create(account: AccountBody): AccountBody {
  ACCOUNT_TEMPLATE.patch({ username: 'jamie' });
  return ACCOUNT_TEMPLATE.value;
}
