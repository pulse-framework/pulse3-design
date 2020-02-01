import React from 'react';
import Pulse, { Request, Collection } from '../lib/main';

// creates an instance of Pulse with runtime
export default new Pulse({
  framework: React,
  plugins: [Request, Collection]
});
