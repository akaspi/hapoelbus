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
    navigation: {
        showLoginBox: function () {
            dispatchAction({
                type: 'SHOW_LOGIN_BOX'
            });
        },
        showForgotPasswordBox: function () {
            dispatchAction({
                type: 'SHOW_FORGOT_PASSWORD_BOX'
            });
        },
        showCreateAccountBox: function () {
            dispatchAction({
                type: 'SHOW_CREATE_ACCOUNT_BOX'
            });
        },
        showResetPasswordBox: function () {
            dispatchAction({
                type: 'SHOW_RESET_PASSWORD_BOX'
            });
        }
    }
};
