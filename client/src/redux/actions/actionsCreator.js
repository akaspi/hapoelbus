import {
  INITIALIZE_APP,
  START_LOADING,
  END_LOADING,
  REPORT_ERROR,
  SET_CURRENT_USER,
  UPDATE_USER_INFO,
  FETCH_CURRENT_USER,
  FETCH_USER_INFO,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_EMAIL,
  SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  SIGN_OUT
} from '../actions/actionTypes';

export const initializeApp = () => ({
  type: INITIALIZE_APP
});

export const startLoading = () => ({ type: START_LOADING });

export const endLoading = () => ({ type: END_LOADING });

export const reportError = errorMsg => ({
  type: REPORT_ERROR,
  errorMsg
});

export const setCurrentUser = (uid, email) => ({
  type: SET_CURRENT_USER,
  uid,
  email
});

export const loginWithGoogle = () => ({ type: LOGIN_WITH_GOOGLE });

export const loginWithFacebook = () => ({ type: LOGIN_WITH_FACEBOOK });

export const loginWithEmailAndPassword = (email, password) => ({
  type: LOGIN_WITH_EMAIL,
  email,
  password
});

export const signUpWithUserAndPassword = (email, password) => ({
  type: SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  email,
  password
});

export const signOut = () => ({ type: SIGN_OUT });

export const updateUserInfo = (uid, userInfo) => ({
  type: UPDATE_USER_INFO,
  uid,
  userInfo
});

export const fetchCurrentUser = () => ({ type: FETCH_CURRENT_USER });

export const fetchUserInfo = uid => ({
  type: FETCH_USER_INFO,
  uid
});