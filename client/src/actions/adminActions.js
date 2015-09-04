'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var adminConstants = require('../constants/adminConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchUsersData: function () {
        dispatchAction({
            type: adminConstants.ACTIONS.FETCH_ALL_USERS_DATA
        });
    },
    updateUserData: function(uid, userData) {
        dispatchAction({
            type: adminConstants.ACTIONS.UPDATE_USER_DATA,
            uid: uid,
            userData: userData
        });
    }
};
