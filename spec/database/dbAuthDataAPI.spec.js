import * as authDataAPI from '../../database/dbAuthDataAPI';
import { onAuthStateChanged, read } from '../../database/utils/db';

describe('dbAuthDataAPI', () => {

  describe('onAuthDataChange', () => {

    describe('user is logged out', () => {

      it('should return null', done => {
        onAuthStateChanged.and.callFake(cb => cb(null));
        read.and.returnValue(Promise.resolve(true));

        authDataAPI.onAuthDataChange(authData => {
          expect(authData).toBeNull();
          expect(read).not.toHaveBeenCalled();
          done();
        })
      });

    });

    describe('user is logged in', () => {

      it('should return authData', done => {
        onAuthStateChanged.and.callFake(cb => cb({
          uid: 1234,
          email: 'spider@pig.com',
          photoURL: 'http://photoURL'
        }));

        authDataAPI.onAuthDataChange(authData => {
          expect(authData).toEqual({
            uid: 1234,
            email: 'spider@pig.com',
            photoURL: 'http://photoURL'
          });
          done();
        })

      });

    });

  });

  describe('isAdmin', () => {

    it('should return false', done => {
      read.and.returnValue(Promise.resolve(false));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return false if value is null', done => {
      read.and.returnValue(Promise.resolve(null));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return true', done => {
      read.and.returnValue(Promise.resolve(true));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(true);
        done();
      })
    });

    it('should read from admins/uid', done => {
      read.and.returnValue(Promise.resolve(null));

      authDataAPI.isAdmin('uid').then(() => {
        expect(read).toHaveBeenCalledWith('admins/uid');
        done();
      })
    });

  });

});
