import {
  SET_CURRENT_USER,
  UPDATE_USER_INFO,
  FETCH_CURRENT_USER,
  FETCH_USER_INFO,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  SIGN_OUT
} from '../actions/actionTypes';

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

export const loginWithGoogle = () => ({ type: LOGIN_WITH_GOOGLE });

export const loginWithFacebook = () => ({ type: LOGIN_WITH_FACEBOOK });

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