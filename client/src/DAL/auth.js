'use strict';

var _ = require('lodash');

var db = require('./db');

function onAuthActionComplete(onSuccess, onError, errorData, authData) {
    if (errorData) {
        onError(errorData.code);
    } else {
        onSuccess();
    }
}

function getUserAuthData(authData) {
    switch (authData.provider) {
        case 'password':
            return authData.password;
        case 'google':
            return authData.google;
        case 'facebook':
            return authData.facebook;
    }
}

module.exports = {
    createUser: function (email, password, onSuccess, onError) {
        db.createUser({
            email: email,
            password: password
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    login: function (email, password, onSuccess, onError) {
        db.authWithPassword({
            email: email,
            password: password
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    socialLogin: function (provider, onSuccess, onError) {
        db.authWithOAuthPopup(provider, onAuthActionComplete.bind(null, onSuccess, onError), {scope: 'email'});
    },
    isLoggedIn: function () {
        return !!db.getAuth();
    },
    isAdmin: function(onComplete) {
        if (!this.isLoggedIn()) {
            return onComplete(false);
        }
        db.child('admins').child(db.getAuth().uid).once('value', function(snapshot) {
            onComplete(!!snapshot.val());
        });
    },
    getUserId: function () {
        return this.isLoggedIn() ? db.getAuth().uid : null;
    },
    getUserAuthEmail: function () {
        return this.isLoggedIn() ? getUserAuthData(db.getAuth()).email : null;
    },
    getUserAuthPicture: function () {
        return this.isLoggedIn() ? getUserAuthData(db.getAuth()).profileImageURL : null;
    },
    hasProfilePicture: function () {
        return this.isLoggedIn() && (db.getAuth().provider === "google" || db.getAuth().provider === "facebook");
    },
    logOut: function () {
        db.unauth();
    },
    resetPasswordRequest: function (email, onSuccess, onError) {
        db.resetPassword({
            email: email
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    },
    changePassword: function (email, oldOrTempPassword, newPassword, onSuccess, onError) {
        db.changePassword({
            email: email,
            oldPassword: oldOrTempPassword,
            newPassword: newPassword
        }, onAuthActionComplete.bind(null, onSuccess, onError));
    }
};
