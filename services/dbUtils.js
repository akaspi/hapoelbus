'use strict';

var Firebase = require('firebase');
var Promise = require('bluebird');
var config = require('./config');

var ref = new Firebase('https://' + config.FIREBASE_APP + '.firebaseio.com/');


function loginAsAdmin() {
    return new Promise(function(resolve, reject) {
        ref.authWithCustomToken(config.FIREBASE_SECRET, function(error) {
            if (error) { return reject() }
            resolve();
        });
    });
}

function read(path) {
    return new Promise(function(resolve, reject) {
        ref.child(path).once('value', function(snapshot) {
            resolve(snapshot.val() || {});
        }, reject);
    });
}

function update(path, data) {
    return new Promise(function(resolve, reject) {
        ref.child(path).update(data, function(error) {
            if (error) { return reject() }
            resolve();
        });
    });
}

function set(path, val) {
    return new Promise(function(resolve, reject) {
        ref.child(path).set(val, function(error) {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

function push(path, val) {
    var uniqueKey = ref.push().key();
    return set(path + '/' + uniqueKey, val)
        .then(function() {
            return uniqueKey;
        });
}

function remove(path) {
    return new Promise(function(resolve, reject) {
        ref.child(path).remove(function(error) {
            if (error) { return reject() }
            resolve();
        })
    });
}


module.exports = {
    loginAsAdmin: loginAsAdmin,
    read: read,
    update: update,
    set: set,
    push: push,
    remove: remove
};
