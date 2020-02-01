import { AccountState } from './AccountController';
import { AccountRoutes } from './AccountRoutes';
import { create } from './AccountBuilder';

export default {
  state: AccountState,
  routes: AccountRoutes,
  create
};
