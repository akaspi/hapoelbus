'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var _ = require('lodash');

var usersDataAPI = require('../DAL/usersData');

var userDataConstants = require('../constants/usersDataConstants');
var authConstants = require('../constants/authConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    errorMsg: '',
    usersData: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case userDataConstants.ACTIONS.FETCH_USERS_DATA:
            fetchUsersData(actionData);
            break;
        case userDataConstants.ACTIONS.UPDATE_USER_DATA:
            updateUserData(actionData);
            break;
        case authConstants.ACTIONS.LOGOUT:
            handleLogOut();
            break;
    }
});

function fetchUsersData(actionData) {
    storeData.pending = true;
    notifyAll();

    if (actionData.uid) {
        usersDataAPI.getUserDataById(actionData.uid, function(userData) {
            if (userData) {
                storeData.usersData[actionData.uid] = userData;
            }
            storeData.pending = false;
            notifyAll();
        }, function() {});
    } else {
        usersDataAPI.getAllUsersData(function(allUsersData) {
            storeData.usersData = allUsersData;
            storeData.pending = false;
            notifyAll();
        }, function() {});
    }
}

function updateUserData(actionData){
    usersDataAPI.updateUserData(actionData.uid, actionData.data, function () {
        fetchUsersData(actionData);
    }, function() {
        storeData.errorMsg = userDataConstants.ERROR_MSG.GENERAL;
        notifyAll();
    });
}

function handleLogOut() {
    storeData.usersData = {};
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
