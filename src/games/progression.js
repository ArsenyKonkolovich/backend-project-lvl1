import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const countOfRound = 10;

const generateProgression = (firstNumber, step) => {
  const progression = [];
  for (let i = 0; i < countOfRound; i += 1) {
    progression.push(firstNumber + (step * i));
  }

  const missingEleomIndex = getRandomInt(0, progression.length - 1);
  const missingElem = progression[missingEleomIndex];
  progression[missingEleomIndex] = '..';

  return [progression, missingElem];
};

const generateRound = () => {
  const firstNumber = getRandomInt(-10, 10);
  const step = getRandomInt(1, 10);
  const [progression, missingElem] = generateProgression(firstNumber, step);
  const question = progression.join(' ');
  const correctAnswer = missingElem;
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
