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
    updateUserData: function(uid, userData, onSuccess, onError) {
        var dataToUpdate = _.pick(userData, ['displayName', 'email', 'phone', 'isPremium']);
        var paymentsData = _.pick(userData, ['maxSeats']);

        usersDataRef.child(uid).update(dataToUpdate, function(error) {
            if (error) {
                return onError();
            }
            paymentsRef.child(uid).update(paymentsData, function(error) {
                if (error) {
                    return onError();
                }
                onSuccess();
            })
        })
    }
};
