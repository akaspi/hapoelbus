import * as _ from 'lodash';
import { USERS_RECEIVED, USER_REMOVED, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USERS_RECEIVED:
      return _.merge({}, state, action.users);
    case USER_REMOVED:
      return _.omit(state, action.uid);
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}