'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var bookingAPI = require('../API/bookingsAPI');
var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var bookingsData = {
    initialized: false,
    bookings: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionsConstants.LOAD_BOOKINGS:
            loadBookings();
            break;
        case actionsConstants.UPDATE_BOOKING:
            updateBooking(action.payload.uid, action.payload.gameId, action.payload.bookingData);
            break;
        case actionsConstants.CANCEL_BOOKING:
            cancelBooking(action.payload.uid, action.payload.gameId);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function loadBookings() {
    bookingsData.loading = true;
    emitChange();

    return bookingAPI.getBookings().then(function (booking) {
        bookingsData.bookings = _.cloneDeep(booking);
        bookingsData.loading = false;
        bookingsData.initialized = true;
        emitChange();
    });
}

function updateBooking(uid, gameId, data) {
    bookingsData.loading = true;
    emitChange();

    return bookingAPI.updateBooking(uid, gameId, data).then(function () {
        return loadBookings();
    });
}
function cancelBooking(uid, gameId) {
    bookingsData.loading = true;
    emitChange();

    bookingAPI.cancelBooking(uid, gameId).then(function () {
        return loadBookings();
    });
}

function logout() {
    bookingsData.initialized = false;
    bookingsData.bookings = {};
    bookingsData.isPending = false;
    bookingsData.errorMsg = null;
    emitChange();
}

function getBookingData() {
    return _.cloneDeep(bookingsData);
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
    getBookingData: getBookingData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};