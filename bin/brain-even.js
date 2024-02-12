#!/usr/bin/env node
import readlineSync from 'readline-sync';

const maxNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GameEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${name}${'!'}\n${'Answer "yes" if the number is even, otherwise answer "no".'}`);
  let i = 0;
  while (i < 3) {
    const rndm = maxNum(1, 1000);
    console.log(`${'Question: '}${rndm}`);
    const name1 = readlineSync.question('Your answer: ');
    const a = name1;
    let b = '';
    if (rndm % 2 === 0) {
      b = 'yes';
    } else {
      b = 'no';
    }
    if (name1 === 'yes' && rndm % 2 === 0) {
      console.log('Correct!');
    } else if (name1 === 'no' && rndm % 2 !== 0) {
      console.log('Correct!');
    } else {
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.`);
      return console.log("Let's try again, Bill!");
    }
    i += 1;
  }
  return console.log(`${'Congratulations, '}${name}${'!'}`);
};

GameEven();
