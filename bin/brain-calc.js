/* eslint-disable import/no-named-as-default-member */

// eslint-disable-next-line import/no-named-as-default
import getRandomInt from '../src/generateRandomNumb.js';
// eslint-disable-next-line import/no-cycle
import * as index from '../src/index.js';

const min = 0;
const max = 99;

const nameOfPlayer = index.sayWelcomeAndName();
console.log('What is the result of the expression?');

const gameEngine = () => {
  for (let i = 3; i >= 0; i -= 1) {
    if (i === 0) {
      console.log(`Congratulations, ${nameOfPlayer}!`);
      break;
    }
    const randomNumber1 = getRandomInt(min, max);
    const randomNumber2 = getRandomInt(min, max);
    const result = index.getRandomOperation(randomNumber1, randomNumber2);
    if (!result) {
      break;
    }
  }
};

export default nameOfPlayer;

gameEngine();
