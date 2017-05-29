import _ from 'lodash';
import { Map } from 'immutable';
import { SET_AUTH_DATA, LOGOUT } from '../actions/actionTypes';

const initialState = Map();

export default function authDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_AUTH_DATA:
      const authData = _.pick(action.authData, ['uid']);
      const authDataMap = Map(authData);
      return state.merge(authDataMap);
    case LOGOUT:
      return state.clear();
    default:
      return state;
  }
}