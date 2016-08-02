import { SET_CURRENT_USER, SIGN_OUT } from '../actions/actionTypes';

const initialState = null;

export default function currentUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { uid: action.uid, email: action.email };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}