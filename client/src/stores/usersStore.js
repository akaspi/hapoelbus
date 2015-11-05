'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var usersAPI = require('../API/usersAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var usersData = {
    users: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionsConstants.LOAD_USERS:
            loadUsers();
            break;
        case actionsConstants.UPDATE_USER:
            updateUser(action.payload.uid, action.payload.user);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function loadUsers() {
    usersData.isPending = true;
    emitChange();

    return usersAPI.getUsersData().then(function (users) {
        usersData.users = _.clone(users);
        usersData.isPending = false;
        emitChange();
    });
}

function updateUser(uid, user) {
    usersData.isPending = true;
    emitChange();

    return usersAPI.updateUser(uid, user).then(function() {
        return loadUsers();
    });
}

function logout() {
    usersData.users = {};
    usersData.isPending = false;
    usersData.errorMsg = null;
    emitChange();
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function getUsersData() {
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
    getUsersData: getUsersData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
