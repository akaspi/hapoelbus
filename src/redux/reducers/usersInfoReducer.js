import _ from 'lodash';
import {USER_INFO_CREATED} from '../actions/actionTypes';

const initialState = {};

export default function usersInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_INFO_CREATED:
      return _.cloneDeep(action.userInfo);
    default:
      return state;
  }
}