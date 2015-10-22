'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var authAPI = require('../API/authAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var authData = {
    uid: authAPI.getUID(),
    isAdmin: false,
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

function createUser(email, password) {
    authData.isPending = true;
    emitChange();

    authAPI.createUser(email, password, function() {
        login(email, password);
    }, function() {});

}

function login(email, password) {
    authData.isPending = true;
    emitChange();

    authAPI.login(email, password, function(uid) {
        authAPI.isAdmin(uid, function(isAdmin) {
            authData.uid = uid;
            authData.isAdmin = isAdmin;
            emitChange();
        }, function() {});
    }, function() {});
}

function socialLogin(provider) {
    authData.isPending = true;
    emitChange();

    authAPI.socialLogin(provider, function(uid) {
        authAPI.isAdmin(uid, function(isAdmin) {
            authData.uid = uid;
            authData.isAdmin = isAdmin;
            emitChange();
        }, function() {});
    }, function() {});
}

function logout() {
    authAPI.logout();
    authData.uid = null;
    authData.isAdmin = false;
    authData.isPending = false;
    authData.errorMsg = null;
    emitChange();
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function getAuthData() {
    return authData;
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
    getAuthData: getAuthData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
