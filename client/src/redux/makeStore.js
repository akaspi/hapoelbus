import { createStore, combineReducers, applyMiddleware } from 'redux';

import errorReducer from './reducers/errorReducer';
import loadingReducer from './reducers/loadingReducer';
import usersInfoReducer from './reducers/usersInfoReducer';
import authDataReducer from './reducers/authDataReducer';

import thunk from 'redux-thunk';

export const makeStore = () => {
  const reducers = combineReducers({
    authData: authDataReducer,
    errorMsg: errorReducer,
    loading: loadingReducer,
    usersInfo: usersInfoReducer
  });

  const middleware = applyMiddleware(
    thunk
  );

  return createStore(reducers, undefined, middleware);
};