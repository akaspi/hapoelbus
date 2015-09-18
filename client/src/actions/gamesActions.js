'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var gamesConstants = require('../constants/gamesConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchGames: function () {
        dispatchAction({
            type: gamesConstants.ACTIONS.FETCH_GAMES
        });
    },
    updateGame: function (gameId, gameData) {
        dispatchAction({
            type: gamesConstants.ACTIONS.UPDATE_GAME,
            gameId: gameId,
            gameData: gameData
        });
    },
    removeGame: function (gameId) {
        dispatchAction({
            type: gamesConstants.ACTIONS.REMOVE_GAME,
            gameId: gameId
        });
    },
};