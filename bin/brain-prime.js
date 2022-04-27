#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import { sayWelcomeAndName } from '../src/index.js';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import getRandomInt from '../src/generateRandomNumb.js';

const name = sayWelcomeAndName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const minNumb = 1;
const maxNumb = 100;

const gameEngine = () => {
  for (let x = 3; x >= 0; x -= 1) {
    if (x === 0) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const randomNum = getRandomInt(minNumb, maxNumb);
    let flag = true;
    for (let y = 2; y < randomNum; y += 1) {
      if (randomNum % y === 0) {
        flag = false;
        break;
      }
    }
    const expectAnswer = (flag) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${randomNum}--> `);
    console.log(`Your answer: ${answer}!`);
    if ((answer === 'yes' && expectAnswer === 'yes') || (answer === 'no' && expectAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectAnswer}'. Let's try again, ${name}!`);
      break;
    }
  }
};

gameEngine();
