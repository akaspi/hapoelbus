import * as _ from 'lodash';
import clientConfig from '../../../../conf/client.config.json';
import firebase from 'firebase';

import { setCurrentUser, updateUserInfo } from '../actions/actionsCreator';
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

const loginWithProvider = (provider, onSuccess, onError) => {
  firebase.auth().signInWithPopup(provider)
    .then(result => onSuccess(_.pick(result.user, CURRENT_USER_KEYS)))
    .catch(error => onError(error.code));
};

const loginWithFacebook = next => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const onLoginSuccess = (currentUser) => next(setCurrentUser(currentUser));
  const onLoginError = errorCode => console.log(errorCode);

  loginWithProvider(facebookProvider, onLoginSuccess, onLoginError);
};

const loginWithGoogle = next => {
  const facebookProvider = new firebase.auth.GoogleAuthProvider();
  const onLoginSuccess = (currentUser) => next(setCurrentUser(currentUser));
  const onLoginError = errorCode => console.log(errorCode);

  loginWithProvider(facebookProvider, onLoginSuccess, onLoginError);
};

const signUpWithEmailAndPassword = (next, action) => {
  firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
    .then(user => next(setCurrentUser(_.pick(user, CURRENT_USER_KEYS))))
    .catch(error => console.log(error));
};

const dbUpdateUserInfo = (next, action) => {
  firebase.database().ref('usersInfo/' + action.uid).update(action.userInfo)
    .then(() => next(action))
    .catch(error => console.log(error));
};

const dbSignOut = (next, action) => {
  firebase.auth().signOut().then(
    () => next(action),
    error => console.log(error)
  );
};

const fetchUserInfo = (next, action) => {
  firebase.database().ref('usersInfo/' + action.uid).once('value')
    .then(
      snapshot => next(updateUserInfo(action.uid, snapshot.val())),
      error => console.log(error)
    );
};

const fetchCurrentUser = (next) => {
  const onAuthStateChange = (user) => {
    if (user) {
      next(setCurrentUser(_.pick(user, CURRENT_USER_KEYS)));
    }
    firebase.auth().removeAuthTokenListener(onAuthStateChange);
  };

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