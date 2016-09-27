import { START_LOADING, STOP_LOADING } from '../actions/actionTypes';

const initialState = false;

export default function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}