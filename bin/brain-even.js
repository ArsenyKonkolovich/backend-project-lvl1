#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import isEven from '../src/isEven.js';
import getRandomInt from '../src/generateRandomNumb.js';
import * as hi from '../src/index.js';

// minimum number, use only integer number
const minNumb = 1;
// maximum number, use only integer number
const maxNumb = 100;

// const randomNumb = getRandomInt(minNumb, maxNumb);

const maximumTrueAnswers = 3;

const name = hi.sayWelcomeAndName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameEngine = (answerCount) => {
  const randomNumb = getRandomInt(minNumb, maxNumb);
  if (answerCount === 0) {
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  let counter = answerCount;
  const answer = readlineSync.question(`Question: ${randomNumb}--> `);
  console.log(`Your answer: ${answer}!`);
  if (isEven(randomNumb) === 'yes' && answer === 'yes') {
    counter -= 1;
    console.log('Correct!');
    return gameEngine(counter);
  }
  if (isEven(randomNumb) === 'no' && answer === 'no') {
    counter -= 1;
    console.log('Correct!');
    return gameEngine(counter);
  }
  console.log(`Uh, no! Is wrong answer;(.
    Correct answer was ${isEven(randomNumb)}. Let 's try again, ${name}!!`);
  return true;
};

gameEngine(maximumTrueAnswers);
