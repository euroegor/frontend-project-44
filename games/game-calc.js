import { getMotor, ranNum } from '../src/index.js';

const mission = 'What is the result of the expression?';

const gameGear = () => {
  const RandomSymbol = () => {
    const arr = ['+', '-', '*', '-', '*', '+', '-', '+', '*'];
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    const result = arr[randomIndex];
    return result;
  };
  const symbol = RandomSymbol();
  const rndm = ranNum(1, 35);
  const mdnr = ranNum(1, 35);
  if (symbol === '*') {
    return [`${rndm} ${symbol} ${mdnr}`, String(rndm * mdnr)];
  } if (symbol === '-') {
    return [`${rndm} ${symbol} ${mdnr}`, String(rndm - mdnr)];
  }
  return [`${rndm} ${symbol} ${mdnr}`, String(rndm + mdnr)];
};

export default () => {
  getMotor(mission, gameGear);
};
