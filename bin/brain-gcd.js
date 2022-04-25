#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */

import readlineSync from 'readline-sync';
import * as hi from '../src/cli.js';
/* import * as index from '../src/index.js'; */
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import getRandomInt from '../src/generateRandomNumb.js';
import { gcd } from '../src/index.js';

const min = 1;
const max = 99;

/* const name = index.sayWelcomeAndName(); */

console.log('Welcome to brain games!');
const name = hi.askAboutName();
console.log('Find the greatest common divisor of given numbers.');

const gameEngine = () => {
  for (let i = 3; i >= 0; i -= 1) {
    if (i === 0) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const randomNumber1 = getRandomInt(min, max);
    const randomNumber2 = getRandomInt(min, max);
    const rightAnswer = gcd(randomNumber1, randomNumber2);
    const answer = readlineSync.question(`Question: ${randomNumber1}  ${randomNumber2}--> `);
    console.log(`Your answer: ${answer}!`);

    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
      break;
    }
  }
};

gameEngine();
