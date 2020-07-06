import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState?: any) => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default configureStore;
