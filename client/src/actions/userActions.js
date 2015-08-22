'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    createUser: function (email, password) {
        dispatchAction({
            type: 'CREATE_USER',
            email: email,
            password: password
        });
    },
    createUserData: function (userData) {
        dispatchAction({
            type: 'CREATE_USER_DATA',
            userData: userData
        });
    },
    updateUserData: function (userData) {
        dispatchAction({
            type: 'UPDATE_USER_DATA',
            userData: userData
        });
    },
    fetchUserData: function () {
        dispatchAction({
            type: 'FETCH_USER_DATA'
        });
    },
    login: function (email, password) {
        dispatchAction({
            type: 'LOGIN_USER',
            email: email,
            password: password
        });
    },
    socialLogin: function (provider) {
        dispatchAction({
            type: 'SOCIAL_LOGIN',
            provider: provider
        });
    },
    logOut: function () {
        dispatchAction({
            type: 'LOGOUT_USER'
        });
    },
    resetPasswordRequest: function(email) {
        dispatchAction({
            type: 'RESET_PASSWORD_REQUEST',
            email: email
        });
    },
    changePassword: function(email, oldOrTempPassword, newPassword) {
        dispatchAction({
            type: 'CHANGE_PASSWORD',
            email: email,
            oldOrTempPassword: oldOrTempPassword,
            newPassword: newPassword
        });
    }
};
