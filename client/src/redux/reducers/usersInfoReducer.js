import * as _ from 'lodash';
import { UPDATE_USER_INFO, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function usersInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return _.merge({}, state, { [action.uid]: action.userInfo });
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}