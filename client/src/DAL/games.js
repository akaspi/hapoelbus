'use strict';

var _ = require('lodash');
var db = require('./db');

var gamesRef = db.child("games");


module.exports = {
    getGames: function(onSuccess, onError) {
        gamesRef.once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError)
    },
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
    },
    removeGame: function(gameId, onSuccess, onError) {
        gamesRef.child(gameId).remove(function(error) {
            if (error) {
                return onError();
            }
            return onSuccess();
        })
    }
};
