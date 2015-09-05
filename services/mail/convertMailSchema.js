'use strict';

var utils = require('../utils.js');
var _ = require('lodash');
var ref = utils.getFirebaseRef();

function addEmail(uid, done) {
    ref.child('emails').child(uid).child('welcome').set(true, done)
}

function removeEmail(email, done) {
    var oldWelcomeMailDBRef = ref.child('emails').child('welcome');
    oldWelcomeMailDBRef.once('value', function (emailsSnapshot) {
        var allWelcomeEmailsRecords = emailsSnapshot.val();
        var keyToRemove = _.findKey(allWelcomeEmailsRecords, function(val) {
            return val.email === email;
        });
        if (keyToRemove) {
            oldWelcomeMailDBRef.child(keyToRemove).remove(done);
        } else {
            done();
        }
    });
}

function convert(done) {
    ref.child('usersData').once('value', function (usersDataSnapshot) {
        var numOfOpenRequests = 0;
        usersDataSnapshot.forEach(function (userSnapshot) {
            var email = userSnapshot.val().email;
            var uid = userSnapshot.key();
            numOfOpenRequests++;
                removeEmail(email, function () {
                addEmail(uid, function () {
                    console.log('process done for ' + email);
                    numOfOpenRequests--;
                })
            })
        });

        setInterval(function() {
            if (numOfOpenRequests === 0) {
                done();
            }
        }, 1000);
    });
}

utils.loginAsAdmin(ref, function() {
    convert(function() {
        process.exit();
    });
}, function() {
    process.exit();
});