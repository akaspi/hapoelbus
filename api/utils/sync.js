import _ from 'lodash';

import * as Constants from '../../src/utils/constants';

import * as dbAuthData from '../../database/dbAuthData';
import * as dbUsersInfo from '../../database/dbUsersInfo';
import * as dbGames from '../../database/dbGames';
import * as dbBookings from '../../database/dbBookings';

function onUserInfoTrack(usersInfoStore, userInfoEvent) {
  switch (userInfoEvent.type) {
    case 'changed':
    case 'added':
      usersInfoStore.updateUserInfo(userInfoEvent.uid, userInfoEvent.userInfo);
      break;
    case 'removed':
      usersInfoStore.removeUserInfo(userInfoEvent.uid);
      break;
  }
}

function onGameTrack(gamesStore, gameEvent) {
  switch (gameEvent.type) {
    case 'changed':
    case 'added':
      gamesStore.updateGame(gameEvent.gameId, gameEvent.game);
      break;
    case 'removed':
      gamesStore.removeGame(gameEvent.gameId);
      break;
  }
}

function onBookingTrack(bookingsStore, bookingEvent) {
  switch (bookingEvent.type) {
    case 'added':
      dbBookings.trackUserBookings(bookingEvent.uid, onUserBookingsTrack.bind(this, bookingEvent.uid));
      bookingsStore.addUserBookings(bookingEvent.uid, bookingEvent.userBookings);
      break;
    case 'removed':
      bookingsStore.removeUserBookings(bookingEvent.uid);
      break;
  }
}

function onUserBookingsTrack(bookingsStore, uid, userBookingEvent) {
  switch (userBookingEvent.type) {
    case 'added':
      bookingsStore.addBookingItem(uid, userBookingEvent.gameId, userBookingEvent.bookingItem);
      break;
    case 'changed':
      bookingsStore.updateBookingItem(uid, userBookingEvent.gameId, userBookingEvent.bookingItem);
      break;
    case 'removed':
      bookingsStore.removeBookingItem(uid, userBookingEvent.gameId);
      break;
  }
}

export default function sync(stores) {
  stores.loadingStore.startPendingRequest();

  dbAuthData.onAuthDataChange(authData => {

    stores.authStore.setAuthData(authData);

    if (authData) {
      const fetchPromises = [
        dbUsersInfo.fetchUsersInfo(authData).then(stores.usersInfoStore.setUsersInfo),
        dbGames.fetchGames().then(stores.gamesStore.setGames),
        dbBookings.fetchBookings(authData).then(bookings => {
          _.forOwn(bookings, (userBooking, uid) =>  dbBookings.trackUserBookings(uid, onUserBookingsTrack.bind(this, stores.bookingsStore, uid)));
          stores.bookingsStore.setBookings(bookings);
        })
      ];

      Promise.all(fetchPromises).then(() => {
        stores.loadingStore.endPendingRequest();
        stores.routingStore.navigateTo(Constants.ROUTING.PAGES.HOME);
        dbUsersInfo.trackUsersInfo(authData, onUserInfoTrack.bind(this, stores.usersInfoStore));
        dbGames.trackGames(onGameTrack, this, stores.gamesStore);
        dbBookings.trackBookings(onBookingTrack, this, stores.bookingsStore);
      });
    }

  });
}
