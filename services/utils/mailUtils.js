'use strict';

var sendgrid  = require('sendgrid')('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');
var _ = require('lodash');

function sendMail(to, subject, body, onSuccess, onError) {
    var email = new sendgrid.Email();

    var toAsArray = _.isArray(to) ? to : [ to ];
    _.forEach(toAsArray, function(address) {
       email.addTo(address);
    });

    email.setFrom('hapoelbus@gmail.com');
    email.setSubject(subject);
    email.setHtml(body);

    sendgrid.send(email, function(err) {
        if (err) {
            onError();
            return;
        }
        onSuccess();
    });
}

function getAllUsersEmails(ref, onComplete) {
    ref.child('usersData').once('value', function (snapshot) {
        var allUsersData = snapshot.val();
        var allEmails = _.pluck(_.values(allUsersData), 'email');
        onComplete(allEmails);
    });
}

module.exports = {
    sendMail: sendMail,
    getAllUsersEmails: getAllUsersEmails
};
