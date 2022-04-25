#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */

// eslint-disable-next-line import/no-named-as-default
import getRandomInt from '../src/generateRandomNumb.js';
// eslint-disable-next-line import/no-cycle
import { getRandomOperation, sayWelcomeAndName } from '../src/index.js';

const min = 0;
const max = 99;

console.log('Welcome to brain games!');
const name = sayWelcomeAndName();
console.log('What is the result of the expression?');

const gameEngine = () => {
  for (let i = 3; i >= 0; i -= 1) {
    if (i === 0) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const randomNumber1 = getRandomInt(min, max);
    const randomNumber2 = getRandomInt(min, max);
    const result = getRandomOperation(name, randomNumber1, randomNumber2);
    if (!result) {
      break;
    }
  }
};

gameEngine();
