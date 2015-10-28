'use strict';

var Firebase = require('firebase');
var Promise = require('bluebird');
var config = require('../config.js');
var ref = new Firebase('https://' + config.FIREBASE_APP + '.firebaseio.com/');

function read(path) {
    return new Promise(function(resolve, reject) {
        ref.child(path).once('value', function(snapshot) {
            resolve(snapshot.val());
        }, reject);
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

function update(path, data) {
    return new Promise(function(resolve, reject) {
        ref.child(path).update(data, function(error) {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

function remove(path) {
    return new Promise(function(resolve, reject) {
        ref.child(path).remove(function(error) {
            if (error) {
                return reject(error);
            }
            resolve();
        });
    });
}

function generateUniqueId() {
    return ref.push().key();
}

module.exports = {
    ref: ref,
    read: read,
    set: set,
    update: update,
    remove: remove,
    generateUniqueId: generateUniqueId
};
