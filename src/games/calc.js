import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const min = 1;
const max = 100;
const operationSigns = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const operations = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomInt(min, max);
  const randomNumber2 = getRandomInt(min, max);
  const RandomOperationSigns = operationSigns[getRandomInt(0, operationSigns.length - 1)];
  const correctAnswer = operations(randomNumber1, randomNumber2, RandomOperationSigns);
  const question = `Question: ${randomNumber1} ${RandomOperationSigns} ${randomNumber2} --> `;
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
