'use strict';

var _ = require('lodash');

var db = require('./db');

function onAuthActionComplete(onSuccess, onError, errorData, authData) {
    if (errorData) {
        onError();
    } else {
        onSuccess();
    }
}

module.exports = {
    createUser: function(email, password, onSuccess, onError) {
        db.createUser({
            email: email,
            password: password
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    login: function(email, password, onSuccess, onError) {
        db.authWithPassword({
            email: email,
            password: password
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    socialLogin: function(provider, onSuccess, onError) {
        db.authWithOAuthPopup(provider, onAuthActionComplete.bind(null, onSuccess, onError), {scope: 'email'});
    },
    isLoggedIn: function() {
        return !!db.getAuth();
    },
    getUserId: function() {
        return this.isLoggedIn() ? db.getAuth().uid : null;
    },
    logOut: function() {
        db.unauth();
    },
    resetPasswordRequest:function(email, onSuccess, onError) {
        db.resetPassword(email, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    changePassword: function(email, oldOrTempPassword, newPassword, onSuccess, onError) {
        db.changePassword({
            email: email,
            oldPassword: oldOrTempPassword,
            newPassword: newPassword
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    }
};
