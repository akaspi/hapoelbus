import * as _ from 'lodash';
import dbMiddleware from '../src/redux/middleware/dbMiddleware';
import * as clientDB from '../src/utils/clientDB';
import * as Promise from 'bluebird';
import Constants from '../src/utils/constants';

import {
  loginWithFacebook,
  loginWithGoogle,
  loginWithEmailAndPassword,
  signUpWithUserAndPassword,
  updateUserInfo,
  setCurrentUser,
  signOut,
  startLoading,
  reportError,
  endLoading
} from '../src/redux/actions/actionsCreator';

describe('dbMiddleware spec', () => {
  let mockedClientDB;
  let mockStore;
  let next;

  beforeEach(() => {
    mockedClientDB = _.mapValues(clientDB, funcName => jasmine.createSpy(funcName));
    mockStore = {};
    next = jasmine.createSpy('spyNext');
  });

  const getNextActions = () => _.map(next.calls.allArgs(), args => _.first(args));

  it('should pass the action only if should not handle', done => {
    const unknownAction = { type: 'UNKNOWN_ACTION_TYPE' };
    dbMiddleware(mockedClientDB)(mockStore)(next)(unknownAction)
      .then(() => {
        expect(getNextActions()).toEqual([unknownAction]);
      })
      .then(done);
  });

  describe('signIn', () => {
    const user = { uid: 'UID', email: 'spider@pig.com' };

    it('should sign in with facebook', done => {
      mockedClientDB.loginWithFacebook = jasmine.createSpy('loginWithFacebook').and.returnValue(Promise.resolve(user));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithFacebook())
        .then(() => {
          const expectedNextActions = [startLoading(), setCurrentUser(user.uid, user.email), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to sign in with facebook', done => {
      mockedClientDB.loginWithFacebook = jasmine.createSpy('loginWithFacebook').and.returnValue(Promise.reject({ code: '1234' }));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithFacebook())
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should login with google', done => {
      mockedClientDB.loginWithGoogle = jasmine.createSpy('loginWithGoogle').and.returnValue(Promise.resolve(user));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithGoogle())
        .then(() => {
          const expectedNextActions = [startLoading(), setCurrentUser(user.uid, user.email), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to sign in with google', done => {
      mockedClientDB.loginWithGoogle = jasmine.createSpy('loginWithGoogle').and.returnValue(Promise.reject({ code: '1234' }));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithGoogle())
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should sign in with email and password', done => {
      mockedClientDB.loginWithEmailAndPassword = jasmine.createSpy('loginWithEmailAndPassword').and.returnValue(Promise.resolve(user));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithEmailAndPassword())
        .then(() => {
          const expectedNextActions = [startLoading(), setCurrentUser(user.uid, user.email), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to sign in with email and password', done => {
      mockedClientDB.loginWithEmailAndPassword = jasmine.createSpy('loginWithEmailAndPassword').and.returnValue(Promise.reject({ code: '1234' }));

      dbMiddleware(mockedClientDB)(mockStore)(next)(loginWithEmailAndPassword())
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });
  });

  describe('signUp', () => {
    const user = { uid: 'UID', email: 'spider@pig.com' };

    it('should sign up with email and password', done => {
      mockedClientDB.createUserWithEmailAndPassword = jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.resolve(user));

      dbMiddleware(mockedClientDB)(mockStore)(next)(signUpWithUserAndPassword())
        .then(() => {
          const expectedNextActions = [startLoading(), setCurrentUser(user.uid, user.email), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to sign up with email and password', done => {
      mockedClientDB.createUserWithEmailAndPassword = jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.reject({ code: '1234' }));

      dbMiddleware(mockedClientDB)(mockStore)(next)(signUpWithUserAndPassword())
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });
  });

  describe('signOut', () => {
    it('should sign out successfully', done => {
      mockedClientDB.signOut = jasmine.createSpy('signOut').and.returnValue(Promise.resolve());

      dbMiddleware(mockedClientDB)(mockStore)(next)(signOut())
        .then(() => {
          const expectedNextActions = [startLoading(), signOut(), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to sign out', done => {
      mockedClientDB.signOut = jasmine.createSpy('signOut').and.returnValue(Promise.reject({ code: '1234' }));

      dbMiddleware(mockedClientDB)(mockStore)(next)(signOut())
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });
  });

  describe('updateUserInfo', () => {
    it('should update the user info successfully', done => {
      mockedClientDB.update = jasmine.createSpy('update').and.returnValue(Promise.resolve());
      const uid = 'UID';
      const userInfo = {
        email: 'some@email.com'
      };

      dbMiddleware(mockedClientDB)(mockStore)(next)(updateUserInfo(uid, userInfo))
        .then(() => {
          const expectedNextActions = [startLoading(), updateUserInfo(uid, userInfo), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });

    it('should fail to update user info', done => {
      mockedClientDB.update = jasmine.createSpy('update').and.returnValue(Promise.reject({ code: '1234' }));
      const uid = 'UID';
      const userInfo = {
        email: 'some@email.com'
      };

      dbMiddleware(mockedClientDB)(mockStore)(next)(updateUserInfo(uid, userInfo))
        .then(() => {
          const expectedNextActions = [startLoading(), reportError(Constants.ERRORS.GENERAL), endLoading()];
          expect(getNextActions()).toEqual(expectedNextActions);
        })
        .finally(done);
    });
  });
});