'use strict';

var db = require('./db');

function getGames() {
    return db.read('games');
}

function updateGame(gameId, gameData) {
    var path = 'games/' + gameId;
    return db.update(path, gameData);
}

function createGame(gameData) {
    var newGameId = db.generateUniqueId();
    var path = 'games/' + newGameId;

    return db.set(path, gameData)
        .then(function() {
            return newGameId;
        });
}

function removeGame(gameId) {
    var path = 'games/' + gameId;
    return db.remove(path);
}

module.exports = {
    getGames: getGames,
    createGame: createGame,
    updateGame: updateGame,
    removeGame: removeGame
};
