import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What number is missing in the progression?';

const roundDataGeneration = () => {
  const ranProgression = () => {
    const minDiff = 2;
    const maxDiff = 10;
    const num1 = ranNum(minDiff, maxDiff);
    const minRange = 1;
    const maxRange = 100;
    const num2 = ranNum(minRange, maxRange);
    const arr = [];
    for (let i = num2; arr.length < maxDiff; i += num1) {
      arr.push(i);
    }
    return arr;
  };
  const ran = ranProgression();
  const minRange = 0;
  const maxRange = 9;
  const num3 = ranNum(minRange, maxRange);
  const missingNumber = String(ran[num3]);
  ran[num3] = '..';
  const readyProgression = ran.join(' ');
  return [readyProgression, missingNumber];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
