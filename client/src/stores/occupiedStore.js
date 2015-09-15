'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var occupiedAPI = require('../DAL/occupied');

var occupiedConstants = require('../constants/occupiedConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    occupied: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case occupiedConstants.ACTIONS.FETCH_OCCUPIED:
            fetchOccupied(actionData);
            break;
    }
});

function fetchOccupied(actionData) {
    storeData.pending = true;
    notifyAll();

    if (actionData.gameId) {
        occupiedAPI.getOccupiedByGameId(actionData.gameId, function(occupiedVal) {
            if (occupiedVal) {
                storeData.occupied[actionData.gameId] = occupiedVal;
            }
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    } else {
        occupiedAPI.getAllOccupied(function(occupied) {
            if (occupied) {
                storeData.occupied = occupied;
            }
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    }
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
