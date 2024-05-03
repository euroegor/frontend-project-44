import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What is the result of the expression?';

const roundDataGeneration = () => {
  const randomSymbol = () => {
    const arr = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomIndex];
  };
  const calculateNum = () => {
    const sign = randomSymbol();
    const minRange = 1;
    const maxRange = 35;
    const num1 = ranNum(minRange, maxRange);
    const num2 = ranNum(minRange, maxRange);
    switch (sign) {
      case '+':
        return [`${num1} ${sign} ${num2}`, String(num1 + num2)];
      case '-':
        return [`${num1} ${sign} ${num2}`, String(num1 - num2)];
      case '*':
        return [`${num1} ${sign} ${num2}`, String(num1 * num2)];
      default:
        throw new Error(`Unknown order state: '${sign}'!`);
    }
  };
  return calculateNum();
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
