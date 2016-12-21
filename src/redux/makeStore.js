import { createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer from './reducers/errorReducer';
import loadingReducer from './reducers/loadingReducer';
import usersReducer from './reducers/usersReducer';
import eventsReducer from './reducers/eventsReducer';
import bookingsReducer from './reducers/bookingsReducer';
import authDataReducer from './reducers/authDataReducer';

const navigationReducer = require('./reducers/navigationReducer');

import thunk from 'redux-thunk';

export const makeStore = () => {
  const reducers = combineReducers({
    navigation: navigationReducer,
    authData: authDataReducer,
    errorMsg: errorReducer,
    loading: loadingReducer,
    users: usersReducer,
    events: eventsReducer,
    bookings: bookingsReducer
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};