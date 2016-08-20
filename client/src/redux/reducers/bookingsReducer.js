import * as _ from 'lodash';
import { BOOKINGS_RECEIVED, BOOKING_CANCELED, SIGN_OUT } from '../actions/actionTypes';

const initialState = {};

export default function eventsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case BOOKINGS_RECEIVED:
      return _.merge({}, state, action.bookings);
    case BOOKING_CANCELED: {
      const clonedBookings = _.cloneDeep(state);
      delete clonedBookings[action.uid][action.eventId];
      if (_.size(clonedBookings[action.uid]) === 0) {
        delete clonedBookings[action.uid];
      }
      return clonedBookings;
    }
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}