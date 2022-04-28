import getRandomInt from '../generateRandomNumb.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 100;
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const arrOfOperation = [addition, subtraction, multiplication];
const operationSigns = ['+', '-', '*'];

const startGame = () => {
  const randomNumber1 = getRandomInt(min, max);
  const randomNumber2 = getRandomInt(min, max);
  const indexOfRandomOperation = getRandomInt(0, arrOfOperation.length - 1);
  const operation = arrOfOperation[indexOfRandomOperation];
  const operationSign = operationSigns[indexOfRandomOperation];
  const correctAnswer = operation(randomNumber1, randomNumber2);
  const question = `Question: ${randomNumber1} ${operationSign} ${randomNumber2} --> `;
  return [question, String(correctAnswer)];
};

export default () => gameEngine(startGame, rules);
