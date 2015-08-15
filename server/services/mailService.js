'use strict';

var config = require('../../config.js');
var fs = require('fs');
var sendgrid  = require('sendgrid')(config.sendgrid_key);
var Firebase = require('firebase');
var ref = new Firebase("https://hapoelbus-testapp.firebaseio.com/");

function send(to, subject, body) {
    var email = new sendgrid.Email({
        to:       to,
        from:     'hapoelbus@gmail.com',
        subject:  subject,
        html:     body
    });
    sendgrid.send(email, function(err, json) {
        if (err) { return console.error(err); }
        console.log(json);
    });
}

function listenToAddedUsers() {
    var welcomeEmailTemplate = fs.readFileSync('server/services/welcomeEmailTemplate.html').toString();
    ref.child('usersData').on('child_added', function(snapshot) {
        var userData = snapshot.val();
        var emailContent = welcomeEmailTemplate.replace('USER', userData.displayName);
        send(userData.email, 'ברוכים הבאים ל-מחוץ לחומות!', emailContent);
    });
}

function listen() {
    ref.authWithCustomToken(config.firebase_secret, function(error, result) {
        if (error) {
            console.log("Authentication Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", result.auth);
            console.log("Auth expires at:", new Date(result.expires * 1000));

            listenToAddedUsers();
        }
    });
}

module.exports = {
    listen: listen
};
