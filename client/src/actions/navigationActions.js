'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var navigationConstants = require('../constants/navigationConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    navigateTo: function (tabName) {
        dispatchAction({
            type: navigationConstants.ACTIONS.NAVIGATE_TO,
            tabName: tabName
        });
    }
};
