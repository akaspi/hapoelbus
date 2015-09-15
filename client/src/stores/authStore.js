'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var _ = require('lodash');

var authAPI = require('../DAL/auth');
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
    uid: null,
    isAdmin: false
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case authConstants.ACTIONS.FETCH_LOGIN_STATE:
            fetchLoginState(actionData);
            break;
        case authConstants.ACTIONS.CREATE_USER:
            handleCreateUser(actionData);
            break;
        case authConstants.ACTIONS.LOGIN:
            handleLogin(actionData);
            break;
        case authConstants.ACTIONS.SOCIAL_LOGIN:
            handleSocialLogin(actionData);
            break;
        case authConstants.ACTIONS.LOGOUT:
            handleLogOut();
            break;
        //case 'RESET_PASSWORD_REQUEST':
        //    handleResetPasswordRequest(actionData);
        //    break;
        //case 'CHANGE_PASSWORD':
        //    handleChangePassword(actionData);
        //    break;
    }
});

function fetchLoginState() {
    storeData.pending = true;
    notifyAll();

    storeData.uid = authAPI.getUserId();
    if (storeData.uid) {
        authAPI.isAdmin(function(isAdmin) {
            storeData.isAdmin = isAdmin;
            storeData.pending = false;
            notifyAll();
        });
    } else {
        storeData.pending = false;
        notifyAll();
    }
}

function handleCreateUser(actionData) {
    authAPI.createUser(actionData.email, actionData.password, function () {
        handleLogin(actionData);
    }, function (errorCode) {
        switch(errorCode) {
            case authConstants.ERROR_CODE.EMAIL_TAKEN:
                storeData.errorMsg = authConstants.ERROR_MSG.EMAIL_TAKEN;
                break;
            default:
                storeData.errorMsg = authConstants.ERROR_MSG.GENERAL;
        }
        storeData.pending = false;
        notifyAll();
    })
}

function handleLogin(actionData) {
    authAPI.login(actionData.email, actionData.password, function () {
        fetchLoginState();
    }, function () {
        storeData.pending = false;
        storeData.errorMsg = authConstants.ERROR_MSG.GENERAL;
        notifyAll();
    })
}

function handleSocialLogin(actionData) {
    authAPI.socialLogin(actionData.provider, function () {
        fetchLoginState();
    }, function () {
        storeData.pending = false;
        storeData.errorMsg = authConstants.ERROR_MSG.GENERAL;
        notifyAll();
    })
}

function handleLogOut() {
    authAPI.logOut();
    storeData.uid = null;
    storeData.isAdmin = false;
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
