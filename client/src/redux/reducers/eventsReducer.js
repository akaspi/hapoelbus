import * as _ from 'lodash';
import { EVENTS_RECEIVED, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function eventsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case EVENTS_RECEIVED:
      return _.merge({}, state, action.events);
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}