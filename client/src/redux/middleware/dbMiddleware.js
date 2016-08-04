import * as _ from 'lodash';
import Constants from '../../utils/constants';

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
  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD
};

const parseDBError = errorCode => (errorCodeMap[errorCode] || Constants.ERRORS.GENERAL);

const loginWithFacebook = (storage, action, next, onSuccess, onError) => {
  storage.loginWithFacebook()
    .then(user => next(setCurrentUser(user.uid, user.email)))
    .then(onSuccess)
    .catch(onError);
};

const loginWithGoogle = (storage, action, next, onSuccess, onError) => {
  storage.loginWithGoogle()
    .then(user => next(setCurrentUser(user.uid, user.email)))
    .then(onSuccess)
    .catch(onError);
};

const loginWithEmail = (storage, action, next, onSuccess, onError) => {
  storage.loginWithEmailAndPassword(action.email, action.password)
    .then(user => next(setCurrentUser(user.uid, user.email)))
    .then(onSuccess)
    .catch(onError);
};

const signUpWithEmailAndPassword = (storage, action, next, onSuccess, onError) => {
  storage.createUserWithEmailAndPassword(action.email, action.password)
    .then(user => next(setCurrentUser(user.uid, user.email)))
    .then(onSuccess)
    .catch(onError);
};

const dbUpdateUserInfo = (storage, action, next, onSuccess, onError) => {
  storage.update('usersInfo/' + action.uid, action.userInfo)
    .then(onSuccess)
    .catch(onError);
};

const signOut = (storage, action, next, onSuccess, onError) => {
  storage.signOut()
    .then(onSuccess)
    .catch(onError);
};

const fetchUserInfo = (storage, action, next, onSuccess, onError) => {
  storage.read('usersInfo/' + action.uid)
    .then(userInfo => next(updateUserInfo(action.uid, userInfo)))
    .then(onSuccess)
    .catch(onError);
};

const fetchCurrentUser = (storage, action, next, onSuccess) => {
  storage.getLoggedInUser()
    .then(user => {
      onSuccess();
      if (user) {
        next(setCurrentUser(user.uid, user.email));
      }
    });
};

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

const onActionStart = next => {
  next(startLoading());
  next(reportError(''));
};
const onActionSuccess = next => next(endLoading());
const onActionError = (next, dbError) => {
  next(endLoading());
  next(reportError(parseDBError(dbError.code)));
};

export default storage => store => next => action => { // eslint-disable-line no-unused-vars
  if (_.isFunction(actionsMap[action.type])) {
    onActionStart(next);
    actionsMap[action.type](storage, action, next, onActionSuccess.bind(null, next), onActionError.bind(null, next));
  }

  return next(action);
};