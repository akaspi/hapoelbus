import * as _ from 'lodash';
import { USERS_RECEIVED, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USERS_RECEIVED:
      return _.merge({}, state, action.users);
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}