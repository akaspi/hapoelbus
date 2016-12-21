const navigationConstants = require('../../utils/navigationConstants');
import { NAVIGATE_TO, SIGN_OUT } from '../actions/actionTypes';

const initialState = [ navigationConstants.PAGES.AUTH.id ];

module.exports = function navigationReducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch (action.type) {
    case 'NAVIGATE_TO':
      return state.concat([ action.pageId ]);
    case 'NAVIGATE_BACK':
      if (state.length === 1) {
        return state;
      }
      return state.splice(0, state.length - 1);
    case 'REPLACE_NAVIGATION':
      return [ action.pageId ];
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};