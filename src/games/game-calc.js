import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What is the result of the expression?';

const calculateNum = (number1, number2, mark) => {
  switch (mark) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${mark}'!`);
  }
};

const roundDataGeneration = () => {
  const randomSymbol = () => {
    const arr = ['+', '-', '*'];
    const randomIndex = ranNum(0, 2);
    return arr[randomIndex];
  };
  const sign = randomSymbol();
  const minrange = 1;
  const maxrange = 35;
  const num1 = ranNum(minrange, maxrange);
  const num2 = ranNum(minrange, maxrange);
  return [`${num1} ${sign} ${num2}`, String(calculateNum(num1, num2, sign))];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
