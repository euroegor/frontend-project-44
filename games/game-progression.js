import readlineSync from 'readline-sync';

const GameProgression = () => {
  const RanNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${'What number is missing in the progression?'}`);
  const RanProgression = () => {
    const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr2 = [];
    const num1 = arr1[RanNum(0, 8)];
    for (let i = RanNum(0, 100); i < 1000; i += num1) {
      arr2.push(i);
      if (arr2.length === 10) {
        break;
      }
    }
    return arr2;
  };
  let i = 0;
  while (i < 3) {
    const ran = RanProgression();
    const num3 = RanNum(0, 9);
    const b = ran[num3];
    ran[num3] = '..';
    console.log(`${'Question: '}${ran.join(' ')}`);
    const name1 = readlineSync.question('Your answer: ');
    const a = name1;
    if (Number(name1) === b) {
      console.log('Correct!');
    } else {
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
      return console.log(`"Let's try again, ${name}!"`);
    }
    i += 1;
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default GameProgression;
