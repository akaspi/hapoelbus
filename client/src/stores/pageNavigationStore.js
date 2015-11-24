'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var actionsConstants = require('../actions/actionsConstants');
var pagesConstants = require('../constants/pagesConstants');

var listeners = [];

var currentPage = pagesConstants.HOME_PAGE;

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.NAVIGATE_TO_PAGE:
            navigateToPage(action.payload.page);
            break;
        case actionsConstants.LOGOUT:
            logout(action.payload.page);
            break;
    }
});

function navigateToPage(page) {
    currentPage = page;
    emitChange();
}

function logout() {
    currentPage = pagesConstants.HOME_PAGE;
    emitChange();
}

function getCurrentPage() {
    return currentPage;
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
    getCurrentPage: getCurrentPage,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
