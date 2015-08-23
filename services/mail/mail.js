'use strict';

var firebaseSecretKey = 'FquBx5bqTtH5sfvocXJAZlLEIDRIqiVptwhMiJ3u';
var sendgridSecretKey = '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';

var sendgrid  = require('sendgrid')(sendgridSecretKey);
var firebaseRoot = new (require('firebase'))('https://hapoelbus-prod.firebaseio.com/');
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
          onError(err);
          return;
        }
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
    firebaseRoot.child('usersData').on('child_added', function(snapshot) {
        var userData = snapshot.val();
        isWelcomeEmailSentToUser(userData, function(result) {
          if (!result) {
            console.log('sending welcome mail to ' + userData.email);
            sendWelcomeMail(userData, function() {
              console.log('mail was successfully sent to ' + userData.email);
              firebaseRoot.child(welcomeMailDBPath).push(userData.email);
            }, function(err) {
              console.log('failed to send email to ' + userData.email + '.')
              console.log(err);
            });
          } else {
            console.log('welcome mail was already sent to ' + userData.email + '. Skipping...');
          }
        })
    });
}

function isWelcomeEmailSentToUser(userData, onComplete) {
  firebaseRoot.child(welcomeMailDBPath).once('value', function(snapshot) {
    onComplete(_.any(snapshot.val(), function(val) { return val === userData.email }));
  });
}

 firebaseRoot.authWithCustomToken(firebaseSecretKey, function(error) {
   if (error) {
     console.log("Authentication Failed!\n", error);
     process.exit();
   }
   console.log('Admin authentication success!\n');
   listenToAddedUsers();
 });
