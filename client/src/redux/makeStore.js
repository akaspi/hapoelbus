import { createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer from './reducers/errorReducer';
import loadingReducer from './reducers/loadingReducer';
import usersReducer from './reducers/usersReducer';
import eventsReducer from './reducers/eventsReducer';
import authDataReducer from './reducers/authDataReducer';

import thunk from 'redux-thunk';

export const makeStore = () => {
  const reducers = combineReducers({
    authData: authDataReducer,
    errorMsg: errorReducer,
    loading: loadingReducer,
    users: usersReducer,
    events: eventsReducer
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};