import { toJS } from 'mobx';
import BookingsStore from '../../../mobx/stores/bookingsStore';

describe('BookingsStore', () => {

  const defaultBooking = {
    paidSeats: 2,
    extraSeats: 1,
    pickUp: 'tlv',
    dropOff: 'modiin'
  };

  it('should be empty after initialization', () => {
    const bookingsStore = new BookingsStore();

    expect(bookingsStore.bookings.size).toEqual(0);
  });

  describe('setBookings', () => {

    it('should set all bookings', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        },
        uid2: {
          gameId2: defaultBooking
        }
      });

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        },
        uid2: {
          gameId2: defaultBooking
        }
      });

    });

  });

  describe('addUserBookings', () => {

    it('should create first user booking', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.addUserBookings('uid2', {
        gameId2: defaultBooking
      });

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        },
        uid2: {
          gameId2: defaultBooking
        }
      });
    });

  });

  describe('removeUserBookings', () => {

    it('should remove all user bookings', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        },
        uid2: {
          gameId2: defaultBooking
        }
      });

      bookingsStore.removeUserBookings('uid1');

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid2: {
          gameId2: defaultBooking
        }
      });
    });

  });

  describe('addBookingItem', () => {

    it('should add booking item', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.addBookingItem('uid1', 'gameId3', defaultBooking);

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking,
          gameId3: defaultBooking
        }
      });
    });

  });

  describe('updateBookingItem', () => {

    it('should update booking item', function() {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.updateBookingItem('uid1', 'gameId1', { extraSeats: 5 });

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: {
            paidSeats: defaultBooking.paidSeats,
            extraSeats: 5,
            pickUp: defaultBooking.pickUp,
            dropOff: defaultBooking.dropOff
          },
          gameId2: defaultBooking
        }
      });
    });

  });

  describe('removeBookingItem', () => {

    it('should remove booking item', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.removeBookingItem('uid1', 'gameId2');

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking
        }
      });
    });

  });

});