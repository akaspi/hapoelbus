import * as clientDB from '../src/utils/clientDB';
import * as Promise from 'bluebird';

import * as authActions from '../src/redux/actions/authActions';
import * as loadingActions from '../src/redux/actions/loadingActions';
import * as errorActions from '../src/redux/actions/errorActions';
import * as routingActions from '../src/redux/actions/routingActions';

const Constants = require('../src/utils/constants');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('authActions spec', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  it('should sign out successfully', done => {
    clientDB.signOut.and.returnValue(Promise.resolve());

    const expectedActions = [
      loadingActions.startLoading(),
      authActions.userSignedOut(),
      routingActions.reset(Constants.ROUTING.PAGES.AUTH),
      loadingActions.stopLoading()
    ];

    const store = mockStore({});
    store.dispatch(authActions.signOut())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should fail to sign out', done => {
    clientDB.signOut.and.returnValue(Promise.reject({ code: '1234' }));

    const expectedActions = [
      loadingActions.startLoading(),
      errorActions.reportError(),
      loadingActions.stopLoading()
    ];

    const store = mockStore({});
    store.dispatch(authActions.signOut())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});