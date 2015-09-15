'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var bookingAPI = require('../DAL/booking');
var auth = require('../DAL/auth');

var bookingConstants = require('../constants/bookingConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    booking: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case bookingConstants.ACTIONS.FETCH_BOOKING:
            fetchBooking(actionData);
            break;
        case bookingConstants.ACTIONS.UPDATE_BOOKING:
            handleUpdateBooking(actionData);
            break;
        case bookingConstants.ACTIONS.CANCEL_BOOKING:
            handleCancelBooking(actionData);
            break;
    }
});

function fetchBooking(actionData) {
    storeData.pending = true;
    notifyAll();

    if (actionData.uid) {
        bookingAPI.getBookingById(actionData.uid, function(booking) {
            var currUserBooking = storeData.booking[actionData.uid];
            if (booking) {
                storeData.booking[actionData.uid] = booking;
            } else if (currUserBooking) {
                delete storeData.booking[actionData.uid];
            }
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    } else {
        bookingAPI.getAllBooking(function(booking) {
            storeData.booking = booking;
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    }
}

function handleUpdateBooking(actionData) {
    bookingAPI.updateBooking(actionData.uid, actionData.gameId, actionData.data, function() {
        fetchBooking(actionData)
    }, function() {

    });
}

function handleCancelBooking(actionData) {
    bookingAPI.cancelBooking(actionData.uid, actionData.gameId, function() {
        fetchBooking(actionData)
    }, function() {

    });
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
