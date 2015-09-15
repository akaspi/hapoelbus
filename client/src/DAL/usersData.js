'use strict';

var _ = require('lodash');
var db = require('./db');

var usersDataRef = db.child('usersData');

module.exports =  {
    getAllUsersData: function(onSuccess, onError) {
        usersDataRef.once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    getUserDataById: function (uid, onSuccess, onError) {
        usersDataRef.child(uid).once('value', function(snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    updateUserData: function (uid, data, onSuccess, onError){
        usersDataRef.child(uid).update(data, function(error) {
            if (error) {
                return onError();
            }
            onSuccess();
        });
    }
};
