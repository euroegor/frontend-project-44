import { getMotor } from '../src/index.js';

const mission = 'Find the greatest common divisor of given numbers.';

const gameGear = () => {
  const divisor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  const ranNumNew = (min, max) => {
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
    return ranNumNew(min, max);
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
  const rndm = ranNumNew(1, 35);
  const b = MaxDivisor(rndm[0], rndm[1]);
  return [`${rndm[0]} ${rndm[1]}`, String(b)];
};

export default () => {
  getMotor(mission, gameGear);
};
