import readlineSync from 'readline-sync';
import * as hi from './cli.js';
// eslint-disable-next-line import/no-cycle
import nameOfPlayer from '../bin/brain-calc.js';

// eslint-disable-next-line import/prefer-default-export
export const sayWelcomeAndName = () => {
  console.log('Welcome to the Brain Games!');
  const name = hi.askAboutName();
  return name;
};

const addition = (num1, num2) => {
  const answer = readlineSync.question(`Question: ${num1} + ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  const result = num1 + num2;
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${nameOfPlayer}!`);
  return false;
};

const subtraction = (num1, num2) => {
  const result = num1 - num2;
  const answer = readlineSync.question(`Question: ${num1} - ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${nameOfPlayer}!`);
  return false;
};

const multiplication = (num1, num2) => {
  const result = num1 * num2;
  const answer = readlineSync.question(`Question: ${num1} * ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${nameOfPlayer}!`);
  return false;
};
const arrOfOperation = [addition, subtraction, multiplication];

export const getRandomOperation = (num1, num2) => {
  const result = arrOfOperation[Math.floor(Math.random() * arrOfOperation.length)](num1, num2);
  return result;
};
