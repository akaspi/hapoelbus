'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var emailsConstants = require('../constants/emailsConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    sendTemplateEmail: function (template, gameId) {
        dispatchAction({
            type: emailsConstants.ACTIONS.SEND_TEMPLATE_EMAIL,
            template: template,
            gameId: gameId
        });
    },
    showAdminView: function () {
        dispatchAction({
            type: 'SHOW_ADMIN_VIEW'
        });
    }
};
