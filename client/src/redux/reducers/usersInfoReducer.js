import { fromJS } from 'immutable';

import { UPDATE_USER_INFO, SIGN_OUT } from '../actions/actionTypes';

const initialState = fromJS({});

export default function usersInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return state.hasIn([action.uid]) ?
        state.updateIn([action.uid], () => action.userInfo) :
        state.setIn([action.uid], action.userInfo);
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}