'use strict';

var db = require('./db');
var authAPI = require('./authAPI');

var BOOKING_ROOT_PATH = 'booking';

function getBookingForSingleUser(uid) {
    return db.read(BOOKING_ROOT_PATH + '/' + uid)
        .then(function (booking) {
            var bookingForUser = {};
            if (!_.isEmpty(booking)) {
                bookingForUser[uid] = booking;
            }
            return bookingForUser
        });
}

function getBookingForAllUsers() {
    return db.read(BOOKING_ROOT_PATH);
}

function getBooking() {
    var uid = authAPI.getUID();
    return authAPI.isAdmin(uid).then(function (isAdmin) {
        return isAdmin ? getBookingForAllUsers() : getBookingForSingleUser(uid);
    });
}

function updateBooking(uid, gameId, bookingData) {
    return db.update(BOOKING_ROOT_PATH + '/' + uid + '/' + gameId, bookingData);
}

function cancelBooking(uid, gameId) {
    return db.remove(BOOKING_ROOT_PATH + '/' + uid + '/' + gameId);
}

module.exports = {
    getBooking: getBooking,
    updateBooking: updateBooking,
    cancelBooking: cancelBooking
};
