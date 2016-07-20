import { START_LOADING, REPORT_ERROR } from '../actions/actionTypes';

const initialState = '';

export default function errorReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REPORT_ERROR:
      return action.errorMsg;
    case START_LOADING:
      return '';
    default:
      return state;
  }
}