import * as _ from 'lodash';

import { USERS_RECEIVED, USER_REMOVED } from './actionTypes';
import { Promise } from 'bluebird';

import * as Constants from '../../utils/constants';
import * as clientDB from '../../utils/clientDB';
import * as loadingActions from './loadingActions';
import * as navigationActions from './navigationActions';
import * as errorActions from './errorActions';

const USER_INFO_KEYS = ['email', 'firstName', 'lastName', 'phonePrefix', 'phoneNumber', 'requestForMembership', 'station', 'subscribeSMS', 'subscribeMail', 'photoURL'];
const PATH_MAP = {
  USERS_INFO: 'usersInfo',
  SEASON_TICKETS: 'seasonTickets',
  BOOKINGS: 'bookings'
};

const buildUser = (userInfo, seasonTickets) => {
  const user = _.merge({}, userInfo);
  if (seasonTickets) {
    _.merge(user, { seasonTickets });
  }
  return user;
};

const fetchAllUsers = () => {
  const userReadPromises = [
    clientDB.read(PATH_MAP.USERS_INFO),
    clientDB.read(PATH_MAP.SEASON_TICKETS)
  ];

  return Promise.all(userReadPromises)
    .then(([usersInfo, seasonTickets]) =>
      _.transform(usersInfo, (acc, info, uid) => {
        acc[uid] = buildUser(info, seasonTickets && seasonTickets[uid]); // eslint-disable-line no-param-reassign
      }, {})
    );
};

const fetchSingleUser = uid => {
  const userReadPromises = [
    clientDB.read(PATH_MAP.USERS_INFO + '/' + uid),
    clientDB.read(PATH_MAP.SEASON_TICKETS + '/' + uid)
  ];

  return Promise.all(userReadPromises)
    .then(([userInfo, seasonTickets]) => {
      if (userInfo) {
        return { [uid]: buildUser(userInfo, seasonTickets) };
      }
      return null;
    });
};

export const usersRemoved = uid => ({
  type: USER_REMOVED,
  uid
});

export const usersReceived = users => ({
  type: USERS_RECEIVED,
  users
});

export const fetchUsers = () => (dispatch, getState) => {
  const uid = _.get(getState(), ['authData', 'uid']);
  const isAdmin = _.get(getState(), ['authData', 'isAdmin']);
  const fetchPromise = isAdmin ? fetchAllUsers() : fetchSingleUser(uid);

  return fetchPromise
    .then(users => {
      if (users) {
        dispatch(usersReceived(users));
      }
    });
};

export const updateUser = (uid, user) => (dispatch, getState) => {
  dispatch(loadingActions.startLoading());

  const isAdmin = _.get(getState(), ['authData', 'isAdmin']);

  const userUpdatePromises = [
    clientDB.update('usersInfo/' + uid, _.pick(user, USER_INFO_KEYS))
  ];

  if (isAdmin && user.seasonTickets) {
    userUpdatePromises.push(clientDB.setIn('seasonTickets/' + uid, user.seasonTickets));
  }

  return Promise.all(userUpdatePromises)
    .then(() => dispatch(usersReceived({ [uid]: user })))
    .then(() => dispatch(navigationActions.navigateTo(Constants.PAGES.HOME.val)))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const removeUser = uid => dispatch => {
  dispatch(loadingActions.startLoading());

  const userRemovePromises = _.map(PATH_MAP, userPath => clientDB.remove(`${userPath}/${uid}`));

  return Promise.all(userRemovePromises)
    .then(() => dispatch(usersRemoved(uid)))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};