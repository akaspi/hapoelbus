'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var userDataConstants = require('../constants/userDataConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    updateUserData: function (userData, uid) {
        dispatchAction({
            type: userDataConstants.ACTIONS.UPDATE_USER_DATA,
            userData: userData,
            uid: uid
        });
    },
    fetchUserData: function () {
        dispatchAction({
            type: userDataConstants.ACTIONS.FETCH_USER_DATA
        });
    }
};
