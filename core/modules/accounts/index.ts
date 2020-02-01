import {
  CURRENT_ACCOUNT_ID,
  SOME_SWITCH,
  THING_ONE,
  THING_TWO,
  myAccount,
  memeTime,
  doStuff,
  AccountCollection
} from './accounts';
import { ACCOUNT_TEMPLATE, create } from './builder';

export const AccountController = {
  AccountCollection,
  myAccount,
  doStuff,
  create,
  memeTime,
  state: {
    ACCOUNT_TEMPLATE,
    CURRENT_ACCOUNT_ID,
    SOME_SWITCH,
    THING_ONE,
    THING_TWO
  }
};
