import { SET_CURRENT_USER } from '../actions/actionTypes';

export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    currentUser: currentUser
  }
};