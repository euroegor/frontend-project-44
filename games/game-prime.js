import { getMotor, ranNum } from '../src/index.js';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameGear = () => {
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

  const rndm = ranNum(1, 50);
  if (PrimeTest(rndm)) {
    return [rndm, 'yes'];
  }
  return [rndm, 'no'];
};

export default () => {
  getMotor(mission, gameGear);
};
