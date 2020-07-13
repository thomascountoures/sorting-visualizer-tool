import React from 'react';
import { connect } from 'react-redux';
import { setRandomArray } from '../redux/actions/sortingVisualizerActionHandlers';
import { IAppState } from '../redux/initialStates/AppState';

export interface SortingVisualizerProps {
  maxArraySize: number;
  minArraySize: number;
  randomArray: number[];
  setRandomArray: (max: number, min: number) => number[];
}

const SortingVisualizer = (props: SortingVisualizerProps) => {
  console.log('props', props);

  const { maxArraySize, minArraySize, setRandomArray, randomArray } = props;

  React.useEffect(() => {
    setRandomArray(maxArraySize, minArraySize);
  }, []);

  return <div>hello world from provider!</div>;
};

const mapStateToProps = (state: IAppState) => ({
  randomArray: state.sortingVisualizer.randomArray,
});

const actionCreators = {
  setRandomArray,
};

// need to cast entire connect method as any here to
// get rid of typescript error where typescript does
// not know that connect injects some props into the
// component itself. by adhering to a prop interface
// with the component, typescript expects you to pass
// these props manually into the component.

// TLDR: typescript is stupid sometimes and we need
// to cast as any to get past linter errors.
export default connect(
  mapStateToProps,
  actionCreators as any
)(SortingVisualizer) as any;
