'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');

var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    activeView: 'user'
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case 'SHOW_USER_VIEW':
            switchAccountView('user');
            break;
        case 'SHOW_ADMIN_VIEW':
            switchAccountView('admin');
            break;
    }
});

function switchAccountView(activeView) {
    notifyChange({activeView: activeView});
}

function notifyChange(currData) {
    _.merge(storeData, currData);
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
