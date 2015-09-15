'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var occupiedConstants = require('../constants/occupiedConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchOccupied: function (gameId) {
        dispatchAction({
            type: occupiedConstants.ACTIONS.FETCH_OCCUPIED,
            gameId: gameId
        });
    }
};
