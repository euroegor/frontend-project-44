// общая логика для всех игр
import readlineSync from 'readline-sync';

const ranNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getMotor = (mission, gameGear) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${mission}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = gameGear();
    console.log(`${'Question: '}${question}`);
    const name1 = readlineSync.question('Your answer: ');
    if (name1 === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${name1}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return console.log(`"Let's try again, ${name}!"`);
    }
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default { ranNum, getMotor };
