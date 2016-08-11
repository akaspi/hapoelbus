import { createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer from './reducers/errorReducer';
import loadingReducer from './reducers/loadingReducer';
import usersInfoReducer from './reducers/usersInfoReducer';
import currentUserReducer from './reducers/currentUserReducer';

import thunk from 'redux-thunk';

export const makeStore = () => {
  const reducers = combineReducers({
    errorMsg: errorReducer,
    loading: loadingReducer,
    usersInfo: usersInfoReducer,
    currentUser: currentUserReducer
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};