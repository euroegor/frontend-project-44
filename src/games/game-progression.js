import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What number is missing in the progression?';

const gameGear = () => {
  const RanProgression = () => {
    const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr2 = [];
    const num1 = arr1[ranNum(0, 8)];
    for (let i = ranNum(0, 100); i < 1000; i += num1) {
      arr2.push(i);
      if (arr2.length === 10) {
        break;
      }
    }
    return arr2;
  };
  const ran = RanProgression();
  const num3 = ranNum(0, 9);
  const b = String(ran[num3]);
  ran[num3] = '..';
  const a = ran.join(' ');
  return [a, b];
};

export default () => {
  runGeneralLogic(mission, gameGear);
};
