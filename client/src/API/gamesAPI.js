'use strict';

var ref = require('./db');

var gamesRef = ref.child('games');

function init() {}

function getGames(onSuccess, onError) {
    gamesRef.once('value', function(snapshot) {
        onSuccess(snapshot.val());
    }, onError)
}

function updateGame(gameId, gameData, onSuccess, onError) {
    gamesRef.child(gameId).update(gameData, function(error) {
        if (error) {
            return onError();
        }
        return onSuccess();
    });
}

function createGame(gameData, onSuccess, onError) {
    var newGameRef = gamesRef.push();
    newGameRef.set(gameData, function(error) {
        if (error) {
            return onError();
        }
        return onSuccess(newGameRef.key());
    });
}

function removeGame(gameId, onSuccess, onError) {
    gamesRef.child(gameId).remove(function(error) {
        if (error) {
            return onError();
        }
        return onSuccess();
    });
}

module.exports = {
    init: init,
    getGames: getGames,
    createGame: createGame,
    updateGame: updateGame,
    removeGame: removeGame
};
