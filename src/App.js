import React from "react";
import "./App.css";
import { SortingVisualizer } from "./components/SortingVisualizer";

function App() {
  return (
    <div className="App">
      <SortingVisualizer
        maxArraySize={100}
        minArraySize={5}
      ></SortingVisualizer>
    </div>
  );
}

export default App;
