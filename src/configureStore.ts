import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState: any) => {
  debugger;
  return createStore(
    reducers,
    preloadedState as any,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default configureStore;
