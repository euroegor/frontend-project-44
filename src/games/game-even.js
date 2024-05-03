import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const roundDataGeneration = () => {
  const minRange = 1;
  const maxRange = 100;
  const rannum = ranNum(minRange, maxRange);
  const answer = isEven(rannum) ? 'yes' : 'no';
  return [rannum, answer];
};
export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
