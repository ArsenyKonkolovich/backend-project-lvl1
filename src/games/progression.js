import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstNumber = getRandomInt(-10, 10);
  const step = getRandomInt(1, 10);

  const arrOfNum = [];
  arrOfNum[0] = firstNumber;
  for (let i = 1; i < 10; i += 1) {
    arrOfNum[i] = arrOfNum[i - 1] + step;
  }

  const missingEleomIndex = getRandomInt(0, arrOfNum.length - 1);
  const missingElem = arrOfNum[missingEleomIndex];
  arrOfNum[missingEleomIndex] = '..';

  return [arrOfNum, missingElem];
};

const generateRound = () => {
  const [arrOfNum, missingElem] = generateProgression();
  const question = arrOfNum.join(' ');
  const correctAnswer = missingElem;
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
