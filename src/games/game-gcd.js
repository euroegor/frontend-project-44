import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Find the greatest common divisor of given numbers.';

const numberChek = (number1, number2, variable) => number1 % variable === 0
  && number2 % variable === 0;

const roundDataGeneration = () => {
  const minRange = 1;
  const maxRange = 50;
  const num1 = ranNum(minRange, maxRange);
  const num2 = ranNum(minRange, maxRange);
  const arr = [];
  for (let i = 2; i <= num1 && i <= num2; i += 1) {
    if (numberChek(num1, num2, i)) {
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
