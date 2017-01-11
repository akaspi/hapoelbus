import * as authDataAPI from '../../apis/authDataAPI';
import { onAuthStateChanged, read } from '../../apis/utils/db';

describe('authDataAPI', () => {

  describe('onAuthDataChange', () => {

    describe('user is logged out', () => {

      it('should return null', done => {
        onAuthStateChanged.and.callFake(cb => cb(null));
        read.and.callFake((path, cb) => cb(true));

        authDataAPI.onAuthDataChange(authData => {
          expect(authData).toBeNull();
          expect(read).not.toHaveBeenCalled();
          done();
        })
      });

    });

    describe('user is logged in', () => {

      it('should return non-admin authData', done => {
        onAuthStateChanged.and.callFake(cb => cb({
          uid: 1234,
          email: 'spider@pig.com',
          photoURL: 'http://photoURL'
        }));
        read.and.callFake((path, cb) => cb(false));

        authDataAPI.onAuthDataChange(authData => {
          expect(read).toHaveBeenCalledWith('admins/1234', jasmine.any(Function));
          expect(authData).toEqual({
            uid: 1234,
            email: 'spider@pig.com',
            photoURL: 'http://photoURL',
            isAdmin: false
          });
          done();
        })

      });

      it('should return admin authData', done => {
        onAuthStateChanged.and.callFake(cb => cb({
          uid: 1234,
          email: 'spider@pig.com',
          photoURL: 'http://photoURL'
        }));
        read.and.callFake((path, cb) => cb(true));

        authDataAPI.onAuthDataChange(authData => {
          expect(read).toHaveBeenCalledWith('admins/1234', jasmine.any(Function));
          expect(authData).toEqual({
            uid: 1234,
            email: 'spider@pig.com',
            photoURL: 'http://photoURL',
            isAdmin: true
          });
          done();
        })

      });

      it('should return non-admin authData if admin is null', done => {
        onAuthStateChanged.and.callFake(cb => cb({
          uid: 1234,
          email: 'spider@pig.com',
          photoURL: 'http://photoURL'
        }));
        read.and.callFake((path, cb) => cb(null));

        authDataAPI.onAuthDataChange(authData => {
          expect(read).toHaveBeenCalledWith('admins/1234', jasmine.any(Function));
          expect(authData).toEqual({
            uid: 1234,
            email: 'spider@pig.com',
            photoURL: 'http://photoURL',
            isAdmin: false
          });
          done();
        })

      });

    });

  });

});
