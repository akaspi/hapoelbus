import * as clientDB from '../src/utils/clientDB';
import * as Promise from 'bluebird';

import { EVENTS_RECEIVED } from '../src/redux/actions/actionTypes';

import * as eventActions from '../src/redux/actions/eventActions';
import * as loadingActions from '../src/redux/actions/loadingActions';
import * as errorActions from '../src/redux/actions/errorActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('eventActions spec', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe('events received', () => {

    it('should create action with received events', () => {
      const action = eventActions.eventsReceived({
        evid1: { typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15' },
        evid2: { typeId: 'holon', day: '03', month: '10', year: '2017', hour: '17', minute: '20' },
      });

      expect(action).toEqual({
        type: EVENTS_RECEIVED,
        events: {
          evid1: { typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15' },
          evid2: { typeId: 'holon', day: '03', month: '10', year: '2017', hour: '17', minute: '20' }
        }
      });
    });
  });

  describe('fetch events', () => {

    it('should call events path', done => {
      clientDB.read.and.returnValue(Promise.resolve({}));

      store.dispatch(eventActions.fetchEvents())
        .then(() => {
          expect(clientDB.read).toHaveBeenCalledWith('events');
          done();
        });
    });

    it('should dispatch eventsReceived with events from db', done => {
      clientDB.read.and.returnValue(Promise.resolve({
        evid1: { typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15' }
      }));

      const expectedActions = [
        eventActions.eventsReceived({
          evid1: { typeId: 'hta', day: '12', month: '08', year: '2016', hour: '19', minute: '15' }
        })
      ];

      store.dispatch(eventActions.fetchEvents())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should NOT dispatch eventsReceived if no events found', done => {
      clientDB.read.and.returnValue(Promise.resolve(null));

      const expectedActions = [];

      store.dispatch(eventActions.fetchEvents())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

  });

  describe('update event', () => {

    it('should update event in DB', done => {
      clientDB.update.and.returnValue(Promise.resolve());

      store.dispatch(eventActions.updateEvent('someEventId', { day: '13', month: '04' }))
        .then(() => {
          expect(clientDB.update).toHaveBeenCalledWith('events/someEventId', { day: '13', month: '04' });
          done();
        });
    });

    it('should dispatch eventsReceived with the updated event', done => {
      clientDB.update.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        eventActions.eventsReceived({
          evid: { day: '13', month: '04' }
        }),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.updateEvent('evid', { day: '13', month: '04' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if update event fails', done => {
      clientDB.update.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.updateEvent('evid', { day: '13', month: '04' }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

});