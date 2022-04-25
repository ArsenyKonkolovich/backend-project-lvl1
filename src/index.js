/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import * as hi from './cli.js';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member

// eslint-disable-next-line import/prefer-default-export
export const sayWelcomeAndName = () => {
  console.log('Welcome to the Brain Games!');
  const name = hi.askAboutName();
  return name;
};

const addition = (name, num1, num2) => {
  const answer = readlineSync.question(`Question: ${num1} + ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  const result = num1 + num2;
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
  return false;
};

const subtraction = (name, num1, num2) => {
  const result = num1 - num2;
  const answer = readlineSync.question(`Question: ${num1} - ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
  return false;
};

const multiplication = (name, num1, num2) => {
  const result = num1 * num2;
  const answer = readlineSync.question(`Question: ${num1} * ${num2}--> `);
  console.log(`Your answer: ${answer}!`);
  if (Number(answer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
  return false;
};
const arrOfOperation = [addition, subtraction, multiplication];

export const getRandomOperation = (name, num1, num2) => {
  // eslint-disable-next-line max-len
  const result = arrOfOperation[Math.floor(Math.random() * arrOfOperation.length)](name, num1, num2);
  return result;
};

export const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};
