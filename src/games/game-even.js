import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const roundDataGeneration = () => {
  const minrange = 1;
  const maxrange = 100;
  const rannum = ranNum(minrange, maxrange);
  const answer = isEven(rannum) ? 'yes' : 'no';
  return [rannum, answer];
};
export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
