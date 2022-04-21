#!/usr/bin/env node

import * as hi from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = hi.askAboutName();
console.log(`Hello ${name}`);
