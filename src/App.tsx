import React from 'react';
import './App.scss';
import SortingVisualizer from './components/SortingVisualizer';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { sortingVisualizerInitialState } from './redux/initialStates/SortingVisualizerState';

const store = configureStore(sortingVisualizerInitialState);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <SortingVisualizer
          maxArrayBarHeight={315}
          minArrayBarHeight={5}
          arrayLength={50}
        />
      </Provider>
    </div>
  );
};

export default App;
