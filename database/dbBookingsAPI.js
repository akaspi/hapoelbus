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

export function trackBookings(uid, cb) {
  const createReportChange = type => (booking, uid, gameId) => {
    cb({ type, booking, uid, gameId });
  };

  const pathToListen = uid ? `${BOOKINGS_PATH}/${uid}` : BOOKINGS_PATH;

  listenToChildAdded(pathToListen, createReportChange('added'));
  listenToChildRemoved(pathToListen, createReportChange('removed'));
  listenToChildChanged(pathToListen, createReportChange('changed'));
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