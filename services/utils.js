'use strict';

var Firebase = require('firebase');

var config = {};

try {
    config = require('./config.json');
} catch (e) {
    console.log('Failed to load config file.');
    process.exit();
}

function isDevMode() {
    return process.argv.indexOf('-prod') === -1;
}

if (isDevMode()) {
    console.log('Initializing with development config');
} else {
    console.log('Initializing with production config');
}

module.exports = {
    isDevMode: isDevMode,
    getFirebaseRef: function() {
        var appName = isDevMode() ? config.firebase.development.appName : config.firebase.production.appName;
        return new Firebase('https://' + appName + '.firebaseio.com/');
    },
    loginAsAdmin: function(ref, onSuccess, onError) {
        var key = isDevMode() ? config.firebase.development.key : config.firebase.production.key;
        ref.authWithCustomToken(key, function(error) {
            if (error) {
                onError();
            } else {
                onSuccess();
            }
        });
    }
};
