'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var navigationConstants = require('../constants/navigationConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    tabToDisplay: navigationConstants.TABS.USER.OPEN_GAMES
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case navigationConstants.ACTIONS.NAVIGATE_TO:
            navigateTo(actionData);
            break;
    }
});

function navigateTo(actionData) {
    storeData.tabToDisplay = actionData.tabName;
    notifyAll();
}

module.exports = {
    getAll: function () {
        return storeData;
    },
    registerToChange: function (fn) {
        listeners.push(fn);
    },
    removeChangeListener: function (fn) {
        listeners = _.reject(listeners, function (listener) {
            return _.isEqual(listener, fn);
        });
    }
};
