'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var usersAPI = require('../API/usersAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var usersData = {
    initialized: false,
    users: {},
    loading: false,
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
        case actionsConstants.REMOVE_USER:
            removeUser(action.payload.uid);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function loadUsers() {
    usersData.loading = true;
    emitChange();

    return usersAPI.getUsersData().then(function (users) {
        usersData.users = _.cloneDeep(users);
        usersData.loading = false;
        usersData.initialized = true;
        emitChange();
    });
}

function updateUser(uid, user) {
    usersData.loading = true;
    emitChange();

    return usersAPI.updateUser(uid, user).then(function() {
        return loadUsers();
    });
}

function removeUser(uid) {
    usersData.loading = true;
    emitChange();

    return usersAPI.removeUser(uid).then(function() {
        return loadUsers();
    });
}

function logout() {
    usersData.users = {};
    usersData.loading = false;
    usersData.errorMsg = null;
    usersData.initialized = false;
    emitChange();
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function getUsersData() {
    return _.cloneDeep(usersData);
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