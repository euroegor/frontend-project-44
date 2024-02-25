import readlineSync from 'readline-sync';

const GamePrime = () => {
  const PrimeTest = (num) => {
    const arr = [];
    for (let i = 1; i < 1000; i += 1) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 2) {
      return true;
    }
    return false;
  };
  const maxNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${'Answer "yes" if given number is prime. Otherwise answer "no".'}`);
  let i = 0;
  while (i < 3) {
    const rndm = maxNum(1, 100);
    console.log(`${'Question: '}${rndm}`);
    const name1 = readlineSync.question('Your answer: ');
    const a = name1;
    let b = '';
    if (PrimeTest(rndm) !== true) {
      b = 'no';
    } else {
      b = 'yes';
    }
    if (name1 === 'yes' && PrimeTest(rndm) === true) {
      console.log('Correct!');
    } else if (name1 === 'no' && PrimeTest(rndm) !== true) {
      console.log('Correct!');
    } else {
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
      return console.log(`"Let's try again, ${name}!"`);
    }
    i += 1;
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};
export default GamePrime;
