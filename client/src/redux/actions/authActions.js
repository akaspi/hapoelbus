import { SIGN_OUT } from './actionTypes';

import * as Constants from '../../utils/constants';
import * as clientDB from '../../utils/clientDB';
import * as userActions from './userActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

const errorCodeMap = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE,
  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD,
  'auth/account-exists-with-different-credential': Constants.ERRORS.EMAIL_IN_USE
};

export const userSignedOut = () => ({
  type: SIGN_OUT
});

export const signOut = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.signOut()
    .then(() => dispatch(userSignedOut()))
    .catch(dbError => dispatch(errorActions.reportError(errorCodeMap[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithFacebook = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithFacebook()
    .then(user => {
      dispatch(userActions.setCurrentUser(user.uid, user.email));
      return dispatch(userActions.fetchUserInfo(user.uid));
    })
    .catch(dbError => dispatch(errorActions.reportError(errorCodeMap[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithGoogle = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithGoogle()
    .then(user => {
      dispatch(userActions.setCurrentUser(user.uid, user.email));
      return dispatch(userActions.fetchUserInfo(user.uid));
    })
    .catch(dbError => dispatch(errorActions.reportError(errorCodeMap[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(userActions.setCurrentUser(user.uid, user.email));
      return dispatch(userActions.fetchUserInfo(user.uid));
    })
    .catch(dbError => dispatch(errorActions.reportError(errorCodeMap[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.createUserWithEmailAndPassword(email, password)
    .then(user => dispatch(userActions.setCurrentUser(user.uid, user.email)))
    .catch(dbError => dispatch(errorActions.reportError(errorCodeMap[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};