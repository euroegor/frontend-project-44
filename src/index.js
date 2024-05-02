// общая логика для всех игр
import readlineSync from 'readline-sync';

const runGeneralLogic = (mission, startGame) => {
  const userreply1 = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${userreply1}${'!'}\n${mission}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = startGame();
    console.log(`${'Question: '}${question}`);
    const userreply2 = readlineSync.question('Your answer: ');
    if (userreply2 === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userreply2}' is wrong answer ;(. Correct answer was '${answer}'.\n"Let's try again, ${userreply1}!"`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${userreply1}${'!'}`);
};

export default runGeneralLogic;
