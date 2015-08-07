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
    login: function (username, password) {
        dispatchAction({
            type: 'LOGIN_USER',
            username: username,
            password: password
        });
    },
    socialLogin: function (provider) {
        dispatchAction({
            type: 'SOCIAL_LOGIN',
            provider: provider
        });
    },
    logOut: function() {
        dispatchAction({
            type: 'LOGOUT_USER'
        });
    }
};
