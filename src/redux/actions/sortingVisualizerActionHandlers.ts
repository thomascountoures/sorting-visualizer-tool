import { mergeSort } from './../../algorithms/index';
import { getRandomIntFromInterval } from '../../util/getRandomIntFromInterval';
import { SORTING_VISUALIZER_ACTIONS } from './types';

export const setRandomArray = (
  arrayLength: number,
  maxSize: number,
  minSize: number
) => (dispatch: any) => {
  const result: number[] = [];

  for (let i = 0, length = arrayLength; i < length; i++) {
    result.push(getRandomIntFromInterval(maxSize, minSize));
  }

  dispatch({
    type: SORTING_VISUALIZER_ACTIONS.SET_RANDOM_ARRAY,
    payload: result,
  });
};

export const doMergeSort = (array: number[]) => (dispatch: any) => {
  console.log('doing merge sort');
  const mergeSortedArray = mergeSort(array);
  dispatch({
    type: SORTING_VISUALIZER_ACTIONS.DO_MERGE_SORT_ARRAY,
    payload: mergeSortedArray,
  });
};
