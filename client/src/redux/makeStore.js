import { createStore, combineReducers, applyMiddleware } from 'redux';

import usersInfoReducer from './reducers/usersInfoReducer';
import currentUserReducer from './reducers/currentUserReducer';

import dbMiddleware from './middleware/dbMiddleware';

export const makeStore = () => {
  const reducers = combineReducers({
    usersInfo: usersInfoReducer,
    currentUser: currentUserReducer
  });

  const middleware = applyMiddleware(
    dbMiddleware
  );

  return createStore(reducers, undefined, middleware);
};