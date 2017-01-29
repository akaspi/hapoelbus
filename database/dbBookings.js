import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from './utils/db';

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

export function trackBookings(cb) {
  const createReportChange = type => (userBookings, uid) => {
    cb({ type, userBookings, uid });
  };

  listenToChildAdded(BOOKINGS_PATH, createReportChange('added'));
  listenToChildRemoved(BOOKINGS_PATH, createReportChange('removed'));
}

export function trackUserBookings(uid, cb) {
  const createReportChange = type => (bookingItem, gameId) => {
    cb({ type, bookingItem, gameId });
  };

  listenToChildAdded(`${BOOKINGS_PATH}/${uid}`, createReportChange('added'));
  listenToChildRemoved(`${BOOKINGS_PATH}/${uid}`, createReportChange('removed'));
  listenToChildChanged(`${BOOKINGS_PATH}/${uid}`, createReportChange('changed'));
}

export function fetchBookings(authData) {
  if (authData.isAdmin) {
    return fetchAllBookings();
  }
  return fetchBookingsForUser(authData.uid);
}

export function updateBooking(uid, gameId, booking) {
  return update(`${BOOKINGS_PATH}/${uid}/${gameId}`, booking);
}

export function removeBooking(uid, gameId) {
  return remove(`${BOOKINGS_PATH}/${uid}/${gameId}`);
}