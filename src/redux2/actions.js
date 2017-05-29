import * as actionTypes from './actions/actionTypes';

export const startLoading = () => ({ type: actionTypes.START_LOADING });

export const endLoading = () => ({ type: actionTypes.END_LOADING });