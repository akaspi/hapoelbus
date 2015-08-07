'use strict';

var dispatcher = require('../dispatcher/dispatcher');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchAccountData: function () {
        dispatchAction({
            type: 'FETCH_ACCOUNT_DATA'
        });
    },
    createAccount: function (accountData) {
        dispatchAction({
            type: 'CREATE_ACCOUNT',
            accountData: accountData
        });
    }
};
