import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const askAboutName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
