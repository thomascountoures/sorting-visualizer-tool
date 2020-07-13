import React from 'react';

export interface ISortingVisualizerArrayBarsProps {
  barsArray: number[];
}

export const SortingVisualizerArrayBars = (
  props: ISortingVisualizerArrayBarsProps
) => {
  const { barsArray } = props;

  return (
    <>
      {barsArray &&
        barsArray.map((barVal, idx) => (
          <div className="sorting-visualizer-bar" key={idx}>
            {barVal}
          </div>
        ))}
    </>
  );
};
