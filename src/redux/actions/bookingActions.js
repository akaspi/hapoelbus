import * as _ from 'lodash';

import { BOOKINGS_RECEIVED, BOOKING_CANCELED } from './actionTypes';

import * as clientDB from '../../utils/clientDB';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

const BOOKING_DATA_KEYS = ['paidSeats', 'extraSeats', 'pickUp', 'dropOff'];
const BOOKINGS_PATH = 'bookings';

const fetchUserBookings = uid =>
  clientDB.read(`${BOOKINGS_PATH}/${uid}`)
    .then(userBookings => {
      if (userBookings) {
        return { [uid]: userBookings };
      }
      return null;
    });

const fetchAllBookings = () =>
  clientDB.read(BOOKINGS_PATH);

export const bookingsReceived = bookings => ({
  type: BOOKINGS_RECEIVED,
  bookings
});

export const bookingsCanceled = (uid, eventId) => ({
  type: BOOKING_CANCELED,
  uid,
  eventId
});

export const fetchBookings = () => (dispatch, getState) => {
  const uid = _.get(getState(), ['authData', 'uid']);
  const isAdmin = _.get(getState(), ['authData', 'isAdmin']);
  const fetchPromise = isAdmin ? fetchAllBookings() : fetchUserBookings(uid);

  return fetchPromise
    .then(bookings => {
      if (bookings) {
        dispatch(bookingsReceived(bookings));
      }
    });
};

export const updateBooking = (uid, eventId, bookingData) => dispatch => {
  dispatch(loadingActions.startLoading());

  const bookingDataToUpdate = _.pick(bookingData, BOOKING_DATA_KEYS);

  return clientDB.update(`${BOOKINGS_PATH}/${uid}/${eventId}`, bookingDataToUpdate)
    .then(() => dispatch(bookingsReceived({ [uid]: { [eventId]: bookingDataToUpdate } })))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const cancelBooking = (uid, eventId) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.remove(`${BOOKINGS_PATH}/${uid}/${eventId}`)
    .then(() => dispatch(bookingsCanceled(uid, eventId)))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};