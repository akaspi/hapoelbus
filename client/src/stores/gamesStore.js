'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var gamesAPI = require('../API/gamesAPI');
var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var gamesData = {
    games: {},
    isPending: false,
    errorMsg: null
};

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.CREATE_GAME:
            createGame(action.payload.gameData);
            break;
        case actionsConstants.UPDATE_GAME:
            updateGame(action.payload.gameId, action.payload.gameData);
            break;
        case actionsConstants.REMOVE_GAME:
            removeGame(action.payload.gameId);
            break;
        case actionsConstants.LOGOUT:
            logout();
            break;
    }
});

function init() {
    gamesData.isPending = true;
    emitChange();

    gamesAPI.getGames(function(allGames) {
        gamesData.games = _.clone(allGames);
        gamesData.isPending = false;
        emitChange();
    }, function() {});
}

function createGame(gameData) {
    gamesData.isPending = true;
    emitChange();

    gamesAPI.createGame(gameData, function(gameId) {
        gameData.games[gameId] = _.clone(gameData);
        gamesData.isPending = false;
        emitChange();
    }, function() {});
}
function updateGame(gameId, gameData) {
    gamesData.isPending = true;
    emitChange();

    gamesAPI.updateGame(gameId, gameData, function() {
        gamesData.isPending = false;
        _.merge(gamesData.games[gameId], gameData);
        emitChange();
    }, function() {});
}
function removeGame(gameId) {
    gamesData.isPending = true;
    emitChange();

    gamesAPI.removeGame(gameId, function() {
        gamesData.isPending = false;
        delete gamesData.games[gameId];
        emitChange();
    }, function() {})
}

function logout() {
    gamesData.games = {};
    errorMsg = null;

    emitChange();
}

function getGamesData() {
    return _.clone(gamesData);
}

function emitChange() {
    _.forEach(listeners, function (listener) {
        listener();
    });
}

function addChangeListener(listener) {
    listeners.push(listener);
}

function removeChangeListener(listenerToRemove) {
    listeners = _.reject(listeners, function (listener) {
        return _.isEqual(listener, listenerToRemove);
    });
}

module.exports = {
    init: init,
    getGamesData: getGamesData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};