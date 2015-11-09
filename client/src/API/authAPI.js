'use strict';

var db = require('./db');
var ref = db.ref;

var adminsRef = ref.child('admins');
var Promise = require('bluebird');

function createUser(email, password) {
    return new Promise(function(resolve, reject) {
        ref.createUser({email: email, password: password}, function(err) {
           if (err) {
               return reject();
           }
            resolve();
        });
    });
}

function login(email, password) {
    return new Promise(function(resolve, reject) {
        ref.authWithPassword({email: email, password: password}, function(err, authData) {
            if (err) {
                return reject();
            }
            resolve(authData.uid);
        });
    });
}

function socialLogin(provider) {
    return new Promise(function(resolve, reject) {
        ref.authWithOAuthPopup(provider, function(err, authData) {
            if (err) {
                return reject();
            }
            resolve(authData.uid);
        });
    });
}

function resetPassword(email) {
    return new Promise(function(resolve, reject) {
        ref.resetPassword({email: email}, function(err) {
            if (err) {
                return reject();
            }
            resolve();
        });
    });
}

function changePassword(email, oldPassword, newPassword) {
    return new Promise(function(resolve, reject) {
        ref.changePassword({email: email, oldPassword: oldPassword, newPassword: newPassword}, function(err) {
            if (err) {
                return reject();
            }
            resolve();
        });
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
    var authData = ref.getAuth();
    return authData[authData.provider].email;
}

function getUserProfileImageURL() {
    var authData = ref.getAuth();
    return authData[authData.provider].profileImageURL;
}

module.exports = {
    createUser: createUser,
    login: login,
    socialLogin: socialLogin,
    resetPassword: resetPassword,
    changePassword: changePassword,
    getUID: getUID,
    isAdmin: isAdmin,
    logout: logout,
    getUserProfileImageURL: getUserProfileImageURL,
    getUserEmail: getUserEmail
};
