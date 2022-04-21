import readlineSync from 'readline-sync';

const askAboutName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default askAboutName;
