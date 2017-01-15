import * as _ from 'lodash';
import * as dbBookingsAPI from '../../database/dbBookingsAPI';
import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged } from '../../database/utils/db';

describe('dbBookingsAPI', () => {

  describe('trackBookings', () => {

    it('should track specific user booking', () => {
      dbBookingsAPI.trackBookings('someUID', _.noop());

      expect(listenToChildAdded).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('bookings/someUID', jasmine.any(Function));
    });

    it('should track all bookings', () => {
      dbBookingsAPI.trackBookings(null, _.noop());

      expect(listenToChildAdded).toHaveBeenCalledWith('bookings', jasmine.any(Function));
      expect(listenToChildRemoved).toHaveBeenCalledWith('bookings', jasmine.any(Function));
      expect(listenToChildChanged).toHaveBeenCalledWith('bookings', jasmine.any(Function));
    });

    it('should call childAdd with booking, uid, gameId and type:added', done => {
      const booking = {
        pickUp: 'Springfield'
      };

      listenToChildAdded.and.callFake((path, cb) => cb(booking, 'someUID', 'someGameId'));

      dbBookingsAPI.trackBookings(null, addedBooking => {
        expect(addedBooking).toEqual({
          type: 'added',
          booking: booking,
          uid: 'someUID',
          gameId: 'someGameId'
        });
        done();
      });
    });

    it('should call childChanged with bookings, uid, gameId and type:changed', done => {
      const booking = {
        pickUp: 'Jerusalem'
      };

      listenToChildChanged.and.callFake((path, cb) => cb(booking, 'someUID', 'someGameId'));

      dbBookingsAPI.trackBookings(null, changedBooking => {
        expect(changedBooking).toEqual({
          type: 'changed',
          booking: booking,
          uid: 'someUID',
          gameId: 'someGameId'
        });
        done();
      });
    });

    it('should call childRemoved with booking, uid, gameId and type:removed', done => {
      const booking = {
        pickUp: 'Springfield'
      };

      listenToChildRemoved.and.callFake((path, cb) => cb(booking, 'someUID', 'someGameId'));

      dbBookingsAPI.trackBookings(null, removedBooking => {
        expect(removedBooking).toEqual({
          type: 'removed',
          booking: booking,
          uid: 'someUID',
          gameId: 'someGameId'
        });
        done();
      });
    });

  });

  describe('fetchBookings', () => {

    describe('single user bookings', () => {

      it('should fetch from bookings/someUID', done => {
        read.and.returnValue(Promise.resolve({}));

        dbBookingsAPI.fetchBookings('someUID').then(() => {
          expect(read).toHaveBeenCalledWith('bookings/someUID');
          done();
        })
      });

      it('should return a single user bookings', done => {
        read.and.returnValue(Promise.resolve({ firstName: 'spider', lastName: 'pig' }));

        dbBookingsAPI.fetchBookings('someUID').then(usersInfo => {
          expect(usersInfo).toEqual({
            someUID: { firstName: 'spider', lastName: 'pig' }
          });
          done();
        })
      });

      it('should return empty object if no user bookings', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookingsAPI.fetchBookings('someUID').then(userBookings => {
          expect(userBookings).toEqual({});
          done();
        })
      });

    });

    describe('all bookings', () => {

      it('should fetch from bookings', done => {
        read.and.returnValue(Promise.resolve({}));

        dbBookingsAPI.fetchBookings().then(() => {
          expect(read).toHaveBeenCalledWith('bookings');
          done();
        })
      });

      it('should return a all bookings', done => {
        read.and.returnValue(Promise.resolve({
          uid1: { firstName: 'spider', lastName: 'pig' },
          uid2: { firstName: 'can', lastName: 'he swing?' }
        }));

        dbBookingsAPI.fetchBookings().then(userBookings => {
          expect(userBookings).toEqual({
            uid1: { firstName: 'spider', lastName: 'pig' },
            uid2: { firstName: 'can', lastName: 'he swing?' }
          });
          done();
        })
      });

      it('should return empty object if no users info', done => {
        read.and.returnValue(Promise.resolve(null));

        dbBookingsAPI.fetchBookings().then(userBookings => {
          expect(userBookings).toEqual({});
          done();
        })
      });

    });

  });

  describe('updateBooking', () => {

    it('call update with bookings/uid/gameId and partial booking', done => {
      update.and.returnValue(Promise.resolve());

      dbBookingsAPI.updateBooking('someUID', 'someGameId', { pickUp: 'Springfield' })
        .then(() => {
          expect(update).toHaveBeenCalledWith('bookings/someUID/someGameId', { pickUp: 'Springfield' });
          done();
        });
    });

  });

  describe('removeUsersInfo', () => {

    it('call remove with bookings/someUID/someGameId', done => {
      remove.and.returnValue(Promise.resolve());

      dbBookingsAPI.removeBooking('someUID', 'someGameId')
        .then(() => {
          expect(remove).toHaveBeenCalledWith('bookings/someUID/someGameId');
          done();
        });
    });

  });

});