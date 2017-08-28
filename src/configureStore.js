import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
  return store;
}

export default configureStore;
