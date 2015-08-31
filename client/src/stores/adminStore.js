'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var admin = require('../DAL/admin');
var auth = require('../DAL/auth');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    usersData: {},
    payments: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case 'FETCH_ALL_USERS_DATA':
            fetchAllUserData();
            break;
        case 'UPDATE_PAYMENT':
            updatePayments(actionData);
            break;
    }
});

function fetchAllUserData() {
    admin.getUsersData(function(usersData) {
        notifyChange({usersData: usersData});
    }, function() {

    });
}

function updatePayments(actionData) {
    admin.updatePayments(actionData.uid, actionData.maxSeats, function() {
        var updatedPayments = {};
        updatedPayments[actionData.uid] = { maxSeats: actionData.maxSeats };
        notifyChange({payments: updatedPayments});
    }, function() {

    })
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
