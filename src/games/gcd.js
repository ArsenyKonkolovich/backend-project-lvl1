/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import getRandomInt from '../generateRandomNumb.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const min = 0;
const max = 100;

const startGame = () => {
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => gameEngine(startGame, rules);
