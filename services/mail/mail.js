'use strict';

var isDevMode = !!(process.argv.slice(2)[0] !== "prod");

console.log('Running mail service in ' + (isDevMode ? 'DEV' : 'PRODUCTION') + ' mode.');

var firebaseSecretKey = isDevMode ? 'dU1eXra0oMlXtzxawLFRYp2k67hZoTTC2hcubN1x' : 'FquBx5bqTtH5sfvocXJAZlLEIDRIqiVptwhMiJ3u';
var firebaseApp = isDevMode ? 'hapoelbus-testapp' : 'hapoelbus-prod';
var sendgridSecretKey = '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';

var sendgrid  = require('sendgrid')(sendgridSecretKey);
var firebaseRoot = new (require('firebase'))('https://' + firebaseApp + '.firebaseio.com/');
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
    firebaseRoot.child('usersData').on('child_added', function(snapshot) {
        var userData = snapshot.val();
        isWelcomeEmailSentToUser(userData, function(result) {
          if (!result) {
            if (!isDevMode || _.contains(['kaspi.amit@gmail.com'], userData.email)) {
              sendWelcomeMail(userData, function() {
                firebaseRoot.child(welcomeMailDBPath).push(userData.email);
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
