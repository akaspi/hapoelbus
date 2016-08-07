import { createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer from './reducers/errorReducer';
import loadingReducer from './reducers/loadingReducer';
import usersInfoReducer from './reducers/usersInfoReducer';
import currentUserReducer from './reducers/currentUserReducer';

import dbMiddleware from './middleware/dbMiddleware';

export const makeStore = (storage) => {
  const reducers = combineReducers({
    errorMsg: errorReducer,
    loading: loadingReducer,
    usersInfo: usersInfoReducer,
    currentUser: currentUserReducer
  });

  const middleware = applyMiddleware(
    dbMiddleware(storage)
  );

  return createStore(reducers, undefined, middleware);
};