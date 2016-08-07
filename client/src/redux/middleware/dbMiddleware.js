import * as _ from 'lodash';
import Constants from '../../utils/constants';
import * as Promise from 'bluebird';

import * as actionsCreator from '../actions/actionsCreator';

import {
  INITIALIZE_APP,
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

const loginWithFacebook = (storage, action, next) =>
  storage.loginWithFacebook()
    .then(user => next(actionsCreator.setCurrentUser(user.uid, user.email)));

const loginWithGoogle = (storage, action, next) =>
  storage.loginWithGoogle()
    .then(user => next(actionsCreator.setCurrentUser(user.uid, user.email)));

const loginWithEmail = (storage, action, next) =>
  storage.loginWithEmailAndPassword(action.email, action.password)
    .then(user => next(actionsCreator.setCurrentUser(user.uid, user.email)));

const signUpWithEmailAndPassword = (storage, action, next) =>
  storage.createUserWithEmailAndPassword(action.email, action.password)
    .then(user => next(actionsCreator.setCurrentUser(user.uid, user.email)));

const updateUserInfo = (storage, action, next) =>
  storage.update('usersInfo/' + action.uid, action.userInfo)
    .then(() => next(action));

const signOut = (storage, action, next) =>
  storage.signOut()
    .then(() => next(action));

const fetchUserInfo = (storage, action, next) =>
  storage.read('usersInfo/' + action.uid)
    .then(userInfo => next(actionsCreator.updateUserInfo(action.uid, userInfo)));

const fetchCurrentUser = (storage, action, next) =>
  storage.getLoggedInUser()
    .then(user => {
      if (user) {
        next(actionsCreator.setCurrentUser(user.uid, user.email));
      }
    });

const initializeApp = (storage, action, next) =>
  storage.getLoggedInUser()
    .then(user => {
      if (user) {
        next(actionsCreator.setCurrentUser(user.uid, user.email));
        return fetchUserInfo(storage, actionsCreator.fetchUserInfo(user.uid), next);
      }
      return next(actionsCreator.signOut());
    });

const actionsMap = {
  [INITIALIZE_APP]: initializeApp,
  [LOGIN_WITH_FACEBOOK]: loginWithFacebook,
  [LOGIN_WITH_GOOGLE]: loginWithGoogle,
  [LOGIN_WITH_EMAIL]: loginWithEmail,
  [SIGN_UP_WITH_EMAIL_AND_PASSWORD]: signUpWithEmailAndPassword,
  [SIGN_OUT]: signOut,
  [FETCH_CURRENT_USER]: fetchCurrentUser,
  [FETCH_USER_INFO]: fetchUserInfo,
  [UPDATE_USER_INFO]: updateUserInfo
};

export default storage => store => next => action => { // eslint-disable-line no-unused-vars
  if (_.isFunction(actionsMap[action.type])) {
    return Promise.resolve()
      .then(() => next(actionsCreator.startLoading()))
      .then(() => actionsMap[action.type](storage, action, next))
      .catch(dbError => next(actionsCreator.reportError(parseDBError(dbError.code))))
      .finally(() => next(actionsCreator.endLoading()));
  }

  return Promise.resolve()
    .then(() => next(action));
};