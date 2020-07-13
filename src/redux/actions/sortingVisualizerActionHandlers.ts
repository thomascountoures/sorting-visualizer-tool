import { getRandomIntFromInterval } from '../../util/getRandomIntFromInterval';
import { SORTING_VISUALIZER_ACTIONS } from './types';

export const setRandomArray = (maxSize: number, minSize: number) => (
  dispatch: any
) => {
  const result: number[] = [];
  for (let i = 0, length = maxSize; i < length; i++) {
    result.push(getRandomIntFromInterval(maxSize, minSize));
  }

  dispatch({
    type: SORTING_VISUALIZER_ACTIONS.SET_RANDOM_ARRAY,
    payload: result,
  });
};
