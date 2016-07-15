import { createStore, combineReducers } from 'redux';

import usersInfoReducer from './reducers/usersInfoReducer';

export const makeStore = () => {
  const reducers = combineReducers({
    usersInfo: usersInfoReducer
  });

  return createStore(reducers);
};