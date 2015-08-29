'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    showUserView: function () {
        dispatchAction({
            type: 'SHOW_USER_VIEW'
        });
    },
    showAdminView: function () {
        dispatchAction({
            type: 'SHOW_ADMIN_VIEW'
        });
    }
};
