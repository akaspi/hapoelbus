import _ from 'lodash';
import { isComputed, toJS, isObservableMap } from 'mobx';
import BookingsAPI from '../../api/bookingsAPI';
import BookingsStore from '../../mobx/stores/bookingsStore';
import AuthStore from '../../mobx/stores/authStore';

describe('BookingsAPI', () => {

  function createBooking() {
    return {
      paidSeats: 1,
      extraSeats: 0,
      pickUp: 'tlv',
      dropOff: 'tlv'
    };
  }

  describe('bookings', () => {

    it('should be a computed value', () => {
      const bookingsStore = new BookingsStore();
      const authStore = new AuthStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore, authStore });

      expect(isComputed(bookingsAPI, 'bookings')).toBe(true);
    });

    it('should return all bookings', () => {
      const bookingsStore = new BookingsStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore });

      const booking = createBooking();

      bookingsStore.setBookings({
        spiderUID: {
          gameId1: booking,
          gameId2: booking
        },
        pigUID: {
          gameId2: booking
        }
      });

      expect(_.size(bookingsAPI.bookings)).toEqual(2);

      expect(isObservableMap(bookingsAPI.bookings.spiderUID)).toBe(true);
      expect(isObservableMap(bookingsAPI.bookings.pigUID)).toBe(true);

      expect(toJS(bookingsAPI.bookings.spiderUID)).toEqual({
        gameId1: booking,
        gameId2: booking
      });
      expect(toJS(bookingsAPI.bookings.pigUID)).toEqual({
        gameId2: booking
      });
    });

  });

  describe('userBookings', () => {

    it('should be a computed value', () => {
      const bookingsStore = new BookingsStore();
      const authStore = new AuthStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore, authStore });

      expect(isComputed(bookingsAPI, 'usersBookings')).toBe(true);
    });

    it('should return bookings of a logged in user', () => {
      const bookingsStore = new BookingsStore();
      const authStore = new AuthStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore, authStore });

      const booking = createBooking();

      authStore.setAuthData({ uid: 'spiderUID'});
      bookingsStore.setBookings({
        spiderUID: {
          gameId1: booking,
          gameId2: booking
        },
        pigUID: {
          gameId2: booking
        }
      });

      expect(_.size(bookingsAPI.usersBookings)).toEqual(2);
      expect(toJS(bookingsAPI.usersBookings.gameId1)).toEqual(booking);
      expect(toJS(bookingsAPI.usersBookings.gameId2)).toEqual(booking);
    });

    it('should return an empty object if the user has no bookings', () => {
      const bookingsStore = new BookingsStore();
      const authStore = new AuthStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore, authStore });

      const booking = createBooking();

      authStore.setAuthData({ uid: 'webID'});
      bookingsStore.setBookings({
        spiderUID: {
          gameId1: booking,
          gameId2: booking
        },
        pigUID: {
          gameId2: booking
        }
      });

      expect(bookingsAPI.usersBookings).toEqual({});
    });

    it('should return an empty object if a user is logged out', () => {
      const bookingsStore = new BookingsStore();
      const authStore = new AuthStore();
      const bookingsAPI = new BookingsAPI({ bookingsStore, authStore });

      const booking = createBooking();

      authStore.setAuthData(null);
      bookingsStore.setBookings({
        spiderUID: {
          gameId1: booking,
          gameId2: booking
        },
        pigUID: {
          gameId2: booking
        }
      });

      expect(bookingsAPI.usersBookings).toEqual({});
    });

  });

});