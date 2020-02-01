import {
  CURRENT_ACCOUNT_ID,
  SOME_SWITCH,
  THING_ONE,
  THING_TWO,
  myAccount,
  doStuff
} from './accounts';
import { ACCOUNT_TEMPLATE, create } from './builder';

export const AccountController = {
  myAccount,
  doStuff,
  create,
  state: {
    ACCOUNT_TEMPLATE,
    CURRENT_ACCOUNT_ID,
    SOME_SWITCH,
    THING_ONE,
    THING_TWO
  }
};
