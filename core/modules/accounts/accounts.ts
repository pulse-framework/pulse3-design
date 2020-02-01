import App from '../../core';
import { ACCOUNT_TEMPLATE } from './builder';

// ---- Interfaces ----
// Define a interface in typescript for your collection data structure
export interface AccountBody {
  id: number;
  email: string;
  status?: string;
}

// ---- State ----
// Define state with defaults and modifiers
export const CURRENT_ACCOUNT_ID = App.State(0);

export const SOME_SWITCH = App.State(false)
  .type(Boolean)
  .persist();

export const { THING_ONE, THING_TWO } = App.StateGroup({
  THING_ONE: true,
  THING_TWO: false
});

// ---- Actions ----
// Actions are now simply functions. This example is featuring state mutation examples.
export function doStuff(yes: string): void {
  // regular set function, will completely replace value
  CURRENT_ACCOUNT_ID.set(2);
  // type is a boolean allowing toggle() to work
  SOME_SWITCH.toggle();
  // will modify only a property of the value
  ACCOUNT_TEMPLATE.patch({ username: 'jamie' });
}

// ---- Collections ----
// Create a collection instance
export const AccountCollection = App.Collection({
  primaryKey: 'id',
  groups: ['AUTHED']
});

// --- Computed ----
// The first parameter is the dependencies for this computed function
export const myAccount = App.Computed(
  [CURRENT_ACCOUNT_ID, SOME_SWITCH, ACCOUNT_TEMPLATE],
  function() {
    return AccountCollection.findById(CURRENT_ACCOUNT_ID.value);
  }
);

// ---- Watchers ----
// The watcher is stored inside the State class itself
CURRENT_ACCOUNT_ID.watch((newVal, oldVal) => console.log(newVal, oldVal));
