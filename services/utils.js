'use strict';

var Firebase = require('firebase');

var config = {};

try {
    config = require('./config.json');
} catch (e) {
    console.log('Failed to load config file.');
    process.exit();
}

module.exports = {
    isDevMode: isDevMode,
    getFirebaseRef: function() {
        return new Firebase('https://' + config.FIREBASE_APP + '.firebaseio.com/');
    },
    loginAsAdmin: function(ref, onSuccess, onError) {
        ref.authWithCustomToken(config.FIREBASE_SECRET, function(error) {
            if (error) {
                console.log('Failed to login as Admin', error);
                if (onError) {
                    onError();
                }
            } else {
                console.log('Admin authentication success!\n');
                onSuccess();
            }
        });
    }
};
