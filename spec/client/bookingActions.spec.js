import * as clientDB from '../../src/utils/clientDB';
import * as Promise from 'bluebird';

import { BOOKINGS_RECEIVED, BOOKING_CANCELED } from '../../src/redux/actions/actionTypes';

import * as bookingActions from '../../src/redux/actions/bookingActions';
import * as loadingActions from '../../src/redux/actions/loadingActions';
import * as errorActions from '../../src/redux/actions/errorActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('bookingActions spec', () => {

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('bookings received', () => {

    it('should create action with received bookings', () => {
      const bookings = {
        uid1: {
          evid1: { paidSeats: 2, extraSeats: 0, pickUp: 'tlv', dropOff: 'tlv' },
          evid2: { paidSeats: 1, extraSeats: 1, dropOff: 'tlv' }
        },
        uid2: {
          evid2: { paidSeats: 0, extraSeats: 1, pickUp: 'modiin' }
        }
      };

      const action = bookingActions.bookingsReceived(bookings);

      expect(action).toEqual({
        type: BOOKINGS_RECEIVED,
        bookings
      });
    });

  });

  describe('fetch bookings', () => {

    describe('user is admin', () => {

      beforeEach(() => {
        store = mockStore({
          authData: {
            uid: 'user_id',
            isAdmin: true
          }
        });
      });

      it('should call bookings path', done => {
        clientDB.read.and.returnValue(Promise.resolve({}));

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(clientDB.read).toHaveBeenCalledWith('bookings');
            done();
          });
      });

      it('should dispatch bookingsReceived with bookings from db', done => {
        const bookingsInDB = {
          uid1: {
            evid1: { paidSeats: 2, extraSeats: 0, pickUp: 'tlv', dropOff: 'tlv' },
            evid2: { paidSeats: 1, extraSeats: 1, dropOff: 'tlv' }
          },
          uid2: {
            evid2: { paidSeats: 0, extraSeats: 1, pickUp: 'modiin' }
          }
        };

        clientDB.read.and.returnValue(Promise.resolve(bookingsInDB));

        const expectedActions = [
          bookingActions.bookingsReceived(bookingsInDB)
        ];

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });

      it('should NOT dispatch bookingsReceived if no bookings found', done => {
        clientDB.read.and.returnValue(Promise.resolve(null));

        const expectedActions = [];

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });

    });

    describe('user is NOT admin', () => {

      beforeEach(() => {
        store = mockStore({
          authData: {
            uid: 'user_id',
            isAdmin: false
          }
        });
      });

      it('should call user bookings path', done => {
        clientDB.read.and.returnValue(Promise.resolve({}));

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(clientDB.read).toHaveBeenCalledWith('bookings/user_id');
            done();
          });
      });

      it('should dispatch bookingsReceived with user bookings from db', done => {
        const userBookingsInDB = {
          evid1: { paidSeats: 2, extraSeats: 0, pickUp: 'tlv', dropOff: 'tlv' },
          evid2: { paidSeats: 1, extraSeats: 1, dropOff: 'tlv' }
        };

        clientDB.read.and.returnValue(Promise.resolve(userBookingsInDB));

        const expectedActions = [
          bookingActions.bookingsReceived({
            user_id: userBookingsInDB
          })
        ];

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });

      it('should NOT dispatch bookingsReceived if no bookings found', done => {
        clientDB.read.and.returnValue(Promise.resolve(null));

        const expectedActions = [];

        store.dispatch(bookingActions.fetchBookings())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });

    });
  });

  describe('update booking', () => {

    it('should update booking in DB', done => {
      clientDB.update.and.returnValue(Promise.resolve());

      store.dispatch(bookingActions.updateBooking('userId', 'eventId', { extraSeats: 2, dropOff: 'modiin' }))
        .then(() => {
          expect(clientDB.update).toHaveBeenCalledWith('bookings/userId/eventId', { extraSeats: 2, dropOff: 'modiin' });
          done();
        });
    });

    it('should notify bookings reducer', done => {
      clientDB.update.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        bookingActions.bookingsReceived({
          userId: {
            eventId: { extraSeats: 2, dropOff: 'modiin' }
          }
        }),
        loadingActions.stopLoading()
      ];

      store.dispatch(bookingActions.updateBooking('userId', 'eventId', { extraSeats: 2, dropOff: 'modiin' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if update booking fails', done => {
      clientDB.update.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(bookingActions.updateBooking('userId', 'eventId', { extraSeats: 2, dropOff: 'modiin' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('cancel booking', () => {

    it('should create action with canceled booking', () => {
      const action = bookingActions.bookingsCanceled('user_id', 'event_id');

      expect(action).toEqual({
        type: BOOKING_CANCELED,
        uid: 'user_id',
        eventId: 'event_id'
      });
    });

    it('should remove booking from DB', done => {
      clientDB.remove.and.returnValue(Promise.resolve());

      store.dispatch(bookingActions.cancelBooking('user_id', 'event_id'))
        .then(() => {
          expect(clientDB.remove).toHaveBeenCalledWith('bookings/user_id/event_id');
          done();
        });
    });

    it('should notify bookings reducer', done => {
      clientDB.remove.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        bookingActions.bookingsCanceled('user_id', 'event_id'),
        loadingActions.stopLoading()
      ];

      store.dispatch(bookingActions.cancelBooking('user_id', 'event_id'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if action failed', done => {
      clientDB.remove.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(bookingActions.cancelBooking('user_id', 'event_id'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

  });

});