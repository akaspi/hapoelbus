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
