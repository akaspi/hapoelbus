import { createStore, combineReducers, applyMiddleware } from 'redux';

import loadingCounterReducer from './reducers/loadingCounterReducer';
import authDataReducer from './reducers/authDataReducer';

import thunk from 'redux-thunk';

export default function() {
  const reducers = combineReducers({
    loadingCounter: loadingCounterReducer,
    authData: authDataReducer
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};