import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundDataGeneration = () => {
  const primeTest = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const minRange = 1;
  const maxRange = 50;
  const rndm = ranNum(minRange, maxRange);
  return primeTest(rndm) ? [rndm, 'yes'] : [rndm, 'no'];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
