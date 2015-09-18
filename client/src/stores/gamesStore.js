'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var games = require('../DAL/games');

var gamesConstants = require('../constants/gamesConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    games: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case gamesConstants.ACTIONS.FETCH_GAMES:
            fetchGames();
            break;
        case gamesConstants.ACTIONS.UPDATE_GAME:
            updateGame(actionData);
            break;
        case gamesConstants.ACTIONS.REMOVE_GAME:
            removeGame(actionData);
            break;
    }
});

function fetchGames() {
    storeData.pending = true;
    notifyAll();

    games.getGames(function(games) {
        storeData.games = games || {};
        storeData.pending = false;
        notifyAll();
    }, function() {

    });
}

function updateGame(actionData) {
    games.updateGame(actionData.gameId, actionData.gameData, function() {
        fetchGames(actionData);
    }, function() {

    });
}

function removeGame(actionData) {
    games.removeGame(actionData.gameId, function() {
        fetchGames(actionData);
    }, function() {

    });
}

module.exports = {
    getAll: function () {
        return storeData;
    },
    registerToChange: function (fn) {
        listeners.push(fn);
    },
    removeChangeListener: function (fn) {
        listeners = _.reject(listeners, function (listener) {
            return _.isEqual(listener, fn);
        });
    }
};
