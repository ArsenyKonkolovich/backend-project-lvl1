import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(generateRound, rules);
