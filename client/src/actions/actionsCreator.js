'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function createAction(actionType, payload) {
    dispatcher.dispatch({
        actionType: actionType,
        payload: payload
    });
}

module.exports = {
    createAction: createAction
};
