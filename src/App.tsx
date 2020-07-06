import React from 'react';
import './App.css';
import { SortingVisualizer } from './components/SortingVisualizer';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <SortingVisualizer maxArraySize={10} minArraySize={5}></SortingVisualizer>
    </div>
  );
}

export default App;
