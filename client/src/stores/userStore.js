'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var usersDataAPI = require('../API/usersDataAPI');
var authAPI = require('../API/authAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var user = {
    uid: null,
    isAdmin: false,
    usersData: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.CREATE_USER:
            createUser(action.payload.email, action.payload.password);
            break;
        case actionsConstants.LOGIN:
            login(action.payload.email, action.payload.password);
            break;
        case actionsConstants.SOCIAL_LOGIN:
            socialLogin(action.payload.provider);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function loadUsersData() {
    user.isPending = true;
    emitChange();

    usersDataAPI.getUsersData(function(usersData) {
        user.usersData = _.clone(usersData);
        user.isPending = false;
        emitChange();
    }, function() {});
}

function createUser(email, password) {
    user.isPending = true;
    emitChange();

    authAPI.createUser(email, password, function() {
        login(email, password);
    }, function() {});

}

function login(email, password) {
    user.isPending = true;
    emitChange();

    authAPI.login(email, password, function(uid) {
        authAPI.isAdmin(uid, function(isAdmin) {
            user.uid = uid;
            user.isAdmin = isAdmin;
            loadUsersData();
        }, function() {});
    }, function() {});
}

function socialLogin(provider) {
    user.isPending = true;
    emitChange();

    authAPI.socialLogin(provider, function(uid) {
        authAPI.isAdmin(uid, function(isAdmin) {
            user.uid = uid;
            user.isAdmin = isAdmin;
            loadUsersData();
        }, function() {});
    }, function() {});
}

function logout() {
    authAPI.logout();

    user.uid = null;
    user.isAdmin = false;
    user.usersData = {};
    user.errorMsg = null;

    emitChange();
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function getUser() {
    return user;
}

function addChangeListener(listener) {
    listeners.push(listener);
}

function removeChangeListener(listenerToRemove) {
    listeners = _.reject(listeners, function (listener) {
        return _.isEqual(listener, listenerToRemove);
    });
}

function init() {
    user.uid = authAPI.getUID();
    emitChange();

    if (user.uid) {
        loadUsersData();
    }
}

module.exports = {
    init: init,
    getUser: getUser,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
