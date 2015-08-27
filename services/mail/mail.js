'use strict';

var utils = require('../utils.js');
var sendgrid  = require('sendgrid')(sendgridSecretKey);
var ref = utils.getFirebaseRef();
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'templates');

var welcomeMailDBPath = 'emails/welcome';

function send(to, subject, body, onSuccess, onError) {
    var email = new sendgrid.Email({
        to:       to,
        from:     'hapoelbus@gmail.com',
        subject:  subject,
        html:     body
    });
    sendgrid.send(email, function(err, json) {
        if (err) {
          console.log('failed to send email to ' + to);
          return;
        }
        console.log('mail was successfully sent to ' + to);
        onSuccess();
    });
}

function sendWelcomeMail(userData, onSuccess, onError) {
    var welcomeEmailTemplate = fs.readFileSync(templatesPath + '/welcomeMail.html').toString();

    var subject = 'ברוכים הבאים ל-מחוץ לחומות!';
    var content = welcomeEmailTemplate.replace('USER', userData.displayName);

    send(userData.email, subject, content, onSuccess, onError);
}

function listenToAddedUsers() {
    console.log('listening to usersData:child_added\n');
    ref.child('usersData').on('child_added', function(snapshot) {
        var userData = snapshot.val();
        isWelcomeEmailSentToUser(userData, function(result) {
          if (!result) {
            if (!utils.isDevMode() || _.contains(['kaspi.amit@gmail.com'], userData.email)) {
              sendWelcomeMail(userData, function() {
                ref.child(welcomeMailDBPath).push(userData.email);
              }, _.noop);
            } else {
              console.log('email was not sent since ' + userData.email + ' is not in the whitelist');
            }
          } else {
            console.log('welcome mail was already sent to ' + userData.email + ' - Skipping...');
          }
        })
    });
}

function isWelcomeEmailSentToUser(userData, onComplete) {
  ref.child(welcomeMailDBPath).once('value', function(snapshot) {
    onComplete(_.any(snapshot.val(), function(val) { return val === userData.email }));
  });
}

utils.loginAsAdmin(ref, function() {
    console.log('Admin authentication success!\n');
    listenToAddedUsers();
}, function() {
    console.log("Authentication Failed!\n", error);
    process.exit();
});