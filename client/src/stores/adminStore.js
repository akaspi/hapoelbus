'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var admin = require('../DAL/admin');
var auth = require('../DAL/auth');
var adminConstants = require('../constants/adminConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var defaultUserData = {
    displayName: '',
    email: '',
    phone: '',
    isPremium: false,
    maxSeats: 0
};

var storeData = {
    fetchingData: false,
    usersData: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case adminConstants.ACTIONS.FETCH_ALL_USERS_DATA:
            fetchAllUserData();
            break;
        case adminConstants.ACTIONS.UPDATE_USER_DATA:
            handleUpdateUserData(actionData);
            break;
    }
});

function fetchAllUserData() {
    notifyChange({fetchingData: true});
    admin.getUsersData(function(usersData) {
        notifyChange({usersData: _.mapValues(usersData, function(val) {
            return _.defaults(val, defaultUserData);
        }), fetchingData: false});
    }, function() {

    });
}

function handleUpdateUserData(actionData) {
    if (!_.isUndefined(actionData.userData.maxSeats)) {
        var maxSeatsAsNumber = parseInt(actionData.userData.maxSeats);
        if (maxSeatsAsNumber === 0) {
            delete actionData.userData.maxSeats;
        } else {
            actionData.userData.maxSeats = maxSeatsAsNumber;
        }
    }
    admin.updateUserData(actionData.uid, actionData.userData, function() {
        var updatedUserData = {};
        updatedUserData[actionData.uid] = actionData.userData;
        notifyChange({usersData: updatedUserData});
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
