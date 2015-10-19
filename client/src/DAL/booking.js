'use strict';

var _ = require('lodash');
var db = require('./db');

var bookingRef = db.child("booking");
var occupiedRef = db.child("occupied");

module.exports = {
    getAllBooking: function (onSuccess, onError) {
        bookingRef.once('value', function (snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    getBookingById: function (uid, onSuccess, onError) {
        bookingRef.child(uid).once('value', function (snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },

};
