'use strict';

var db = require('./db');
var authAPI = require('./authAPI');

var BOOKING_ROOT_PATH = 'bookings';

function getBookingsForUser(uid) {
    return db.read(BOOKING_ROOT_PATH + '/' + uid)
        .then(function (booking) {
            var bookingForUser = {};
            if (!_.isEmpty(booking)) {
                bookingForUser[uid] = booking;
            }
            return bookingForUser
        });
}

function getAllBookings() {
    return db.read(BOOKING_ROOT_PATH);
}

function getBookings() {
    return getAllBookings();
    //var uid = authAPI.getUID();
    //return authAPI.isAdmin(uid).then(function (isAdmin) {
    //    return isAdmin ? getAllBookings() : getBookingsForUser(uid);
    //});
}

function updateBooking(uid, gameId, bookingData) {
    return db.update(BOOKING_ROOT_PATH + '/' + uid + '/' + gameId, bookingData);
}

function cancelBooking(uid, gameId) {
    return db.remove(BOOKING_ROOT_PATH + '/' + uid + '/' + gameId);
}

module.exports = {
    getBookings: getBookings,
    updateBooking: updateBooking,
    cancelBooking: cancelBooking
};
