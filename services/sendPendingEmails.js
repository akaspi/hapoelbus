'use strict';

var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var sendgrid = require('sendgrid')('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');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'mailTemplates');

var PENDING_MAILS_PATH = 'pendingEmails';
var templatesDataMap = {
    gameIsOpenForAll: { fileName: 'gameIsOpenForAll', subject: 'נפתחה הרשמה לכל המשתמשים!'},
    gameIsOpenForMembers: { fileName: 'gameIsOpenForMembers', subject: 'נפתחה הרשמה חדשה למנויים!'},
    updateGameDetails: { fileName: 'updateGameDetails', subject: 'שימו לב! עודכנו פרטי הסעה!'},
    welcomeMail: { fileName: 'welcomeMail', subject: 'ברוכים הבאים ל-מחוץ לחומות!'},
    reportAdminsForNewUsers: { fileName: 'reportAdminsForNewUsers', subject: 'נוספו משתמשים חדשים באתר!'}
};

function sendMail(to, subject, content) {
    return new Promise(function(resolve, reject) {
        console.log(to);
        resolve();
        //var email = new sendgrid.Email();
        //
        //var toAsArray = _.isArray(to) ? to : [ to ];
        //_.forEach(toAsArray, function(address) {
        //    email.addTo(address);
        //});
        //
        //email.setFrom('hapoelbus@gmail.com');
        //email.setSubject(subject);
        //email.setHtml(content);
        //
        //sendgrid.send(email, function(err) {
        //    if (err) { return reject(mailId) }
        //    resolve(mailId);
        //});
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

function sendPendingTemplate(pendingTemplate, mailId) {
    var to = pendingTemplate.to || [];
    var subject = templatesDataMap[pendingTemplate.templateId].subject;
    var content = getTemplateContent(pendingTemplate.templateId, pendingTemplate.subs);

    return sendMail(to, subject, content)
        .then(function() {
            return dbUtils.remove(PENDING_MAILS_PATH + '/templates', mailId);
        });
}

function sendPendingCustom(pendingCustom, mailId) {
    var to = pendingCustom.to || [];
    var subject = pendingCustom.subject || '';
    var content = pendingCustom.content || '';

    return sendMail(to, subject, content)
        .then(function() {
            dbUtils.remove(PENDING_MAILS_PATH + '/custom', mailId);
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