import * as _ from 'lodash';
import { USER_INFO_RECEIVED, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function usersInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_INFO_RECEIVED:
      return _.merge({}, state, { [action.uid]: action.userInfo });
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}