'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var sendgrid = require('sendgrid')('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');
var templateUtils = require('./templateUtils');

var PENDING_MAILS_PATH = 'pendingEmails';

function sendMail(to, subject, content) {
    return new Promise(function(resolve, reject) {
        var email = new sendgrid.Email();

        var toAsArray = _.isArray(to) ? to : [ to ];
        _.forEach(toAsArray, function(address) {
            email.addTo(address);
        });

        email.setFrom('hapoelbus@gmail.com');
        email.setSubject(subject);
        email.setHtml(content);

        sendgrid.send(email, function(err) {
            if (err) { return reject() }
            resolve();
        });
    });
}


function sendPendingTemplate(pendingTemplate, mailId) {
    var to = pendingTemplate.to || [];
    var subject = templateUtils.getEmailSubject(pendingTemplate.templateId);
    var content = templateUtils.getEmailContent(pendingTemplate.templateId, pendingTemplate.subs);

    return sendMail(to, subject, content)
        .then(function() {
            return dbUtils.remove(PENDING_MAILS_PATH + '/templates/' + mailId);
        });
}

function sendPendingCustom(pendingCustom, mailId) {
    var to = pendingCustom.to || [];
    var subject = pendingCustom.subject || '';
    var content = pendingCustom.content || '';

    return sendMail(to, subject, content)
        .then(function() {
            dbUtils.remove(PENDING_MAILS_PATH + '/custom/' + mailId);
        });
}

dbUtils.loginAsAdmin()
    .then(function() {
        return dbUtils.read(PENDING_MAILS_PATH);
    })
    .then(function(pendingMails) {
        var promises = [];

        _.forOwn(pendingMails.templates, function(pendingTemplate, mailId) {
            promises.push(sendPendingTemplate(pendingTemplate, mailId));
        });

        _.forOwn(pendingMails.custom, function(pendingCustom, mailId) {
            promises.push(sendPendingCustom(pendingCustom, mailId));
        });

        return Promise.all(promises);
    })
    .then(function() {
        console.log('All mails were sent successfully');
    })
    .catch(function() {
        console.log('oh no... something went wrong :(');
    })
    .finally(function() {
        process.exit();
    });