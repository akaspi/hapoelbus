'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    showLoginBox: true,
    showCreateAccountBox: false,
    showForgotPasswordBox: false,
    showResetPasswordBox: false
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case 'SHOW_LOGIN_BOX':
            updateBoxToShow('showLoginBox');
            break;
        case 'SHOW_CREATE_ACCOUNT_BOX':
            updateBoxToShow('showCreateAccountBox');
            break;
        case 'SHOW_FORGOT_PASSWORD_BOX':
            updateBoxToShow('showForgotPasswordBox');
            break;
        case 'SHOW_RESET_PASSWORD_BOX':
            updateBoxToShow('showResetPasswordBox');
            break;
    }
});

function updateBoxToShow(storeDataProperty) {
    var updatedStoreData = _.mapValues(storeData, function(val, key) {
        return _.isEqual(key, storeDataProperty);
    });
    notifyChange(updatedStoreData)
}

function notifyChange(currData) {
    _.merge(storeData, currData);
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
