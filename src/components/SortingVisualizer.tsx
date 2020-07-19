import React from 'react';
import { connect } from 'react-redux';
import {
  setRandomArray,
  doMergeSort,
  doBubbleSort,
} from '../redux/actions/sortingVisualizerActionHandlers';
import { IAppState } from '../redux/initialStates/AppState';
import { SortingVisualizerArrayBars } from './SortingVisualizerArrayBars';

export interface SortingVisualizerProps {
  maxArrayBarHeight: number;
  minArrayBarHeight: number;
  randomArray: number[];
  setRandomArray: (arrayLength: number, max: number, min: number) => void;
  arrayLength: number;
  doMergeSort: (array: number[]) => void;
  doBubbleSort: (array: number[]) => void;
}

const SortingVisualizer = (props: SortingVisualizerProps) => {
  console.log('props', props);

  const {
    maxArrayBarHeight,
    minArrayBarHeight,
    setRandomArray,
    randomArray,
    arrayLength,
    doMergeSort,
    doBubbleSort,
  } = props;

  React.useEffect(() => {
    setRandomArray(arrayLength, maxArrayBarHeight, minArrayBarHeight);
  }, []);

  const verifyArraysEqual = (a1: number[], a2: number[]) => {
    if (a1.length !== a2.length) return false;
  };

  return (
    <div className="sorting-visualizer-wrapper">
      <SortingVisualizerArrayBars barsArray={randomArray} />

      <div className="buttons">
        <button
          id="generate-new-array"
          onClick={() =>
            setRandomArray(arrayLength, maxArrayBarHeight, minArrayBarHeight)
          }
        >
          Generate New Array
        </button>

        <button id="merge-sort-array" onClick={() => doMergeSort(randomArray)}>
          Do Merge Sort
        </button>

        <button
          id="bubble-sort-array"
          onClick={() => doBubbleSort(randomArray)}
        >
          Do Bubble Sort
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  randomArray: state.sortingVisualizer.randomArray,
});

const actionCreators = {
  setRandomArray,
  doMergeSort,
  doBubbleSort,
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
