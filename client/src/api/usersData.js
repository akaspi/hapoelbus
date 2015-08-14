'use strict';

var _ = require('lodash');
var db = require('./db');

var usersDataRef = db.child("usersData");

module.exports =  {
    getUserData: function (uid, cb) {
        usersDataRef.child(uid).once('value', function(snapshot) {
            cb(snapshot.val());
        });
    },
    createUserData: function(uid, accountData, cb) {
        usersDataRef.child(uid).set(accountData, function(error) {
            cb()
        });
    },
    updateUser: function (uid, dataToUpdate) {
        usersDataRef.child(uid).update(dataToUpdate);
    }
};
