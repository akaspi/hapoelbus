import merge from 'lodash/merge';
import { toJS } from 'mobx';
import { BookingsStore } from '../../../mobx/stores/bookingsStore';

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

  describe('updateBooking', () => {

    it('should update an existing booking', () => {
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

      bookingsStore.updateBookings('uid1', {
        gameId1: defaultBooking,
        gameId2: merge({}, defaultBooking, { extraSeats: 3 })
      });

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: merge({}, defaultBooking, { extraSeats: 3 })
        },
        uid2: {
          gameId2: defaultBooking
        }
      });
    });

    it('should create first user booking', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.updateBookings('uid2', {
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

    it('should create new booking', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.updateBookings('uid1', {
        gameId1: defaultBooking,
        gameId2: defaultBooking,
        gameId3: defaultBooking
      });

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking,
          gameId3: defaultBooking
        }
      });
    });

  });

  describe('removeBooking', () => {

    it('should remove booking', () => {
      const bookingsStore = new BookingsStore();

      bookingsStore.setBookings({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });

      bookingsStore.removeBooking('uid1', 'gameId1');

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId2: defaultBooking
        }
      });
    });

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

      bookingsStore.removeBooking('uid2', 'gameId2');

      expect(toJS(bookingsStore.bookings)).toEqual({
        uid1: {
          gameId1: defaultBooking,
          gameId2: defaultBooking
        }
      });
    });

  });

  // describe('updateBookingOld', () => {
  //
  //   it('should update an existing booking', () => {
  //     const bookingsStore = new BookingsStore();
  //
  //     bookingsStore.setBookings({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: defaultBooking
  //       },
  //       uid2: {
  //         gameId2: defaultBooking
  //       }
  //     });
  //
  //     bookingsStore.updateBooking('uid1', 'gameId2', { extraSeats: 3 });
  //
  //     expect(toJS(bookingsStore.bookings)).toEqual({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: merge({}, defaultBooking, { extraSeats: 3 })
  //       },
  //       uid2: {
  //         gameId2: defaultBooking
  //       }
  //     });
  //   });
  //
  //   it('should create first user booking', () => {
  //     const bookingsStore = new BookingsStore();
  //
  //     bookingsStore.setBookings({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: defaultBooking
  //       }
  //     });
  //
  //     bookingsStore.updateBooking('uid2', 'gameId2', defaultBooking);
  //
  //     expect(toJS(bookingsStore.bookings)).toEqual({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: defaultBooking
  //       },
  //       uid2: {
  //         gameId2: defaultBooking
  //       }
  //     });
  //   });
  //
  //   it('should create new booking', () => {
  //     const bookingsStore = new BookingsStore();
  //
  //     bookingsStore.setBookings({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: defaultBooking
  //       }
  //     });
  //
  //     bookingsStore.updateBooking('uid2', 'gameId3', defaultBooking);
  //
  //     expect(toJS(bookingsStore.bookings)).toEqual({
  //       uid1: {
  //         gameId1: defaultBooking,
  //         gameId2: defaultBooking
  //       },
  //       uid2: {
  //         gameId3: defaultBooking
  //       }
  //     });
  //   });
  //
  // });

});