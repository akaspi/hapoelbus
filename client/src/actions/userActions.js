'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var userDataConstants = require('../constants/usersDataConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    updateUserData: function (uid, data) {
        dispatchAction({
            type: userDataConstants.ACTIONS.UPDATE_USER_DATA,
            uid: uid,
            data: data
        });
    },
    fetchUserData: function (uid) {
        dispatchAction({
            type: userDataConstants.ACTIONS.FETCH_USERS_DATA,
            uid: uid
        });
    }
};
