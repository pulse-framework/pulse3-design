import React from 'react';
import Pulse, { Request, Collection } from '../lib/core/Root';

// creates an instance of Pulse with runtime
export default new Pulse({
  framework: React,
  plugins: [Request, Collection]
});
