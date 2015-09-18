'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var emailsAPI = require('../DAL/emails');

var emailsConstants = require('../constants/emailsConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    errMsg: ''
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case emailsConstants.ACTIONS.SEND_TEMPLATE_EMAIL:
            sendTemplateEmail(actionData);
            break;
    }
});

function sendTemplateEmail(actionData) {
    storeData.pending = true;
    notifyAll();

    emailsAPI.sendTemplateEmail(actionData.template, actionData.gameId, function () {
        storeData.pending = false;
        notifyAll();
    }, function () {

    });
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
