import * as _ from 'lodash';
import clientConfig from '../../../../conf/client.config.json';
import firebase from 'firebase';
import Constants from '../../utils/constants';

import { setCurrentUser, updateUserInfo, startLoading, endLoading, reportError } from '../actions/actionsCreator';
import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  UPDATE_USER_INFO,
  FETCH_CURRENT_USER,
  FETCH_USER_INFO,
  SIGN_OUT
} from '../actions/actionTypes';

const CURRENT_USER_KEYS = ['uid', 'email'];
const errorCodeMap = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE
};

const parseDBError = errorCode => (errorCodeMap[errorCode] || Constants.ERRORS.GENERAL);

const asyncEnd = (next, cb) => (response) => {
  next(endLoading());
  cb(response);
};

const loginWithProvider = (provider, onSuccess, onError) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => onSuccess(_.pick(result.user, CURRENT_USER_KEYS)))
    .catch(error => onError(error));
};

const loginWithFacebook = next => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const onLoginSuccess = (currentUser) => next(setCurrentUser(currentUser));
  const onLoginError = error => next(reportError(error.message));

  loginWithProvider(facebookProvider, onLoginSuccess, onLoginError);
};

const loginWithGoogle = next => {
  const facebookProvider = new firebase.auth.GoogleAuthProvider();
  const onLoginSuccess = (currentUser) => next(setCurrentUser(currentUser));
  const onLoginError = error => next(reportError(error.message));

  loginWithProvider(facebookProvider, onLoginSuccess, onLoginError);
};

const signUpWithEmailAndPassword = (next, action) => {
  const onSignUpSuccess = (user) => next(setCurrentUser(_.pick(user, CURRENT_USER_KEYS)));
  const onSignUpError = (error) => next(reportError(parseDBError(error.code)));

  next(startLoading());
  firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
    .then(asyncEnd(next, onSignUpSuccess))
    .catch(asyncEnd(next, onSignUpError));
};

const dbUpdateUserInfo = (next, action) => {
  const onUpdateComplete = (error) => {
    if (error) {
      return next(reportError(error.message));
    }
    return next(action);
  };

  next(startLoading());
  firebase.database().ref('usersInfo/' + action.uid).update(action.userInfo, asyncEnd(next, onUpdateComplete));
};

const dbSignOut = (next, action) => {
  firebase.auth().signOut().then(
    () => next(action),
    error => next(reportError(error.message))
  );
};

const fetchUserInfo = (next, action) => {
  const onFetchSuccess = snapshot => next(updateUserInfo(action.uid, snapshot.val()));
  const onFetchError = error => next(reportError(error.message));

  next(startLoading());
  firebase.database().ref('usersInfo/' + action.uid).once('value', asyncEnd(next, onFetchSuccess), asyncEnd(next, onFetchError));
};

const fetchCurrentUser = (next) => {
  const onAuthStateChange = (user) => {
    next(endLoading());
    if (user) {
      next(setCurrentUser(_.pick(user, CURRENT_USER_KEYS)));
    }
    firebase.auth().removeAuthTokenListener(onAuthStateChange);
  };

  next(startLoading());
  firebase.auth().onAuthStateChanged(onAuthStateChange);
};

firebase.initializeApp(clientConfig.firebase);
window.fb = firebase;

export default store => next => action => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case LOGIN_WITH_FACEBOOK:
      return loginWithFacebook(next);
    case LOGIN_WITH_GOOGLE:
      return loginWithGoogle(next);
    case SIGN_UP_WITH_EMAIL_AND_PASSWORD:
      return signUpWithEmailAndPassword(next, action);
    case SIGN_OUT:
      return dbSignOut(next, action);
    case FETCH_CURRENT_USER:
      return fetchCurrentUser(next);
    case FETCH_USER_INFO:
      return fetchUserInfo(next, action);
    case UPDATE_USER_INFO:
      return dbUpdateUserInfo(next, action);
    default:
      return next(action);
  }
};