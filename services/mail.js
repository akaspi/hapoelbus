'use strict';

var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var sendgrid = require('sendgrid')('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');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'mailTemplates');

var PENDING_MAILS_PATH = 'pendingMails';
var templatesDataMap = {
    gameIsOpenForAll: { fileName: 'gameIsOpenForAll', subject: 'נפתחה הרשמה לכל המשתמשים!'},
    gameIsOpenForMembers: { fileName: 'gameIsOpenForMembers', subject: 'נפתחה הרשמה חדשה למנויים!'},
    updateGameDetails: { fileName: 'updateGameDetails', subject: 'שימו לב! עודכנו פרטי הסעה!'},
    welcomeMail: { fileName: 'welcomeMail', subject: 'ברוכים הבאים ל-מחוץ לחומות!'}
};

function sendMail(to, subject, content, mailId) {
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
            if (err) { return reject(mailId) }
            resolve(mailId);
        });
    });
}

function getTemplateContent(templateId, substitutions) {
    var templateContent = fs.readFileSync(templatesPath + '/' + templatesDataMap[templateId].fileName + '.html').toString();
    if (substitutions) {
        templateContent = _.reduce(substitutions, function(accum, subVal, subKey) {
            return accum.replace(subKey, subVal);
        }, templateContent);
    }
    return templateContent;
}

function sendPendingMail(mailRequest, mailId) {
    var to = mailRequest.to || [];
    var subject = mailRequest.subject || '';
    var content = mailRequest.content || '';

    var templateId = mailRequest.templateId;
    if (templateId) {
        subject = templatesDataMap[templateId].subject;
        content = getTemplateContent(templateId, mailRequest.substitutions)
    }

    return sendMail(to, subject, content, mailId);
}

function sendPendingMails() {
    dbUtils.loginAsAdmin()
        .then(function() {
            return dbUtils.read(PENDING_MAILS_PATH);
        })
        .then(function(pendingMails) {
            var map =  _.map(pendingMails, function(mailRequest, mailId) {
                return sendPendingMail(mailRequest, mailId);
            });

            return Promise.settle(map);
        })
        .then(function(inspections) {
            _.forEach(inspections, function(inspection) {
               if (inspection.isFulfilled()) {
                   var mailId = inspection.value();
                   dbUtils.remove(PENDING_MAILS_PATH + '/' + mailId);
                   console.log(mailId + ' was sent successfully.');
               } else if (inspection.isRejected()) {
                   console.log('Failed to send pending mail. Reason: ' + inspection.reason());
               }
            });
        })
        .catch(function() {
           console.log('oh no... something went wrong :(');
        })
        .finally(function() {
            process.exit();
        })
}

sendPendingMails();
