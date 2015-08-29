'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchUsersData: function () {
        dispatchAction({
            type: 'FETCH_ALL_USERS_DATA'
        });
    },
    updatePayment: function(uid, maxSeats) {
        dispatchAction({
            type: 'UPDATE_PAYMENT',
            uid: uid,
            maxSeats: maxSeats
        });
    }
};
