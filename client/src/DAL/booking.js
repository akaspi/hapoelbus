'use strict';

var _ = require('lodash');
var db = require('./db');

var bookingRef = db.child("booking");
var occupiedRef = db.child("occupied");


module.exports = {
    updateBooking: function (uid, gameId, bookingData, onSuccess, onError) {
        bookingRef.child(uid).child(gameId).update(bookingData, function(error) {
            if (error) {
                return onError();
            }
            var occupiedGameRef = occupiedRef.child(gameId);
            occupiedGameRef.once('value', function(snapshot) {
                var currSeatsOccupied = snapshot.val() || 0;
                var numOfSeats = bookingData.numOfSeats || 0;
                occupiedGameRef.set(currSeatsOccupied + numOfSeats, function(error) {
                    if (error) {
                        return onError();
                    }
                    onSuccess();
                });
            });
        });
    }
};
