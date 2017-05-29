import * as actionTypes from './actions/actionTypes';

export const startLoading = () => ({ type: actionTypes.START_LOADING });

export const endLoading = () => ({ type: actionTypes.END_LOADING });

export const setAuthData = authData => ({ type: actionTypes.SET_AUTH_DATA, authData });

export const logout = () => ({ type: actionTypes.LOGOUT });