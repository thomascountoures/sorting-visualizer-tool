import { AppState } from './../initialStates/AppState';
import { ARRAY_ACTIONS } from './../actions/types';
import { IAction } from '../interfaces/IAction';
import produce from 'immer';

export const arrayReducers = (state = AppState, action: IAction) => {
  return produce((state, draft) => {
    switch (action.type) {
      case ARRAY_ACTIONS.SET_RANDOM_ARRAY:
        draft;
    }
  });
};
