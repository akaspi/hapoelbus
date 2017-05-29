import { createStore, combineReducers, applyMiddleware } from 'redux';

import loadingCounterReducer from './reducers/loadingCounterReducer';

import thunk from 'redux-thunk';

export default function() {
  const reducers = combineReducers({
    loadingCounter: loadingCounterReducer,
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};