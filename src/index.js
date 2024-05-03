// общая логика для всех игр
import readlineSync from 'readline-sync';

const runGeneralLogic = (mission, roundDataGeneration) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${userName}${'!'}\n${mission}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = roundDataGeneration();
    console.log(`${'Question: '}${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n"Let's try again, ${userName}!"`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${userName}${'!'}`);
};

export default runGeneralLogic;
