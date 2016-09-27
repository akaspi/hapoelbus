import * as _ from 'lodash';

import { EVENTS_RECEIVED, EVENT_REMOVED } from './actionTypes';

import * as clientDB from '../../utils/clientDB';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

const EVENT_KEYS = ['typeId', 'day', 'month', 'year', 'hour', 'minute', 'status'];
const EVENTS_PATH = 'events';

export const eventRemoved = eventId => ({
  type: EVENT_REMOVED,
  eventId
});

export const eventsReceived = events => ({
  type: EVENTS_RECEIVED,
  events
});

export const fetchEvents = () => dispatch =>
  clientDB.read(EVENTS_PATH)
    .then(events => {
      if (events) {
        return dispatch(eventsReceived(events));
      }
      return null;
    });

export const createEvent = event => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.push(EVENTS_PATH, event)
    .then(eventId => dispatch(eventsReceived({ [eventId]: event })))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const updateEvent = (eventId, event) => dispatch => {
  dispatch(loadingActions.startLoading());

  const eventToUpdate = _.pick(event, EVENT_KEYS);

  return clientDB.update('events/' + eventId, eventToUpdate)
    .then(() => dispatch(eventsReceived({ [eventId]: eventToUpdate })))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const removeEvent = eventId => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.remove(`${EVENTS_PATH}/${eventId}`)
    .then(() => dispatch(eventRemoved(eventId)))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};