import * as clientDB from '../../src/utils/clientDB';
import * as Promise from 'bluebird';

import { USERS_RECEIVED } from '../../src/redux/actions/actionTypes';

import * as userActions from '../../src/redux/actions/userActions';
import * as loadingActions from '../../src/redux/actions/loadingActions';
import * as errorActions from '../../src/redux/actions/errorActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('userActions spec', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store = mockStore({});

  describe('users received', () => {
    it('should create action with received users', () => {
      const action = userActions.usersReceived({
        uid1: { email: 'uid1@gmail.com' },
        uid2: { email: 'uids@gmail.com' }
      });

      expect(action).toEqual({
        type: USERS_RECEIVED,
        users: {
          uid1: { email: 'uid1@gmail.com' },
          uid2: { email: 'uids@gmail.com' }
        }
      });
    });
  });

  describe('fetch users', () => {
    describe('logged in user is NOT admin', () => {
      beforeEach(() => {
        store = mockStore({
          authData: {
            uid: 'SPIDER_PIG_UID',
            isAdmin: false
          }
        });
      });

      it('should read the userInfo relevant to the user id', done => {
        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(clientDB.read.calls.allArgs()).toContain(['usersInfo/SPIDER_PIG_UID']);
            done();
          });
      });

      it('should read the seasonTickets relevant to the user id', done => {
        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(clientDB.read.calls.allArgs()).toContain(['seasonTickets/SPIDER_PIG_UID']);
            done();
          });
      });

      it('should dispatch usersReceived with a single user', done => {
        clientDB.read.and.callFake(path => {
          switch (path) {
            case 'usersInfo/SPIDER_PIG_UID':
              return Promise.resolve({ email: 'some@email.com' });
            case 'seasonTickets/SPIDER_PIG_UID':
              return Promise.resolve(2);
            default:
              return Promise.reject();
          }
        });

        const expectedActions = [
          userActions.usersReceived({
            SPIDER_PIG_UID: {
              email: 'some@email.com',
              seasonTickets: 2
            }
          })
        ];

        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });

      it('should NOT dispatch usersReceived if a user has no userInfo', done => {
        clientDB.read.and.callFake(path => {
          switch (path) {
            case 'usersInfo/SPIDER_PIG_UID':
              return Promise.resolve(null);
            case 'seasonTickets/SPIDER_PIG_UID':
              return Promise.resolve(2);
            default:
              return Promise.reject();
          }
        });

        const expectedActions = [];

        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });
    });

    describe('logged in user is admin', () => {
      beforeEach(() => {
        store = mockStore({
          authData: {
            uid: 'SPIDER_PIG_UID',
            isAdmin: true
          }
        });
      });

      it('should read the userInfo of all users', done => {
        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(clientDB.read.calls.allArgs()).toContain(['usersInfo']);
            done();
          });
      });

      it('should read the seasonTickets of all users', done => {
        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(clientDB.read.calls.allArgs()).toContain(['seasonTickets']);
            done();
          });
      });

      it('should dispatch usersReceived with all users', done => {
        clientDB.read.and.callFake(path => {
          switch (path) {
            case 'usersInfo':
              return Promise.resolve({
                SPIDER_PIG_UID: { email: 'some@email.com' },
                OTHER_UID: { email: 'someOther@email.com' }
              });
            case 'seasonTickets':
              return Promise.resolve({
                SPIDER_PIG_UID: 2,
                OTHER_UID: 1
              });
            default:
              return Promise.reject();
          }
        });

        const expectedActions = [
          userActions.usersReceived({
            SPIDER_PIG_UID: {
              email: 'some@email.com',
              seasonTickets: 2
            },
            OTHER_UID: {
              email: 'someOther@email.com',
              seasonTickets: 1
            }
          })
        ];

        store.dispatch(userActions.fetchUsers())
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
          });
      });
    });
  });

  describe('update user', () => {
    beforeEach(() => {
      store = mockStore({
        authData: {
          uid: 'SPIDER_PIG_UID',
          isAdmin: false
        }
      });
    });

    it('should update userInfo', done => {
      store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?' }))
        .then(() => {
          expect(clientDB.update.calls.mostRecent().args).toEqual(['usersInfo/SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?' }]);
          done();
        });
    });

    it('should dispatch usersReceived with updated user', done => {
      clientDB.update.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        userActions.usersReceived({
          SPIDER_PIG_UID: { firstName: 'CAN_HE_SWING?' }
        }),
        loadingActions.stopLoading()
      ];

      store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if update user fails', done => {
      clientDB.update.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    describe('logged in user is NOT admin', () => {
      it('should NOT set / update seasonTickets', done => {
        store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?', seasonTickets: 5 }))
          .then(() => {
            expect(clientDB.setIn.calls.allArgs()).not.toContain(['seasonTickets/SPIDER_PIG_UID', jasmine.any(Number)]);
            expect(clientDB.update.calls.allArgs()).not.toContain(['seasonTickets/SPIDER_PIG_UID', jasmine.any(Number)]);
            done();
          });
      });
    });

    describe('logged in user is admin', () => {
      beforeEach(() => {
        store = mockStore({
          authData: {
            uid: 'SPIDER_PIG_UID',
            isAdmin: true
          }
        });
      });

      it('should set the seasonTickets', done => {
        store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?', seasonTickets: 5 }))
          .then(() => {
            expect(clientDB.setIn.calls.mostRecent().args).toEqual(['seasonTickets/SPIDER_PIG_UID', 5]);
            done();
          });
      });

      it('should NOT set the seasonTickets if not defined', done => {
        store.dispatch(userActions.updateUser('SPIDER_PIG_UID', { firstName: 'CAN_HE_SWING?' }))
          .then(() => {
            expect(clientDB.setIn.calls.allArgs()).not.toContain(['seasonTickets/SPIDER_PIG_UID', jasmine.any(Number)]);
            done();
          });
      });
    });
  });

  describe('remove user', () => {

    beforeEach(() => {
      store = mockStore({});
    });

    it('should remove userInfo', done => {
      store.dispatch(userActions.removeUser('SPIDER_PIG_UID'))
        .then(() => {
          expect(clientDB.remove.calls.allArgs()).toContain(['usersInfo/SPIDER_PIG_UID']);
          done();
        });
    });

    it('should remove seasonTickets', done => {
      store.dispatch(userActions.removeUser('SPIDER_PIG_UID'))
        .then(() => {
          expect(clientDB.remove.calls.allArgs()).toContain(['seasonTickets/SPIDER_PIG_UID']);
          done();
        });
    });

    it('notify users reducer', done => {
      clientDB.remove.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        userActions.usersRemoved('SPIDER_PIG_UID'),
        loadingActions.stopLoading()
      ];

      store.dispatch(userActions.removeUser('SPIDER_PIG_UID'))
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

      store.dispatch(userActions.removeUser('SPIDER_PIG_UID'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

  });

});