import runGeneralLogic from '../index.js';
import ranNum from '../randomnum.js';

const mission = 'What number is missing in the progression?';

const roundDataGeneration = () => {
  const ranProgression = (num1, num2) => {
    const maxLengthArr = 10;
    const arr = [];
    for (let i = num2; arr.length < maxLengthArr; i += num1) {
      arr.push(i);
    }
    return arr;
  };
  const minDiff = 2;
  const maxDiff = 10;
  const num1 = ranNum(minDiff, maxDiff);
  const minRange = 1;
  const maxRange = 100;
  const num2 = ranNum(minRange, maxRange);
  const ran = ranProgression(num1, num2);
  const minRange2 = 0;
  const maxRange2 = 9;
  const num3 = ranNum(minRange2, maxRange2);
  const missingNumber = String(ran[num3]);
  ran[num3] = '..';
  const readyProgression = ran.join(' ');
  return [readyProgression, missingNumber];
};

export default () => {
  runGeneralLogic(mission, roundDataGeneration);
};
