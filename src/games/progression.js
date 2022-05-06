import getRandomInt from '../generateRandomNumb.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (firstNumber, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + (step * i));
  }

  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInt(-10, 10);
  const step = getRandomInt(1, 10);
  const progression = generateProgression(firstNumber, step);
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => startGame(generateRound, rules);
