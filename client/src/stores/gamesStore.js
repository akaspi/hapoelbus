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
        case actionsConstants.GET_GAMES:
            getGames();
            break;
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

function getGames() {
    gamesData.isPending = true;
    emitChange();

    return gamesAPI.getGames().then(function(allGames) {
        gamesData.games = _.cloneDeep(allGames);
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

    return gamesAPI.updateGame(gameId, gameData).then(function() {
        return getGames();
    });
}
function removeGame(gameId) {
    gamesData.isPending = true;
    emitChange();

    return gamesAPI.removeGame(gameId).then(function() {
        return getGames();
    })
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
    getGamesData: getGamesData,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};