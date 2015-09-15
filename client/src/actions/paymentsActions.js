'use strict';

var dispatcher = require('../dispatcher/dispatcher');
var paymentsConstants = require('../constants/paymentsConstants');

function dispatchAction(actionData) {
    dispatcher.dispatch(actionData);
}

module.exports = {
    fetchPayments: function (uid) {
        dispatchAction({
            type: paymentsConstants.ACTIONS.FETCH_PAYMENTS,
            uid: uid
        });
    },
    updatePayment: function (uid, data) {
        dispatchAction({
            type: paymentsConstants.ACTIONS.UPDATE_PAYMENT,
            uid: uid,
            data: data
        });
    }
};
