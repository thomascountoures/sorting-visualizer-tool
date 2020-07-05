import React from "react";

export interface SortingVisualizerProps {
    maxArraySize: number;
    minArraySize: number;
}

export const SortingVisualizer = (props: SortingVisualizerProps) => {
    const { maxArraySize, minArraySize } = props;
    const generateNewArray = () => (Math.random() * (maxArraySize - minArraySize) + minArraySize);

    React.useEffect(() => {
        console.log(generateNewArray());
    }, []);
  
    
  
    return <div>hello world!</div>;
}

 
};
