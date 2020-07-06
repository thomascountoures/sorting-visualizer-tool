import React from 'react';
import { AppState } from '../redux/initialStates/AppState';
import { connect } from 'react-redux';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';
import { setRandomArray } from '../redux/actions/arrayActionHandlers';

const store = configureStore();

export interface SortingVisualizerProps {
  setRandomArray: typeof setRandomArray;
  maxArraySize: number;
  minArraySize: number;
}

export const SortingVisualizer = (props: SortingVisualizerProps) => {
  const { maxArraySize, minArraySize } = props;
  const resetRandomArray = () => {
    props.setRandomArray(maxArraySize, minArraySize);
  };

  React.useEffect(() => {
    props.setRandomArray(maxArraySize, minArraySize);
  }, []);

  return (
    <Provider store={store}>
      <div>hello world from provider!</div>
    </Provider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    randomArray: state.sortingVisualizer.randomArray,
  };
};

const actionCreators = {
  setRandomArray,
};

export default connect(
  mapStateToProps,
  actionCreators as any
)(SortingVisualizer);
