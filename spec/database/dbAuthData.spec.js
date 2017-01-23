import * as dbAuthData from '../../database/dbAuthData';
import * as db from '../../database/utils/db';

describe('dbAuthData', () => {

  describe('isAdmin', () => {

    it('should return false', done => {
      db.read.and.returnValue(Promise.resolve(false));

      dbAuthData.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return false if value is null', done => {
      db.read.and.returnValue(Promise.resolve(null));

      dbAuthData.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(false);
        done();
      })
    });

    it('should return true', done => {
      db.read.and.returnValue(Promise.resolve(true));

      dbAuthData.isAdmin('uid').then(idAdmin => {
        expect(idAdmin).toBe(true);
        done();
      })
    });

    it('should read from admins/uid', done => {
      db.read.and.returnValue(Promise.resolve(null));

      dbAuthData.isAdmin('uid').then(() => {
        expect(db.read).toHaveBeenCalledWith('admins/uid');
        done();
      })
    });

  });

  describe('social login', () => {

    it('should login with google', done => {
      db.loginWithGoogle.and.returnValue(Promise.resolve());

      dbAuthData.loginWithGoogle().then(() => {
        expect(db.loginWithGoogle).toHaveBeenCalled();
        done();
      });
    });

    it('should login with facebook', done => {
      db.loginWithFacebook.and.returnValue(Promise.resolve());

      dbAuthData.loginWithFacebook().then(() => {
        expect(db.loginWithFacebook).toHaveBeenCalled();
        done();
      });
    });

  });

  describe('email and password', () => {

    it('should login with email and password', done => {
      db.loginWithEmailAndPassword.and.returnValue(Promise.resolve());

      dbAuthData.loginWithEmailAndPassword('spider@pig.com', '123456').then(() => {
        expect(db.loginWithEmailAndPassword).toHaveBeenCalledWith('spider@pig.com', '123456');
        done();
      });
    });

    it('should sign up with email and password', done => {
      db.createUserWithEmailAndPassword.and.returnValue(Promise.resolve());

      dbAuthData.signUpWithEmailAndPassword('spider@pig.com', '123456').then(() => {
        expect(db.createUserWithEmailAndPassword).toHaveBeenCalledWith('spider@pig.com', '123456');
        done();
      });
    });

    it('should request reset password email', done => {
      db.sendPasswordResetEmail.and.returnValue(Promise.resolve());

      dbAuthData.sendPasswordResetEmail('spider@pig').then(() => {
        expect(db.sendPasswordResetEmail).toHaveBeenCalledWith('spider@pig');
        done();
      });
    });

  });

  it('should log out', done => {
    db.signOut.and.returnValue(Promise.resolve());

    dbAuthData.logOut().then(() => {
      expect(db.signOut).toHaveBeenCalled();
      done();
    });
  });

});
