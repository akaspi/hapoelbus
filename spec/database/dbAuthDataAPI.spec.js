import * as authDataAPI from '../../database/dbAuthDataAPI';
import * as db from '../../database/utils/db';

describe('dbAuthDataAPI', () => {

  describe('onAuthDataChange', () => {

    describe('user is logged out', () => {

      it('should return null', done => {
        db.onAuthStateChanged.and.callFake(cb => cb(null));
        db.read.and.returnValue(Promise.resolve(true));

        authDataAPI.onAuthDataChange(authData => {
          expect(authData).toBeNull();
          expect(db.read).not.toHaveBeenCalled();
          done();
        })
      });

    });

    describe('user is logged in', () => {

      it('should return authData', done => {
        db.onAuthStateChanged.and.callFake(cb => cb({
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
      db.read.and.returnValue(Promise.resolve(false));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return false if value is null', done => {
      db.read.and.returnValue(Promise.resolve(null));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return true', done => {
      db.read.and.returnValue(Promise.resolve(true));

      authDataAPI.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(true);
        done();
      })
    });

    it('should read from admins/uid', done => {
      db.read.and.returnValue(Promise.resolve(null));

      authDataAPI.isAdmin('uid').then(() => {
        expect(db.read).toHaveBeenCalledWith('admins/uid');
        done();
      })
    });

  });

  describe('social login', () => {

    it('should login with google', done => {
      db.loginWithGoogle.and.returnValue(Promise.resolve());

      authDataAPI.loginWithGoogle().then(() => {
        expect(db.loginWithGoogle).toHaveBeenCalled();
        done();
      });
    });

    it('should login with facebook', done => {
      db.loginWithFacebook.and.returnValue(Promise.resolve());

      authDataAPI.loginWithFacebook().then(() => {
        expect(db.loginWithFacebook).toHaveBeenCalled();
        done();
      });
    });

  });

  describe('email and password', () => {

    it('should login with email and password', done => {
      db.loginWithEmailAndPassword.and.returnValue(Promise.resolve());

      authDataAPI.loginWithEmailAndPassword('spider@pig.com', '123456').then(() => {
        expect(db.loginWithEmailAndPassword).toHaveBeenCalledWith('spider@pig.com', '123456');
        done();
      });
    });

    it('should sign up with email and password', done => {
      db.createUserWithEmailAndPassword.and.returnValue(Promise.resolve());

      authDataAPI.signUpWithEmailAndPassword('spider@pig.com', '123456').then(() => {
        expect(db.createUserWithEmailAndPassword).toHaveBeenCalledWith('spider@pig.com', '123456');
        done();
      });
    });

    it('should request reset password email', done => {
      db.sendPasswordResetEmail.and.returnValue(Promise.resolve());

      authDataAPI.sendPasswordResetEmail('spider@pig').then(() => {
        expect(db.sendPasswordResetEmail).toHaveBeenCalledWith('spider@pig');
        done();
      });
    });

  });

  it('should log out', done => {
    db.signOut.and.returnValue(Promise.resolve());

    authDataAPI.logOut().then(() => {
      expect(db.signOut).toHaveBeenCalled();
      done();
    });
  });

});