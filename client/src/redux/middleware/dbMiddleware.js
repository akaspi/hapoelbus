import * as _ from 'lodash';
import Constants from '../../utils/constants';
import * as Promise from 'bluebird';

import {
  setCurrentUser,
  updateUserInfo,
  startLoading,
  endLoading,
  reportError
} from '../actions/actionsCreator';

import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_EMAIL,
  SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  UPDATE_USER_INFO,
  FETCH_CURRENT_USER,
  FETCH_USER_INFO,
  SIGN_OUT
} from '../actions/actionTypes';

const errorCodeMap = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE,
  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD,
  'auth/account-exists-with-different-credential': Constants.ERRORS.EMAIL_IN_USE
};

const parseDBError = errorCode => (errorCodeMap[errorCode] || Constants.ERRORS.GENERAL);

const loginWithFacebook = storage =>
  storage.loginWithFacebook()
    .then(user => [setCurrentUser(user.uid, user.email)]);

const loginWithGoogle = storage =>
  storage.loginWithGoogle()
    .then(user => [setCurrentUser(user.uid, user.email)]);

const loginWithEmail = (storage, action) =>
  storage.loginWithEmailAndPassword(action.email, action.password)
    .then(user => [setCurrentUser(user.uid, user.email)]);

const signUpWithEmailAndPassword = (storage, action) =>
  storage.createUserWithEmailAndPassword(action.email, action.password)
    .then(user => [setCurrentUser(user.uid, user.email)]);

const dbUpdateUserInfo = (storage, action) =>
  storage.update('usersInfo/' + action.uid, action.userInfo)
    .then(() => [action]);

const signOut = (storage, action) =>
  storage.signOut()
    .then(() => [action]);

const fetchUserInfo = (storage, action) =>
  storage.read('usersInfo/' + action.uid)
    .then(userInfo => [updateUserInfo(action.uid, userInfo)]);

const fetchCurrentUser = storage =>
  storage.getLoggedInUser()
    .then(user => {
      if (user) {
        return [setCurrentUser(user.uid, user.email)];
      }
      return [];
    });

const actionsMap = {
  [LOGIN_WITH_FACEBOOK]: loginWithFacebook,
  [LOGIN_WITH_GOOGLE]: loginWithGoogle,
  [LOGIN_WITH_EMAIL]: loginWithEmail,
  [SIGN_UP_WITH_EMAIL_AND_PASSWORD]: signUpWithEmailAndPassword,
  [SIGN_OUT]: signOut,
  [FETCH_CURRENT_USER]: fetchCurrentUser,
  [FETCH_USER_INFO]: fetchUserInfo,
  [UPDATE_USER_INFO]: dbUpdateUserInfo
};

export default storage => store => next => action => { // eslint-disable-line no-unused-vars
  if (_.isFunction(actionsMap[action.type])) {
    return Promise.resolve()
      .then(() => next(startLoading()))
      .then(() => actionsMap[action.type](storage, action))
      .then(nextActions => _.forEach(nextActions, nextAction => next(nextAction)))
      .catch(dbError => next(reportError(parseDBError(dbError.code))))
      .finally(() => next(endLoading()));
  }

  return Promise.resolve()
    .then(() => next(action));
};