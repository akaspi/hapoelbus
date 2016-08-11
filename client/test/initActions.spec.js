import * as clientDB from '../src/utils/clientDB';
import * as Promise from 'bluebird';

import * as initActions from '../src/redux/actions/initActions';
import * as userActions from '../src/redux/actions/userActions';
import * as loadingActions from '../src/redux/actions/loadingActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('initActions spec', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  describe('user is logged in', () => {
    it('should set the current user and fetch userInfo', done => {
      clientDB.getLoggedInUser.and.returnValue(Promise.resolve({ uid: 'UID', email: 'aa@bb.com' }));
      clientDB.read.and.returnValue(Promise.resolve({ firstName: 'Spider', lastName: 'pig' }));

      const expectedActions = [
        loadingActions.startLoading(),
        userActions.setCurrentUser('UID', 'aa@bb.com'),
        userActions.userInfoReceived('UID', { firstName: 'Spider', lastName: 'pig' }),
        loadingActions.stopLoading()
      ];

      const store = mockStore({ });
      store.dispatch(initActions.initializeApp())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('user is logged out', () => {
    it('should NOT call any method', done => {
      clientDB.getLoggedInUser.and.returnValue(Promise.resolve(null));

      const expectedActions = [
        loadingActions.startLoading(),
        loadingActions.stopLoading()
      ];

      const store = mockStore({ });
      store.dispatch(initActions.initializeApp())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});