import * as _ from 'lodash';
import dbMiddleware from '../src/redux/middleware/dbMiddleware';
import * as clientDB from '../src/utils/clientDB';
import * as Promise from 'bluebird';
import configureStore from 'redux-mock-store';

import {
  signOut
} from '../src/redux/actions/actionsCreator';

fdescribe('dbMiddleware spec', () => {

  let mockedClientDB;
  let mockStore;
  let next;

  beforeEach(() => {
    mockedClientDB = _.mapValues(clientDB, (dbFunc) => jasmine.createSpy(dbFunc.name).and.returnValue(Promise.resolve()));
    mockStore = configureStore([ dbMiddleware(mockedClientDB) ]);

    next = jasmine.createSpy('spyNext');
  });

  it('should work', function() {
    const store = mockStore({ currentUser: null });

    // store.dispatch(signOut());
    //
    // setTimeout(() => {
    //   expect(store.getActions()).toEqual(0);
    //   done();
    // }, 1000)


    const res = dbMiddleware(mockedClientDB)(store)(next)(signOut());
    const x = 3;
    //
    // setTimeout(() => {
    //   expect(mockedClientDB.signOut).toHaveBeenCalled();
    //   expect(next.calls.count()).toEqual(3);
    //   done();
    // }, 1000);
  });
});