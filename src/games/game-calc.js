import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What is the result of the expression?';

const roundDataGeneration = () => {
  const randomSymbol = () => {
    const arr = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomIndex];
  };
  const calculateNum = (num1, num2, sign) => {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error(`Unknown order state: '${sign}'!`);
    }
  };
  const symbol = randomSymbol();
  const minrange = 1;
  const maxrange = 35;
  const rndm = ranNum(minrange, maxrange);
  const mdnr = ranNum(minrange, maxrange);
  if (symbol === '*') {
    return [`${rndm} ${symbol} ${mdnr}`, String(calculateNum(rndm, mdnr, '*'))];
  } if (symbol === '-') {
    return [`${rndm} ${symbol} ${mdnr}`, String(calculateNum(rndm, mdnr, '-'))];
  }
  return [`${rndm} ${symbol} ${mdnr}`, String(calculateNum(rndm, mdnr, '+'))];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
