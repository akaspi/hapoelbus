'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var booking = require('../DAL/booking');
var auth = require('../DAL/auth');

var bookingConstants = require('../constants/bookingConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    fetchingData: false,
    booking: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case bookingConstants.ACTIONS.FETCH_BOOKING_FOR_USER:
            fetchBookingForUser();
            break;
        case bookingConstants.ACTIONS.UPDATE_BOOKING:
            handleUpdateBooking();
            break;
        case bookingConstants.ACTIONS.CANCEL_BOOKING:
            handleCancelBooking();
            break;
    }
});

function fetchBookingForUser() {
    notifyChange({fetchingData: true});
    booking.getBooking(auth.getUserId(), function(booking) {
        notifyChange({booking: booking, fetchingData: false});
    }, function() {

    });
}

function handleUpdateBooking(actionData) {
    var uid = auth.getUserId();
    var gameId = actionData.gameId;
    var bookingData = actionData.bookingData;
    booking.updateBooking(uid, gameId, bookingData, function() {
        var updatedBooking = {};
        updatedBooking[uid][gameId] = bookingData;
        notifyChange({booking: updatedBooking});
    }, function() {

    });
}

function handleCancelBooking(actionData) {
    var uid = auth.getUserId();
    var gameId = actionData.gameId;
    booking.updateBooking(uid, gameId, function() {
        delete storeData.booking[uid][gameId];
        notifyChange({});
    }, function() {

    });
}

function notifyChange(currData) {
    _.merge(storeData, currData);
    notifyAll();
}

module.exports = {
    getAll: function () {
        return storeData;
    },
    registerToChange: function (fn) {
        listeners.push(fn);
    },
    removeChangeListener: function (fn) {
        listeners = _.reject(listeners, function (listener) {
            return _.isEqual(listener, fn);
        });
    }
};
