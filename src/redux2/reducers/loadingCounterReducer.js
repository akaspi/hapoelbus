import { START_LOADING, END_LOADING } from '../actions/actionTypes';

const loadingCounter = 0;

export default function loadingReducer(state = loadingCounter, action = {}) {
  switch (action.type) {
    case START_LOADING:
      return (state + 1);
    case END_LOADING:
      return (state - 1);
    default:
      return state;
  }
}