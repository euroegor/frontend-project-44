// общая логика для всех игр
import readlineSync from 'readline-sync';

const runGeneralLogic = (mission, roundDataGeneration) => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${username}${'!'}\n${mission}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = roundDataGeneration();
    console.log(`${'Question: '}${question}`);
    const useranswer = readlineSync.question('Your answer: ');
    if (useranswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\n"Let's try again, ${username}!"`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${username}${'!'}`);
};

export default runGeneralLogic;
