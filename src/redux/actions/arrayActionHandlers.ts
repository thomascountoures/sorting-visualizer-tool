import { getRandomIntFromInterval } from '../../util/getRandomIntFromInterval';
import { ARRAY_ACTIONS } from './types';

export const setRandomArray = (
  maxSize: number,
  minSize: number
) => dispatch => {
  const result: number[] = [];
  for (let i = 0, length = maxSize; i < length; i++) {
    result.push(getRandomIntFromInterval(maxSize, minSize));
  }

  dispatch({
    type: ARRAY_ACTIONS.SET_RANDOM_ARRAY,
    payload: result,
  });
};
