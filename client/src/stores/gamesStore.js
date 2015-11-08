'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var gamesAPI = require('../API/gamesAPI');
var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var gamesData = {
    initialized: false,
    games: null,
    loading: false,
    errorMsg: null
};

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.LOAD_GAMES:
            loadGames();
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

function loadGames() {
    gamesData.loading = true;
    emitChange();

    return gamesAPI.getGames().then(function(allGames) {
        gamesData.games = _.cloneDeep(allGames);
        gamesData.loading = false;
        gamesData.initialized = true;
        emitChange();
    }, function() {});
}

function createGame(gameData) {
    gamesData.loading = true;
    emitChange();

    gamesAPI.createGame(gameData, function() {
        return loadGames();
    }, function() {});
}
function updateGame(gameId, gameData) {
    gamesData.loading = true;
    emitChange();

    return gamesAPI.updateGame(gameId, gameData).then(function() {
        return loadGames();
    });
}
function removeGame(gameId) {
    gamesData.loading = true;
    emitChange();

    return gamesAPI.removeGame(gameId).then(function() {
        return loadGames();
    })
}

function logout() {
    gamesData.gamesData = {};
    gamesData.errorMsg = null;

    emitChange();
}

function getGamesData() {
    return _.cloneDeep(gamesData);
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