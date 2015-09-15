'use strict';

var _ = require('lodash');

var dispatcher = require('../dispatcher/dispatcher');
var paymentsAPI = require('../DAL/payments');

var paymentsConstants = require('../constants/paymentsConstants');
var listeners = [];

function notifyAll() {
    _.forEach(listeners, function (listener) {
        listener(storeData);
    });
}

var storeData = {
    pending: false,
    payments: {}
};

dispatcher.register(function (actionData) {
    switch (actionData.type) {
        case paymentsConstants.ACTIONS.FETCH_PAYMENTS:
            fetchPayments(actionData);
            break;
        case paymentsConstants.ACTIONS.UPDATE_PAYMENT:
            updatePayment();
            break;
    }
});

function fetchPayments(actionData) {
    storeData.pending = true;
    notifyAll();

    if (actionData.uid) {
        paymentsAPI.getPaymentById(actionData.uid, function(payment) {
            if (payment) {
                storeData.payments[actionData.uid] = payment;
            }
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    } else {
        paymentsAPI.getAllPayments(function(payments) {
            storeData.payments = payments;
            storeData.pending = false;
            notifyAll();
        }, function() {

        })
    }
}

function updatePayment(actionData) {
    paymentsAPI.updatePayment(actionData.uid, actionData.data, function() {
        fetchPayments(actionData);
    }, function() {

    });
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
