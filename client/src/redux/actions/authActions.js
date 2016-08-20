import { SET_AUTH_DATA, SIGN_OUT } from './actionTypes';

import * as Constants from '../../utils/constants';
import * as clientDB from '../../utils/clientDB';
import * as userActions from './userActions';
import * as eventActions from './eventActions';
import * as bookingActions from './bookingActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

export const AUTH_ERROR_CODES_MAP = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE,
  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD,
  'auth/account-exists-with-different-credential': Constants.ERRORS.EMAIL_IN_USE
};

export const setAuthData = (uid, email, isAdmin) => ({
  type: SET_AUTH_DATA,
  uid,
  email,
  isAdmin
});

const fetchAppData = (dispatch, user) =>
  clientDB.read('admins/' + user.uid)
    .then(isAdmin => dispatch(setAuthData(user.uid, user.email, !!isAdmin)))
    .then(() => dispatch(userActions.fetchUsers()))
    .then(() => dispatch(eventActions.fetchEvents()))
    .then(() => dispatch(bookingActions.fetchBookings()));

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
    .then(user => fetchAppData(dispatch, user))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.createUserWithEmailAndPassword(email, password)
    .then(user => fetchAppData(dispatch, user))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const fetchAuthData = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.getLoggedInUser()
    .then(user => {
      if (user) {
        return fetchAppData(dispatch, user);
      }
      return null;
    })
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};