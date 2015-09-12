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
    getByUID: function (uid, onSuccess, onError) {
        paymentsRef.child(uid).once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    updateByUID: function(uid, data, onSuccess, onError) {
        paymentsRef.child(uid).update(data, function(error) {
            if (error) {
                return onError();
            }
            onSuccess();
        });
    }
};
