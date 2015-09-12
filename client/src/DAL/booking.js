'use strict';

var _ = require('lodash');
var db = require('./db');

var bookingRef = db.child("booking");
var occupiedRef = db.child("occupied");

module.exports = {
    getBooking: function(uid, onSuccess, onError) {
        bookingRef.child(uid).once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
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
    },
    cancelBooking: function(uid, gameId, onSuccess, onError) {
        bookingRef.child(uid).child(gameId).once('value', function(snapshot) {
            var bookingData = snapshot.val();
            if (bookingData) {
                bookingRef.child(uid).remove(function() {
                    var occupiedGameRef = occupiedRef.child(gameId);
                    occupiedGameRef.once('value', function(snapshot) {
                        var currSeatsOccupied = snapshot.val();
                        var numOfSeats = bookingData.numOfSeats || 0;
                        var newOccupiedSeats = currSeatsOccupied - numOfSeats;
                        if (newOccupiedSeats === 0) {
                            occupiedGameRef.remove(function() {
                                onSuccess();
                            })
                        } else {
                            occupiedGameRef.set(newOccupiedSeats, function(error) {
                                if (error) {
                                    return onError();
                                }
                                onSuccess()
                            });
                        }
                    });
                });
            } else {
                onError();
            }
        });
    }
};
