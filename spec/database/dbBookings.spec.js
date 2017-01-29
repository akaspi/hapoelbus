import noop from 'lodash/noop';
import * as dbBookings from '../../database/dbBookings';
import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from '../../database/utils/db';

describe('dbBookings', () => {

  describe('trackBookings', () => {

    it('should track child add / remove', () => {
      dbBookings.trackBookings(noop);

      expect(listenToChildAdded).toHaveBeenCalledWith('bookings', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('bookings', jasmine.any(Function));
    });

    it('should call childAdd with userBookings, uid, gameId and type:added', done => {
      const userBookings = {
        gameId1: {
          pickUp: 'Jerusalem'
        },
        gameId2: {
          pickUp: 'TelAviv'
        }
      };

      listenToChildAdded.and.callFake((path, cb) => cb(userBookings, 'someUID'));

      dbBookings.trackBookings(addedBooking => {
        expect(addedBooking).toEqual({
          type: 'added',
          userBookings,
          uid: 'someUID'
        });
        done();
      });
    });

    it('should call childRemoved with userBookings, uid, gameId and type:removed', done => {
      const userBookings = {
        gameId1: {
          pickUp: 'Jerusalem'
        },
        gameId2: {
          pickUp: 'TelAviv'
        }
      };

      listenToChildRemoved.and.callFake((path, cb) => cb(userBookings, 'someUID'));

      dbBookings.trackBookings(removedBooking => {
        expect(removedBooking).toEqual({
          type: 'removed',
          userBookings,
          uid: 'someUID'
        });
        done();
      });
    });

  });

  describe('trackUserBookings', () => {

    it('should track child add / remove', () => {
      dbBookings.trackUserBookings('someUID', noop);

      expect(listenToChildAdded).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
      expect(listenToChildAdded).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
    });

    it('should call childAdd with bookingItem, gameId and type:added', done => {
      const bookingItem = { paidSeats: 1, extraSeats: 2, pickUp: 'tlv', dropOff: 'modiin' };
      const gameId = 'gameId';

      listenToChildAdded.and.callFake((path, cb) => cb(bookingItem, gameId));

      dbBookings.trackUserBookings('someUID', addedBooking => {
        expect(addedBooking).toEqual({
          type: 'added',
          bookingItem,
          gameId
        });
        done();
      });
    });

    it('should call childChanged with bookingItem, gameId and type:changed', done => {
      const bookingItem = { paidSeats: 1, extraSeats: 2, pickUp: 'tlv', dropOff: 'modiin' };
      const gameId = 'gameId';

      listenToChildChanged.and.callFake((path, cb) => cb(bookingItem, gameId));

      dbBookings.trackUserBookings('someUID', addedBooking => {
        expect(addedBooking).toEqual({
          type: 'changed',
          bookingItem,
          gameId
        });
        done();
      });
    });

    it('should call childRemoved with bookingItem, gameId and type:removed', done => {
      const bookingItem = { paidSeats: 1, extraSeats: 2, pickUp: 'tlv', dropOff: 'modiin' };
      const gameId = 'gameId';

      listenToChildRemoved.and.callFake((path, cb) => cb(bookingItem, gameId));

      dbBookings.trackUserBookings('someUID', addedBooking => {
        expect(addedBooking).toEqual({
          type: 'removed',
          bookingItem,
          gameId
        });
        done();
      });
    });

  });

  describe('fetchBookings', () => {

    describe('admin user', () => {

      const authData = { uid: 'someUID', email: 'spider@pig.com', photoURL: 'http://photo', isAdmin: true };

      it('should fetch from bookings', done => {
        read.and.returnValue(Promise.resolve({}));

        dbBookings.fetchBookings(authData).then(() => {
          expect(read).toHaveBeenCalledWith('bookings');
          done();
        })
      });

      it('should return a all bookings', done => {
        read.and.returnValue(Promise.resolve({
          uid1: { firstName: 'spider', lastName: 'pig' },
          uid2: { firstName: 'can', lastName: 'he swing?' }
        }));

        dbBookings.fetchBookings(authData).then(userBookings => {
          expect(userBookings).toEqual({
            uid1: { firstName: 'spider', lastName: 'pig' },
            uid2: { firstName: 'can', lastName: 'he swing?' }
          });
          done();
        })
      });

      it('should return empty object if no users info', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookings.fetchBookings(authData).then(userBookings => {
          expect(userBookings).toEqual({});
          done();
        })
      });

    });

    describe('NON admin user', () => {

      const authData = { uid: 'someUID', email: 'spider@pig.com', photoURL: 'http://photo', isAdmin: false };

      it('should fetch from bookings/someUID', done => {

        read.and.returnValue(Promise.resolve({}));

        dbBookings.fetchBookings(authData).then(() => {
          expect(read).toHaveBeenCalledWith('bookings/someUID');
          done();
        })
      });

      it('should return a single user bookings', done => {
        read.and.returnValue(Promise.resolve({ firstName: 'spider', lastName: 'pig' }));

        dbBookings.fetchBookings(authData).then(usersInfo => {
          expect(usersInfo).toEqual({
            someUID: { firstName: 'spider', lastName: 'pig' }
          });
          done();
        })
      });

      it('should return empty object if no user bookings', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookings.fetchBookings(authData).then(userBookings => {
          expect(userBookings).toEqual({});
          done();
        })
      });

    });

  });

  describe('updateBooking', () => {

    it('call update with bookings/uid/gameId and partial booking', done => {
      update.and.returnValue(Promise.resolve());

      dbBookings.updateBooking('someUID', 'someGameId', { pickUp: 'Springfield' })
        .then(() => {
          expect(update).toHaveBeenCalledWith('bookings/someUID/someGameId', { pickUp: 'Springfield' });
          done();
        });
    });

  });

  describe('removeUsersInfo', () => {

    it('call remove with bookings/someUID/someGameId', done => {
      remove.and.returnValue(Promise.resolve());

      dbBookings.removeBooking('someUID', 'someGameId')
        .then(() => {
          expect(remove).toHaveBeenCalledWith('bookings/someUID/someGameId');
          done();
        });
    });

  });

});