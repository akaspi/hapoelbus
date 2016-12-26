const navigationConstants = require('../../utils/navigationConstants');

function createRoutingData(pageId, params) {
  return { pageId, params: params || {} }
}


const initialState = {
  current: createRoutingData(navigationConstants.PAGES.AUTH.val, {}),
  history: [
    createRoutingData(navigationConstants.PAGES.AUTH.val, {})
  ]
};


module.exports = function(state, action) {
  state = state || initialState;
  action = action || {};

  switch (action.type) {
    case 'NAVIGATE_TO': {
      const routingData = createRoutingData(action.pageId, action.params);

      return {
        current: routingData,
        history: state.history.concat([ routingData ])
      };
    }
    case 'NAVIGATE_BACK': {
      if (state.history.length > 1) {
        const historyWithoutLast = state.history.slice(0, -1);
        return {
          current: historyWithoutLast.slice(-1)[0],
          history: historyWithoutLast
        };
      }
      break;
    }
    case 'REPLACE_ROUTING': {
      const routingData = createRoutingData(action.pageId, action.params);

      return {
        current: routingData,
        history: [ routingData ]
      };
    }
  }

  return state;
};
