/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import getRandomInt from '../src/generateRandomNumb.js';
import gameEngine from '../src/index.js';

const rules = 'What number is missing in the progression?';

const startGame = () => {
  const firstNumber = getRandomInt(-10, 10);
  const step = getRandomInt(1, 10);

  const arrOfNum = [];
  arrOfNum[0] = firstNumber;
  for (let i = 1; i < 10; i += 1) {
    arrOfNum[i] = arrOfNum[i - 1] + step;
  }

  const missingEleomIndex = Math.floor(Math.random() * (arrOfNum.length - 1));
  const missingElem = arrOfNum[missingEleomIndex];
  arrOfNum[missingEleomIndex] = '..';

  const question = arrOfNum.join(' ');
  const correctAnswer = missingElem;
  return [question, String(correctAnswer)];
};

export default () => gameEngine(startGame, rules);
