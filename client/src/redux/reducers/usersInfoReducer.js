import { fromJS } from 'immutable';

import { USER_INFO_CREATED } from '../actions/actionTypes';

const initialState = fromJS({});

export default function usersInfoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_INFO_CREATED:
      return fromJS(action.userInfo);
    default:
      return state;
  }
}