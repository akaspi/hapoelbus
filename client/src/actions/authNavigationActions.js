'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
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
};
