import { sortingVisualizerInitialState } from '../initialStates/SortingVisualizerState';
import { SORTING_VISUALIZER_ACTIONS } from '../actions/types';
import { IAction } from '../interfaces/IAction';
import produce from 'immer';

export const sortingVisualizerReducer = (
  state = sortingVisualizerInitialState,
  action: IAction
) => {
  return produce(state, (draft) => {
    console.log('reducer active');
    switch (action.type) {
      case SORTING_VISUALIZER_ACTIONS.SET_RANDOM_ARRAY:
        console.log('setting reducer', action.payload);
        draft.randomArray = action.payload;
        return draft;

      case SORTING_VISUALIZER_ACTIONS.DO_MERGE_SORT_ARRAY:
        draft.randomArray = action.payload;
        return draft;

      default:
        return draft;
    }
  });
};
