import * as _ from 'lodash';

import { SET_AUTH_DATA, SIGN_OUT } from './actionTypes';

import { Promise } from 'bluebird';

import * as Constants from '../../utils/constants';
import * as clientDB from '../../utils/clientDB';
import * as userActions from './userActions';
import * as eventActions from './eventActions';
import * as bookingActions from './bookingActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';
import * as navigationActions from './navigationActions';

import updatePhotoUrlFixer from '../../dataFixers/updatePhotoUrlFixer';

export const AUTH_ERROR_CODES_MAP = {
  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE,
  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD,
  'auth/account-exists-with-different-credential': Constants.ERRORS.EMAIL_IN_USE,
  'auth/user-not-found': Constants.ERRORS.USER_NOT_FOUND
};

export const setAuthData = (uid, email, photoURL, isAdmin) => ({
  type: SET_AUTH_DATA,
  uid,
  email,
  photoURL,
  isAdmin
});

const fetchAppData = (dispatch, user) =>
  clientDB.read('admins/' + user.uid)
    .then(isAdmin => dispatch(setAuthData(user.uid, user.email, _.get(user, ['providerData', 0, 'photoURL']), !!isAdmin)))
    .then(() => Promise.all([
      dispatch(userActions.fetchUsers()),
      dispatch(eventActions.fetchEvents()),
      dispatch(bookingActions.fetchBookings())
    ]));

export const userSignedOut = () => ({
  type: SIGN_OUT
});

export const signOut = () => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.signOut()
    .then(() => dispatch(userSignedOut()))
    .then(() => dispatch(navigationActions.navigateTo(Constants.PAGES.AUTH.val)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithFacebook = () => () => clientDB.loginWithFacebook();

export const loginWithGoogle = () => () => clientDB.loginWithGoogle();

export const loginWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithEmailAndPassword(email, password)
    .then(user => fetchAppData(dispatch, user))
    .then(() => dispatch(navigationActions.navigateTo(Constants.PAGES.HOME.val)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.createUserWithEmailAndPassword(email, password)
    .then(user => fetchAppData(dispatch, user))
    .then(() => dispatch(navigationActions.navigateTo(Constants.PAGES.EDIT_USER_INFO.val)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const sendPasswordResetEmail = email => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.sendPasswordResetEmail(email)
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const fetchAuthData = () => (dispatch, getState) => {
  dispatch(loadingActions.startLoading());

  return clientDB.getLoggedInUser()
    .then(user => {
      if (user) {
        return fetchAppData(dispatch, user)
          .then(() => updatePhotoUrlFixer(dispatch, getState()))
          .then(() => {
            const userInfo = getState().users[user.uid];
            if (_.isEmpty(userInfo)) {
              dispatch(navigationActions.navigateTo(Constants.PAGES.EDIT_USER_INFO.val));
            } else {
              dispatch(navigationActions.navigateTo(Constants.PAGES.HOME.val));
            }
          });
      }
      return null;
    })
    .catch(dbError => {
      console.error(dbError); // eslint-disable-line no-console
      dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]))
    })
    .finally(() => dispatch(loadingActions.stopLoading()));
};