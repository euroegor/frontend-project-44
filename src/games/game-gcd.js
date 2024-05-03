import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Find the greatest common divisor of given numbers.';

const roundDataGeneration = () => {
  const minrange = 1;
  const maxrange = 50;
  const num1 = ranNum(minrange, maxrange);
  const num2 = ranNum(minrange, maxrange);
  const arr = [];
  for (let i = 2; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return roundDataGeneration();
  }
  return [`${num1} ${num2}`, String(arr[arr.length - 1])];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
