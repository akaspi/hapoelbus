'use strict';

var _ = require('lodash');
var db = require('./db');

var accountsRef = db.child("accounts");

module.exports =  {
    getAccountData: function (uid, cb) {
        accountsRef.child(uid).once('value', function(snapshot) {
            cb(snapshot.val());
        });
    },
    createAccount: function(uid, accountData, cb) {
        accountsRef.child(uid).set(accountData, function(error) {
            cb()
        });
    },
    updateUser: function (uid, dataToUpdate) {
        accountsRef.child(uid).update(dataToUpdate);
    }
};
