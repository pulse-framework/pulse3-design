import App from '../../core';
import { AccountBody, AccountState } from './AccountController';
import devices from '../devices';
import { AccountRoutes } from './AccountRoutes';

export const ACCOUNT_TEMPLATE = App.State({
  username: 'jamie',
  displayName: 'Jamie Pine'
});

interface NewAccount extends AccountBody {
  dev: boolean;
  pushToken: string;
  type: string;
  mobile: boolean;
}

export async function create(account: NewAccount): Promise<AccountBody> {
  if (process.env.NODE_ENV == 'development') account.dev = true;

  if (devices.state.PUSH_TOKEN.isSet) {
  }

  // think of a better return??
  const res = await AccountRoutes.create(account);

  return res.data;
}
