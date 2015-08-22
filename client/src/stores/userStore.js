var _ = require('lodash');
var dispatcher = require('../dispatcher/dispatcher');
var auth = require('../api/auth');
var usersData = require('../api/usersData');
var constants = require('./constants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    isLoggedIn: auth.isLoggedIn(),
    isFetchingUserData: false,
    userData: null,
    errorMsg: ''
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case 'CREATE_USER':
            handleCreateUser(actionData);
            break;
        case 'LOGIN_USER':
            handleLogin(actionData);
            break;
        case 'SOCIAL_LOGIN':
            handleSocialLogin(actionData);
            break;
        case 'LOGOUT_USER':
            handleLogOut();
            break;
        case 'FETCH_USER_DATA':
            handleFetchUserData();
            break;
        case 'CREATE_USER_DATA':
            handleCreateUserData(actionData);
            break;
        case 'UPDATE_USER_DATA':
            handleUpdateUserData(actionData);
            break;
        case 'RESET_PASSWORD_REQUEST':
            handleResetPasswordRequest(actionData);
            break;
        case 'CHANGE_PASSWORD':
            handleChangePassword(actionData);
            break;
    }
});

function notifyChange(currData) {
    _.merge(storeData, currData);
    notifyAll();
}

function handleCreateUser(actionData) {
    auth.createUser(actionData.email, actionData.password, function () {
        handleLogin(actionData);
    }, function () {
        notifyChange({errorMsg: constants.userStore.ERR_MSG.AUTH_FAILURE});
    })
}

function handleLogin(actionData) {
    auth.login(actionData.email, actionData.password, function () {
        notifyChange({isLoggedIn: true});
        handleFetchUserData();
    }, function () {
        notifyChange({errorMsg: constants.userStore.ERR_MSG.AUTH_FAILURE});
    })
}

function handleSocialLogin(actionData) {
    auth.socialLogin(actionData.provider, function () {
        notifyChange({isLoggedIn: true});
        handleFetchUserData();
    }, function () {

    })
}

function handleLogOut() {
    auth.logOut();
    notifyChange({isLoggedIn: false, userData: null});
}

function handleFetchUserData() {
    notifyChange({isFetchingUserData: true});
    usersData.getUserData(auth.getUserId(), function (userData) {
        notifyChange({isFetchingUserData: false, userData: userData});
    });
}

function handleCreateUserData(actionData) {
    var userData = actionData.userData;
    usersData.createUserData(auth.getUserId(), userData, function () {
        notifyChange({userData: userData});
    }, function() {
        notifyChange({errorMsg: constants.userStore.ERR_MSG.USER_DATA_CREATION_FAILURE});
    });
}

function handleUpdateUserData(actionData){
    var userData = actionData.userData;
    usersData.updateUserData(auth.getUserId(), userData, function () {
        notifyChange({userData: userData});
    });
}

function handleResetPasswordRequest(actionData) {
    auth.resetPasswordRequest(actionData.email, function() {
        //TODO: Needs to notify somehow
        console.log('reset password email was sent');
    }, function() {

    });
}

function handleChangePassword(actionData) {
    auth.changePassword(actionData.email, actionData.oldOrTempPassword, actionData.newPassword, function() {
        handleLogin({email: actionData.email, password: actionData.newPassword});
    }, function() {
        notifyChange({errorMsg: constants.userStore.ERR_MSG.AUTH_FAILURE});
    });
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
