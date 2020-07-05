import React, { useState } from "react";

export interface SortingVisualizerProps {
  maxArraySize: number;
  minArraySize: number;
}

export const SortingVisualizer = (props: SortingVisualizerProps) => {
  const [randomArray, setRandomArray] = useState([0]);
  const { maxArraySize, minArraySize } = props;
  const generateArray = () => {
    const result: number[] = [];
    for (let i = 0, length = maxArraySize; i < length; i++) {
      result.push(getRandomIntFromInterval());
    }
    setRandomArray(result);
  };

  const getRandomIntFromInterval = () =>
    Math.random() * (maxArraySize - minArraySize) + minArraySize;

  React.useEffect(() => {
    generateArray();
  }, []);

  const mapStateToProps = (state, actionCreators) => {
    return state, actionCreators as any;
  };

  return <div>Sorting Visualizer</div>;
};
