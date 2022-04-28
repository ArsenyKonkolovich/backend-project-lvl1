/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import getRandomInt from '../generateRandomNumb.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

// eslint-disable-next-line consistent-return
const isPrime = (num) => {
  for (let y = 2; y < num; y += 1) {
    if (num % y === 0) {
      return false;
    }
  }
};

const startGame = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(startGame, rules);
