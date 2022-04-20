import readlineSync from "readline-sync";

export const askAboutName = () => {
  const name = readlineSync.question("May I have your name? ");
  return name;
};
