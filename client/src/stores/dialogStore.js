'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var actionsConstants = require('../actions/actionsConstants');

var listeners = [];

var dialogToDisplay = null;

dispatcher.register(function(action) {
    switch(action.actionType) {
        case actionsConstants.SHOW_DIALOG:
            showDialog(action.payload.dialog, action.payload.props);
            break;
        case actionsConstants.UPDATE_DIALOG_PROPS:
            updateDialogProps(action.payload.props);
            break;
        case actionsConstants.CLOSE_DIALOG:
            closeDialog();
            break;
    }
});

function showDialog(dialogClass, dialogProps) {
    dialogToDisplay = { dialog: dialogClass, props: dialogProps };
    emitChange();
}

function updateDialogProps(props) {
    _.merge(dialogToDisplay.props, props);
    emitChange();
}

function closeDialog() {
    dialogToDisplay = null;
    emitChange();
}

function getDialogToDisplay() {
    return dialogToDisplay;
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
    getDialogToDisplay: getDialogToDisplay,
    addChangeListener: addChangeListener,
    removeChangeListener: removeChangeListener
};
