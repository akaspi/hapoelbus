import { SIGN_OUT } from './actionTypes';

import * as Constants from '../../utils/constants';
import * as clientDB from '../../utils/clientDB';
import * as userActions from './userActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

export const AUTH_ERROR_CODES_MAP = {
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
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithFacebook = () => () => clientDB.loginWithFacebook();

export const loginWithGoogle = () => () => clientDB.loginWithGoogle();

export const loginWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(userActions.setCurrentUser(user.uid, user.email));
      return dispatch(userActions.fetchUserInfo(user.uid));
    })
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.createUserWithEmailAndPassword(email, password)
    .then(user => dispatch(userActions.setCurrentUser(user.uid, user.email)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};