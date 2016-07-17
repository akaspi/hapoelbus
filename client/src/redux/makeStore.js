import { createStore, combineReducers } from 'redux';

import usersInfoReducer from './reducers/usersInfoReducer';
import currentUserReducer from './reducers/currentUserReducer';

export const makeStore = () => {
  const reducers = combineReducers({
    usersInfo: usersInfoReducer,
    currentUser: currentUserReducer
  });

  return createStore(reducers);
};