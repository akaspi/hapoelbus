'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var bookingAPI = require('../API/bookingAPI');
var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var bookingData = {
    booking: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionsConstants.LOAD_BOOKING:
            loadBooking();
            break;
        case actionsConstants.UPDATE_BOOKING:
            updateBooking(action.payload.uid, action.payload.gameId, action.payload.bookingData);
            break;
        case actionsConstants.CANCEL_BOOKING:
            cancelBooking(action.payload.uid, action.payload.gameId);
            break;
    }
});

function loadBooking() {
    bookingData.isPending = true;
    emitChange();

    return bookingAPI.getBooking().then(function (booking) {
        bookingData.booking = _.clone(booking);
        bookingData.isPending = false;
        emitChange();
    });
}

function updateBooking(uid, gameId, data) {
    bookingData.isPending = true;
    emitChange();

    return bookingAPI.updateBooking(uid, gameId, data).then(function () {
        return loadBooking();
    });
}
function cancelBooking(uid, gameId) {
    bookingData.isPending = true;
    emitChange();

    bookingAPI.cancelBooking(uid, gameId).then(function () {
        return loadBooking();
    });
}

function getBookingData() {
    return bookingData;
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function addChangeListener(listener) {
    listeners.push(listener);
}

function removeChangeListener(listenerToRemove) {
    listeners = _.reject(listeners, function (listener) {
        return _.isEqual(listener, listenerToRemove);
    });
}

module.exports = {
    getGamesData: getBookingData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};