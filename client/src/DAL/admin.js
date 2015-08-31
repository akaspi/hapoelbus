'use strict';

var _ = require('lodash');
var db = require('./db');

var usersDataRef = db.child("usersData");
var paymentsRef = db.child("payments");

module.exports =  {
    getUsersData: function (onSuccess, onError) {
        usersDataRef.once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    updatePayments: function(uid, maxSeats, onSuccess, onError) {
        var dataToUpdate = {
            mexSeats: maxSeats
        };
        paymentsRef.child(uid).update(dataToUpdate, function() {
            onSuccess();
        }, onError);
    }
};
