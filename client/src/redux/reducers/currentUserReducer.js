import _ from 'lodash';
import { fromJS } from 'immutable';

import { SET_CURRENT_USER } from '../actions/actionTypes';

const initialState = fromJS({});

export default function currentUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return fromJS(_.pick(action.currentUser, ['uid', 'isAdmin']));
    default:
      return state;
  }
}