'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var bookingConstants = require('../constants/bookingConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchBooking: function (uid) {
        dispatchAction({
            type: bookingConstants.ACTIONS.FETCH_BOOKING,
            uid: uid
        });
    },
    updateBooking: function (uid, gameId, data) {
        dispatchAction({
            type: bookingConstants.ACTIONS.UPDATE_BOOKING,
            uid: uid,
            gameId: gameId,
            data: data
        });
    },
    cancelBooking: function(uid, gameId) {
        dispatchAction({
            type: bookingConstants.ACTIONS.CANCEL_BOOKING,
            uid: uid,
            gameId: gameId
        });
    }
};
