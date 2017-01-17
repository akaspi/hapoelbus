import isFunction from 'lodash/isFunction';

import { read, update, remove, listenToValueChange, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from './utils/db';

const BOOKINGS_PATH = 'bookings';

function fetchBookingsForUser(uid) {
  return read(`${BOOKINGS_PATH}/${uid}`)
    .then(userBookings => {
      if (userBookings) {
        return { [uid]: userBookings };
      }
      return {};
    });
}

function fetchAllBookings() {
  return read(BOOKINGS_PATH)
    .then(userBookings => userBookings || {});
}

export function trackBookings(uid, cb) {
  if (isFunction(uid)) {
    cb = uid;
    uid = null;
  }

  const createReportChange = type => (bookings, uid) => {
    cb({ type, bookings, uid });
  };

  if (uid) {
    listenToValueChange(`${BOOKINGS_PATH}/${uid}`, createReportChange('changed'));
  } else {
    listenToChildAdded(BOOKINGS_PATH, createReportChange('added'));
    listenToChildRemoved(BOOKINGS_PATH, createReportChange('removed'));
    listenToChildChanged(BOOKINGS_PATH, createReportChange('changed'));
  }
}

export function fetchBookings(uid) {
  if (uid) {
    return fetchBookingsForUser(uid);
  }
  return fetchAllBookings();
}

export function updateBooking(uid, gameId, booking) {
  return update(`${BOOKINGS_PATH}/${uid}/${gameId}`, booking);
}

export function removeBooking(uid, gameId) {
  return remove(`${BOOKINGS_PATH}/${uid}/${gameId}`);
}