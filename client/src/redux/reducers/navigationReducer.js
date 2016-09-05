import * as Constants from '../../utils/constants';
import { NAVIGATE_TO, SIGN_OUT } from '../actions/actionTypes';

const initialState = Constants.PAGES.AUTH.val;

export default function navigationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NAVIGATE_TO:
      return action.page;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}