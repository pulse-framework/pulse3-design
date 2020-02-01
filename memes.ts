import core from './core';

window['pulse'] = core;
console.log(core);

// // direct state mutation is still possible
// core.accounts.state.CURRENT_ACCOUNT_ID.set(6);

// // example of a function call from new core
// core.accounts.create({ id: 1, email: 'jeff' });

// // core.accounts.data.currentAccountId;
