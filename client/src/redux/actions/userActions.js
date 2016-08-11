import { USER_INFO_RECEIVED } from './actionTypes';

import * as clientDB from '../../utils/clientDB';
import * as loadingActions from './loadingActions';

export const userInfoReceived = (uid, userInfo) => ({
  type: USER_INFO_RECEIVED,
  uid,
  userInfo
});

export const fetchUserInfo = uid => dispatch =>
  clientDB.read('usersInfo/' + uid)
    .then(userInfo => dispatch(userInfoReceived(uid, userInfo)));

export const updateUserInfo = (uid, userInfo) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.update('usersInfo/' + uid, userInfo)
    .then(() => dispatch(userInfoReceived(uid, userInfo)))
    .finally(() => dispatch(loadingActions.stopLoading()));
};