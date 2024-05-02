import { getMotor, ranNum } from '../src/index.js';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameGear = () => {
  const rannum = ranNum(1, 100);
  if (rannum % 2 === 0) {
    return [rannum, 'yes'];
  }
  return [rannum, 'no'];
};

export default () => {
  getMotor(mission, gameGear);
};
