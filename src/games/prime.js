import getRandomInt from '../generateRandomNumb.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);
  for (let y = 2; y < sqrtNum; y += 1) {
    if (num % y === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const question = String(getRandomInt(min, max));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(startGame, rules);
