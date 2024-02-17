import readlineSync from 'readline-sync';

const GameGcd = () => {
  const divisor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const maxNumNew = (min, max) => {
    const number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const test = [];
    let i = 0;
    while (i < divisor.length) {
      if (number1 % divisor[i] === 0 && number2 % divisor[i] === 0) {
        test.push(number1);
        test.push(number2);
      }
      i += 1;
    }
    if (test.length !== 0) {
      return test;
    }
    return maxNumNew(min, max);
  };
  const MaxDivisor = (num1, num2) => {
    const sortarr = [];
    /* eslint-disable-next-line */
    for (const j of divisor) {
      if (num1 % j === 0 && num2 % j === 0) {
        sortarr.push(j);
      }
    }
    return sortarr[sortarr.length - 1];
  };
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${'Find the greatest common divisor of given numbers.'}`);
  let i = 0;
  while (i < 3) {
    const rndm = maxNumNew(1, 50);
    console.log(`${'Question: '}${rndm[0]} ${rndm[1]}`);
    const name1 = readlineSync.question('Your answer: ');
    const a = name1;
    const b = MaxDivisor(rndm[0], rndm[1]);
    if (rndm[0] % Number(name1) === 0 && rndm[1] % Number(name1) === 0
    && Number(name1) === MaxDivisor(rndm[0], rndm[1])) {
      console.log('Correct!');
    } else {
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
      return console.log(`"Let's try again, ${name}!"`);
    }
    i += 1;
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};
export default GameGcd;
