import * as _ from 'lodash';

import { SET_AUTH_DATA, SIGN_OUT } from './actionTypes';

import { Promise } from 'bluebird';

const Constants = require('../../utils/constants');
const Translations = require('../../utils/translations');

import * as clientDB from '../../utils/clientDB';
import * as userActions from './userActions';
import * as eventActions from './eventActions';
import * as bookingActions from './bookingActions';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';
import * as navigationActions from './routingActions';

import updatePhotoUrlFixer from '../../dataFixers/updatePhotoUrlFixer';

export const AUTH_ERROR_CODES_MAP = {
  'auth/invalid-email': Translations.ERROR_MESSAGES.AUTH.INVALID_EMAIL,
  'auth/weak-password': Translations.ERROR_MESSAGES.AUTH.WEAK_PASSWORD,
  'auth/email-already-in-use': Translations.ERROR_MESSAGES.AUTH.EMAIL_IN_USE,
  'auth/wrong-password': Translations.ERROR_MESSAGES.AUTH.WRONG_PASSWORD,
  'auth/account-exists-with-different-credential': Translations.ERROR_MESSAGES.AUTH.EMAIL_IN_USE,
  'auth/user-not-found': Translations.ERROR_MESSAGES.AUTH.USER_NOT_FOUND
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
    .then(() => dispatch(navigationActions.reset(Constants.ROUTING.PAGES.AUTH)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const loginWithFacebook = () => () => clientDB.loginWithFacebook();

export const loginWithGoogle = () => () => clientDB.loginWithGoogle();

export const loginWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.loginWithEmailAndPassword(email, password)
    .then(user => fetchAppData(dispatch, user))
    .then(() => dispatch(navigationActions.reset(Constants.ROUTING.PAGES.HOME)))
    .catch(dbError => dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code])))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const createUserWithEmailAndPassword = (email, password) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.createUserWithEmailAndPassword(email, password)
    .then(user => fetchAppData(dispatch, user))
    .then(() => dispatch(navigationActions.reset(Constants.ROUTING.PAGES.EDIT_USER_INFO)))
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
              dispatch(navigationActions.reset(Constants.ROUTING.PAGES.EDIT_USER_INFO, { uid: user.uid }));
            } else {
              dispatch(navigationActions.reset(Constants.ROUTING.PAGES.HOME));
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