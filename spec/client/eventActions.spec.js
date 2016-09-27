import * as clientDB from '../../src/utils/clientDB';
import * as Promise from 'bluebird';

import { EVENTS_RECEIVED, EVENT_REMOVED } from '../../src/redux/actions/actionTypes';

import * as eventActions from '../../src/redux/actions/eventActions';
import * as loadingActions from '../../src/redux/actions/loadingActions';
import * as errorActions from '../../src/redux/actions/errorActions';

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

  describe('events removed', () => {

    it('should create action with removed event id', () => {
      const action = eventActions.eventRemoved('someEventId');

      expect(action).toEqual({
        type: EVENT_REMOVED,
        eventId: 'someEventId'
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

  describe('create event', () => {

    it('should create event in DB', done => {
      const newEvent = { typeId: 'someTypeId', day: '13', month: '04', year: '2016', status: 'openForAll' };
      clientDB.push.and.returnValue(Promise.resolve());

      store.dispatch(eventActions.createEvent(newEvent))
        .then(() => {
          expect(clientDB.push).toHaveBeenCalledWith('events', newEvent);
          done();
        });
    });

    it('should notify events reducer', done => {
      const newEvent = { typeId: 'someTypeId', day: '13', month: '04', year: '2016', status: 'openForAll' };
      const newEventId = 'new_event_id';

      clientDB.push.and.returnValue(Promise.resolve(newEventId));

      const expectedActions = [
        loadingActions.startLoading(),
        eventActions.eventsReceived({
          [newEventId]: newEvent
        }),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.createEvent(newEvent))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if action failed', done => {
      const newEvent = { typeId: 'someTypeId', day: '13', month: '04', year: '2016', status: 'openForAll' };

      clientDB.push.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.createEvent(newEvent))
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

  describe('remove event', () => {

    it('should remove event from DB', done => {
      clientDB.remove.and.returnValue(Promise.resolve());

      store.dispatch(eventActions.removeEvent('someEventId'))
        .then(() => {
          expect(clientDB.remove).toHaveBeenCalledWith('events/someEventId');
          done();
        });
    });

    it('should notify events reducer', done => {
      clientDB.remove.and.returnValue(Promise.resolve());

      const expectedActions = [
        loadingActions.startLoading(),
        eventActions.eventRemoved('someEventId'),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.removeEvent('someEventId'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should report error if remove event fails', done => {
      clientDB.remove.and.returnValue(Promise.reject({ code: '1234' }));

      const expectedActions = [
        loadingActions.startLoading(),
        errorActions.reportError(),
        loadingActions.stopLoading()
      ];

      store.dispatch(eventActions.removeEvent('someEventId'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

});