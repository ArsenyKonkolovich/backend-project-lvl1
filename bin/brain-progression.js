#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import { sayWelcomeAndName } from '../src/index.js';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import getRandomInt from '../src/generateRandomNumb.js';

const name = sayWelcomeAndName();
console.log('What is the result of the expression?');
const minNumb = 1;
const maxNumb = 20;
const minStep = 2;
const maxStep = 5;
const arrOfNum = [];

const gameEngine = () => {
  for (let x = 3; x >= 0; x -= 1) {
    if (x === 0) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const step = getRandomInt(minStep, maxStep);
    arrOfNum[0] = getRandomInt(minNumb, maxNumb);
    for (let i = 1; i < 10; i += 1) {
      arrOfNum[i] = arrOfNum[i - 1] + step;
    }
    const missingEleomIndex = Math.floor(Math.random() * (arrOfNum.length - 1));
    const missingElem = arrOfNum[missingEleomIndex];
    arrOfNum[missingEleomIndex] = '..';
    const answer = readlineSync.question(`Question: ${arrOfNum.join(' ')}--> `);
    console.log(`Your answer: ${answer}!`);
    if (Number(answer) === missingElem) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${missingElem}. Let's try again, ${name}!`);
      break;
    }
  }
};

gameEngine();
