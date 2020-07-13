import React from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { sortingVisualizerInitialState } from './redux/initialStates/SortingVisualizerState';

const store = configureStore(sortingVisualizerInitialState);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <SortingVisualizer maxArraySize={15} minArraySize={10} />
      </Provider>
    </div>
  );
};

export default App;
