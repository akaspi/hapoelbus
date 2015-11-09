'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var authAPI = require('../API/authAPI');

var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var authData = {
    uid: authAPI.getUID(),
    isAdmin: false,
    loading: false,
    error: false
};


dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionsConstants.CREATE_USER:
            createUser(action.payload.email, action.payload.password);
            break;
        case actionsConstants.LOGIN:
            login(action.payload.email, action.payload.password);
            break;
        case actionsConstants.SOCIAL_LOGIN:
            socialLogin(action.payload.provider);
            break;
        case actionsConstants.RESET_PASSWORD:
            resetPassword(action.payload.email);
            break;
        case actionsConstants.CHANGE_PASSWORD:
            changePassword(action.payload.email, action.payload.oldPassword, action.payload.newPassword);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function createUser(email, password) {
    authData.loading = true;
    authData.error = false;
    emitChange();

    return authAPI.createUser(email, password)
        .then(function () {
            return login(email, password);
        })
        .catch(function() {
            authData.error = true;
            emitChange();
        })
        .finally(function() {
            authData.loading = false;
            emitChange();
        });

}

function login(email, password) {
    authData.loading = true;
    authData.error = false;
    emitChange();

    return authAPI.login(email, password)
        .then(function (uid) {
            authData.uid = uid;
            return authAPI.isAdmin(uid);
        })
        .then(function(isAdmin) {
            authData.isAdmin = isAdmin;
        })
        .catch(function() {
            authData.error = true;
            emitChange();
        })
        .finally(function() {
            authData.loading = false;
            emitChange();
        })
}

function socialLogin(provider) {
    authData.loading = true;
    authData.error = false;
    emitChange();

    authAPI.socialLogin(provider)
        .then(function (uid) {
            authData.uid = uid;
            return authAPI.isAdmin(uid);
        })
        .then(function (isAdmin) {
            authData.isAdmin = isAdmin;
        })
        .catch(function() {
            authData.error = true;
            emitChange();
        })
        .finally(function() {
            authData.loading = false;
            emitChange();
        });
}

function resetPassword(email) {
    authData.loading = true;
    authData.error = false;
    emitChange();

    authAPI.resetPassword(email)
        .catch(function() {
            authData.error = true;
            emitChange();
        })
        .finally(function() {
            authData.loading = false;
            emitChange();
        });
}

function changePassword(email, oldPassword, newPassword) {
    authData.loading = true;
    authData.error = false;
    emitChange();

    authAPI.changePassword(email, oldPassword, newPassword)
        .then(function() {
            return login(email, newPassword);
        })
        .catch(function() {
            authData.error = true;
            emitChange();
        })
        .finally(function() {
            authData.loading = false;
            emitChange();
        });
}

function logout() {
    authAPI.logout();
    authData.uid = null;
    authData.isAdmin = false;
    authData.loading = false;
    authData.error = false;
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
