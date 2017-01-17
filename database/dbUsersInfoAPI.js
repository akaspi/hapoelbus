import * as _ from 'lodash';
import isFunction from 'lodash/isFunction';

import { read, update, remove, listenToChildAdded, listenToChildRemoved, listenToChildChanged, listenToValueChange } from './utils/db';

const USERS_INFO = 'usersInfo';
const SEASON_TICKETS = 'seasonTickets';

function buildUser(userInfo, seasonTickets) {
  const user = _.merge({}, userInfo);
  if (seasonTickets) {
    _.merge(user, { seasonTickets });
  }
  return user;
}

function fetchSingleUserInfo(uid) {
  const userReadPromises = [
    read(USERS_INFO + '/' + uid),
    read(SEASON_TICKETS + '/' + uid)
  ];

  return Promise.all(userReadPromises)
    .then(([userInfo, seasonTickets]) => {
      if (userInfo) {
        return { [uid]: buildUser(userInfo, seasonTickets) };
      }
      return {};
    });
}

function fetchAllUsers() {
  const userReadPromises = [
    read(USERS_INFO),
    read(SEASON_TICKETS)
  ];

  return Promise.all(userReadPromises)
    .then(([usersInfo, seasonTickets]) =>
      _.transform(usersInfo, (acc, info, uid) => {
        acc[uid] = buildUser(info, seasonTickets && seasonTickets[uid]);
      }, {})
    );
}

export function trackUsersInfo(uid, cb) {
  if (isFunction(uid)) {
    cb = uid;
    uid = null;
  }

  const createReportChange = type => (userInfo, uid) => {
    cb({ type, userInfo, uid });
  };

  if (uid) {
    listenToValueChange(`${USERS_INFO}/${uid}`, createReportChange('changed'));
  } else {
    listenToChildAdded(USERS_INFO, createReportChange('added'));
    listenToChildRemoved(USERS_INFO, createReportChange('removed'));
    listenToChildChanged(USERS_INFO, createReportChange('changed'));
  }
}

export function fetchUsersInfo(uid) {
  if (uid) {
    return fetchSingleUserInfo(uid);
  }
  return fetchAllUsers();
}

export function updateUserInfo(uid, userInfo) {
  return update(USERS_INFO + '/' + uid, userInfo);
}

export function removeUserInfo(uid) {
  return remove(USERS_INFO + '/' + uid);
}