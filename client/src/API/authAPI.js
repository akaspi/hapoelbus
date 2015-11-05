'use strict';

var db = require('./db');
var ref = db.ref;

var adminsRef = ref.child('admins');
var Promise = require('bluebird');

function createUser(email, password, onSuccess, onError) {
    ref.createUser({
        email: email,
        password: password
    }, function (error) {
        if (error) {
            switch (error.code) {
                case "EMAIL_TAKEN":
                    onError("The new user account cannot be created because the email is already in use.");
                    break;
                case "INVALID_EMAIL":
                    onError("The specified email is not a valid email.");
                    break;
                default:
                    onError("Error creating user:", error);
            }
        } else {
            onSuccess();
        }
    });
}

function login(email, password, onSuccess, onError) {
    ref.authWithPassword({
        email: email,
        password: password
    }, function (error, authData) {
        if (error) {
            onError("Login Failed!", error);
        } else {
            onSuccess(authData.uid);
        }
    });
}

function socialLogin(provider, onSuccess, onError) {
    ref.authWithOAuthPopup(provider, function (error, authData) {
        if (error) {
            onError("Authentication Failed!", error);
        } else {
            onSuccess(authData.uid);
        }
    });

}

function isAdmin(uid) {
    return db.read('admins').then(function(admins) {
        return !!admins[uid]
    });
}

function getUID() {
    var authData = ref.getAuth();
    return authData && authData.uid;
}

function logout() {
    ref.unauth();
}

function getUserEmail() {
    return 'aaa@bbb.com';
}

module.exports = {
    createUser: createUser,
    login: login,
    socialLogin: socialLogin,
    getUID: getUID,
    isAdmin: isAdmin,
    logout: logout,
    //getUserProfileImageURL: getUserProfileImageURL,
    getUserEmail: getUserEmail
};
