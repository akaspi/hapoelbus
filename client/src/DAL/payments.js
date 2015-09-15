'use strict';

var _ = require('lodash');
var db = require('./db');

var paymentsRef = db.child("payments");

module.exports =  {
    getAll: function(onSuccess, onError) {
        paymentsRef.once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    getAllPayments: function(onSuccess, onError) {
        paymentsRef.once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    getPaymentById: function (uid, onSuccess, onError) {
        paymentsRef.child(uid).once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    updatePayment: function(uid, data, onSuccess, onError) {
        paymentsRef.child(uid).update(data, function(error) {
            if (error) {
                return onError();
            }
            onSuccess();
        });
    }
};
