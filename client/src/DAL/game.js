'use strict';

var _ = require('lodash');
var db = require('./db');

var gamesRef = db.child("games");


module.exports = {
    updateGame: function (gameId, gameData, onSuccess, onError) {
        if (gameId) {
            gamesRef.child(gameId).update(gameData, function(error) {
                if (error) {
                    return onError();
                }
                return onSuccess();
            });
        } else {
            gamesRef.push(gameData, function(error) {
                if (error) {
                    return onError();
                }
                return onSuccess();
            });
        }
    }
};
