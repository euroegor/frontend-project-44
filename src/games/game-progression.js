import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What number is missing in the progression?';

const roundDataGeneration = () => {
  const ranProgression = () => {
    const mindiff = 2;
    const maxdiff = 10;
    const num1 = ranNum(mindiff, maxdiff);
    const minrange = 1;
    const maxrange = 100;
    const num2 = ranNum(minrange, maxrange);
    const arr = [];
    for (let i = num2; arr.length < maxdiff; i += num1) {
      arr.push(i);
    }
    return arr;
  };
  const ran = ranProgression();
  const minrange = 0;
  const maxrange = 9;
  const num3 = ranNum(minrange, maxrange);
  const b = String(ran[num3]);
  ran[num3] = '..';
  const a = ran.join(' ');
  return [a, b];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
