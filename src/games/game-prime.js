import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  const primeTest = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 2) {
      return true;
    }
    return false;
  };
  const minrange = 1;
  const maxrange = 50;
  const rndm = ranNum(minrange, maxrange);
  if (primeTest(rndm)) {
    return [rndm, 'yes'];
  }
  return [rndm, 'no'];
};

export default () => {
  runGeneralLogic(mission, startGame);
};
