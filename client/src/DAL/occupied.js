'use strict';

var _ = require('lodash');
var db = require('./db');

var occupiedRef = db.child("occupied");

module.exports = {
    getAllOccupied: function(onSuccess, onError) {
        occupiedRef.once('value', function (snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    getOccupiedByGameId: function (gameId, onSuccess, onError) {
        occupiedRef.child(gameId).once('value', function (snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    }
};
