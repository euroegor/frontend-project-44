import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What is the result of the expression?';

const startGame = () => {
  const randomSymbol = () => {
    const arr = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    const result = arr[randomIndex];
    return result;
  };
  const calculateNum = (num1, num2, sign) => {
    if (sign === '+') {
      return num1 + num2;
    } if (sign === '-') {
      return num1 - num2;
    } return num1 * num2;
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
  runGeneralLogic(mission, startGame);
};
