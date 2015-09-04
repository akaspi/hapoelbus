'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var ModalConstants = require('../constants/ModalConstants');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    name: null,
    props: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case ModalConstants.ACTIONS.SHOW_MODAL:
            showModal(actionData);
            break;
        case ModalConstants.ACTIONS.HIDE_CURRENT_MODAL:
            hideCurrentModal();
            break;
    }
});

function showModal(actionData) {
    notifyChange({
        name: actionData.name,
        props: actionData.props
    });
}

function hideCurrentModal() {
    notifyChange({
        name: null,
        props: {}
    });
}

function notifyChange(currData) {
    _.assign(storeData, currData);
    notifyAll();
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
