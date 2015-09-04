'use strict';

var dispatcher = require('../dispatcher/dispatcher');

var ModalConstants = require('../constants/ModalConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    showModal: function (name, props) {
        dispatchAction({
            type: ModalConstants.ACTIONS.SHOW_MODAL,
            name: name,
            props: props
        });
    },
    hideCurrentModal: function () {
        dispatchAction({
            type: ModalConstants.ACTIONS.HIDE_CURRENT_MODAL
        });
    }
};
