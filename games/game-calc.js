import readlineSync from 'readline-sync';

const GameCalc = () => {
  const maxNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const RandomCharacter = () => {
    const arr = ['+', '-', '*', '-', '*', '+', '-', '+', '*'];
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    const result = arr[randomIndex];
    return result;
  };
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${'What is the result of the expression?'}`);
  let i = 0;
  while (i < 3) {
    const character = RandomCharacter();
    const rndm = maxNum(1, 50);
    const mdnr = maxNum(1, 50);
    console.log(`${'Question: '}${rndm} ${character} ${mdnr}`);
    const name1 = readlineSync.question('Your answer: ');
    const a = name1;
    let b = '';
    if (character === '+') {
      b = rndm + mdnr;
    } else if (character === '-') {
      b = rndm - mdnr;
    } else {
      b = rndm * mdnr;
    }
    if (Number(name1) === rndm + mdnr && character === '+') {
      console.log('Correct!');
    } else if (Number(name1) === rndm - mdnr && character === '-') {
      console.log('Correct!');
    } else if (Number(name1) === rndm * mdnr && character === '*') {
      console.log('Correct!');
    } else {
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
      return console.log(`"Let's try again, ${name}!"`);
    }
    i += 1;
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};
export default GameCalc;
