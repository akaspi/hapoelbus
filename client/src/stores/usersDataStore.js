'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var usersDataAPI = require('../API/usersDataAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var usersData = {
    data: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.LOAD_USERS_DATA:
            loadUsersData();
            break;
    }
});

function loadUsersData() {
    usersData.isPending = true;
    emitChange();

    usersDataAPI.getUsersData(function(result) {
        usersData.data = _.clone(result);
        usersData.isPending = false;
        emitChange();
    }, function() {});
}

function logout() {
    usersData.data = {};
    usersData.isPending = false;
    usersData.errorMsg = null;
    emitChange();
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function getUser() {
    return usersData;
}

function addChangeListener(listener) {
    listeners.push(listener);
}

function removeChangeListener(listenerToRemove) {
    listeners = _.reject(listeners, function (listener) {
        return _.isEqual(listener, listenerToRemove);
    });
}

module.exports = {
    getUser: getUser,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
