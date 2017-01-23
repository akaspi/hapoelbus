import noop from 'lodash/noop';
import * as dbBookings from '../../database/dbBookings';
import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from '../../database/utils/db';

describe('dbBookings', () => {

  describe('trackBookings', () => {

    it('should track child add / remove / change', () => {
      dbBookings.trackBookings(noop);

      expect(listenToChildAdded).toHaveBeenCalledWith('bookings', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('bookings', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('bookings', jasmine.any(Function));
    });

    it('should call childAdd with booking, uid, gameId and type:added', done => {
      const bookings = {
        gameId1: {
          pickUp: 'Jerusalem'
        },
        gameId2: {
          pickUp: 'TelAviv'
        }
      };

      listenToChildAdded.and.callFake((path, cb) => cb(bookings, 'someUID'));

      dbBookings.trackBookings(addedBooking => {
        expect(addedBooking).toEqual({
          type: 'added',
          bookings,
          uid: 'someUID'
        });
        done();
      });
    });

    it('should call childChanged with bookings, uid, gameId and type:changed', done => {
      const bookings = {
        gameId1: {
          pickUp: 'Jerusalem'
        },
        gameId2: {
          pickUp: 'TelAviv'
        }
      };

      listenToChildChanged.and.callFake((path, cb) => cb(bookings, 'someUID'));

      dbBookings.trackBookings(changedBooking => {
        expect(changedBooking).toEqual({
          type: 'changed',
          bookings,
          uid: 'someUID'
        });
        done();
      });
    });

    it('should call childRemoved with booking, uid, gameId and type:removed', done => {
      const bookings = {
        gameId1: {
          pickUp: 'Jerusalem'
        },
        gameId2: {
          pickUp: 'TelAviv'
        }
      };

      listenToChildRemoved.and.callFake((path, cb) => cb(bookings, 'someUID'));

      dbBookings.trackBookings(removedBooking => {
        expect(removedBooking).toEqual({
          type: 'removed',
          bookings,
          uid: 'someUID'
        });
        done();
      });
    });

  });

  describe('fetchBookings', () => {

    describe('single user bookings', () => {

      it('should fetch from bookings/someUID', done => {
        read.and.returnValue(Promise.resolve({}));

        dbBookings.fetchBookings('someUID').then(() => {
          expect(read).toHaveBeenCalledWith('bookings/someUID');
          done();
        })
      });

      it('should return a single user bookings', done => {
        read.and.returnValue(Promise.resolve({ firstName: 'spider', lastName: 'pig' }));

        dbBookings.fetchBookings('someUID').then(usersInfo => {
          expect(usersInfo).toEqual({
            someUID: { firstName: 'spider', lastName: 'pig' }
          });
          done();
        })
      });

      it('should return empty object if no user bookings', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookings.fetchBookings('someUID').then(userBookings => {
          expect(userBookings).toEqual({});
          done();
        })
      });

    });

    describe('all bookings', () => {

      it('should fetch from bookings', done => {
        read.and.returnValue(Promise.resolve({}));

        dbBookings.fetchBookings().then(() => {
          expect(read).toHaveBeenCalledWith('bookings');
          done();
        })
      });

      it('should return a all bookings', done => {
        read.and.returnValue(Promise.resolve({
          uid1: { firstName: 'spider', lastName: 'pig' },
          uid2: { firstName: 'can', lastName: 'he swing?' }
        }));

        dbBookings.fetchBookings().then(userBookings => {
          expect(userBookings).toEqual({
            uid1: { firstName: 'spider', lastName: 'pig' },
            uid2: { firstName: 'can', lastName: 'he swing?' }
          });
          done();
        })
      });

      it('should return empty object if no users info', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookings.fetchBookings().then(userBookings => {
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