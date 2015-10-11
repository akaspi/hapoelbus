'use strict';

var utils = require('../utils/dbUtils.js');
var sendgrid  = require('sendgrid')('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');
var ref = utils.getFirebaseRef();
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'templates');

var devModeEmailsWhiteList = ['kaspi.amit@gmail.com'];

function send(to, subject, body, onSuccess, onError) {
    var email = new sendgrid.Email({
        to:       to,
        from:     'hapoelbus@gmail.com',
        subject:  subject,
        html:     body
    });
    sendgrid.send(email, function(err) {
        if (err) {
            onError();
            return;
        }
        onSuccess();
    });
}

function sendWelcomeMail(userData, onSuccess) {
    var welcomeEmailTemplate = fs.readFileSync(templatesPath + '/welcomeMail.html').toString();

    var to = userData.email;
    var subject = 'ברוכים הבאים ל-מחוץ לחומות!';
    var content = welcomeEmailTemplate.replace('USER', userData.displayName);

    send(to, subject, content, function() {
        console.log('email was sent to ' + to);
        onSuccess();
    }, function() {
        console.log('failed to send email to ' + to);
    });
}

function sendWelcomeMailIfNeeded(uid, userData) {
    var welcomeMailRef = ref.child('emails').child(uid).child('welcome');
    welcomeMailRef.once('value', function(welcomeMailSnapshot) {
        var shouldSendMail = !welcomeMailSnapshot.val();
        if (shouldSendMail) {
            sendWelcomeMail(userData, function() {
                welcomeMailRef.set(true);
            })
        } else {
            console.log('should not send email to ' + userData.email);
        }
    })
}

function listenToAddedUsers() {
    console.log('listening to usersData:child_added\n');
    ref.child('usersData').on('child_added', function(snapshot) {
        sendWelcomeMailIfNeeded(snapshot.key(), snapshot.val());
    });
}

utils.loginAsAdmin(ref, function() {
    listenToAddedUsers();
}, function() {
    process.exit();
});


