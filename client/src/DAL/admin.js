'use strict';

var _ = require('lodash');
var db = require('./db');

var usersDataRef = db.child("usersData");
var paymentsRef = db.child("payments");

function mergeUsersData(usersData, payments) {
    return _.reduce(usersData, function(accum, val, key) {
        accum[key] = _.merge(val, payments[key]);
        return accum;
    }, {});
}

module.exports =  {
    getUsersData: function (onSuccess, onError) {
        usersDataRef.once('value', function(usersDataSnapshot) {
            paymentsRef.once('value', function(paymentSnapshot) {
                var result = mergeUsersData(usersDataSnapshot.val() || {}, paymentSnapshot.val() || {});
                onSuccess(result);
            }, onError);
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
