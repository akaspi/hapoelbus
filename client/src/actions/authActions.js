'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var authConstants = require('../constants/authConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchLoginState: function () {
        dispatchAction({
            type: authConstants.ACTIONS.FETCH_LOGIN_STATE
        });
    },
    createUser: function (email, password) {
        dispatchAction({
            type: authConstants.ACTIONS.CREATE_USER,
            email: email,
            password: password
        });
    },
    login: function (email, password) {
        dispatchAction({
            type: authConstants.ACTIONS.LOGIN,
            email: email,
            password: password
        });
    },
    socialLogin: function (provider) {
        dispatchAction({
            type: authConstants.ACTIONS.SOCIAL_LOGIN,
            provider: provider
        });
    },
    logOut: function () {
        dispatchAction({
            type: authConstants.ACTIONS.LOGOUT
        });
    }
};
