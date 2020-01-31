import { reactive } from '../../../lib/main';
import {
  CURRENT_ACCOUNT_ID,
  SOME_SWITCH,
  THING_ONE,
  THING_TWO,
  AccountCollection,
  myAccount,
  doStuff
} from './accounts';
import { ACCOUNT_TEMPLATE, create } from './builder';

const hot: {
  currentAccountId: number;
} = reactive({
  currentAccountId: CURRENT_ACCOUNT_ID
});

// Controller Root
export default {
  myAccount,
  doStuff,
  create,
  state: {
    ACCOUNT_TEMPLATE,
    CURRENT_ACCOUNT_ID,
    SOME_SWITCH,
    THING_ONE,
    THING_TWO
  },

  currentAccount: CURRENT_ACCOUNT_ID.value,
  collections: {
    AccountCollection
  }
};
