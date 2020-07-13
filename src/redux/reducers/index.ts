import { sortingVisualizerReducer } from './sortingVisualizerReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  sortingVisualizer: sortingVisualizerReducer,
});
