'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var templateUtils = require('./templateUtils');

var accountSid = 'AC297f818312918ead6e0d8f67f7d0f313';
var authToken = 'd3d7fb41dd37955d1c3dd41ddb82df9f';
var smsClient = require('twilio')(accountSid, authToken);

var PENDING_SMS_PATH = 'pendingSMS';

function sendSMS(phoneNumber, content) {
    return new Promise(function(resolve, reject) {
        smsClient.messages.create({
            from: 'HapoelBus',
            to: phoneNumber,
            body: content
        }, function(err, message) {
            if (err) { return reject(err) }
            resolve(message.id);
        });
    });
}

function sendPendingTemplate(pendingTemplate, smsId) {
    var to = pendingTemplate.to || [];
    var content = templateUtils.getSMSContent(pendingTemplate.templateId, pendingTemplate.subs);

    var sendSMSPromises = _.map(to, function(phoneNumber) {
        return sendSMS(phoneNumber, content);
    });

    return Promise.all(sendSMSPromises).then(function() {
        return dbUtils.remove(PENDING_SMS_PATH + '/templates/' + smsId);
    });
}

function sendPendingCustom(pendingCustom, smsId) {
    var to = pendingCustom.to || [];
    var content = pendingCustom.content || '';

    var sendSMSPromises = _.map(to, function(phoneNumber) {
        return sendSMS(phoneNumber, content);
    });

    return Promise.all(sendSMSPromises).then(function() {
        return dbUtils.remove(PENDING_SMS_PATH + '/custom/' + smsId)
    });
}

dbUtils.loginAsAdmin()
    .then(function() {
        return dbUtils.read(PENDING_SMS_PATH)
    })
    .then(function(pendingSMS) {
        var promises = [];

        _.forOwn(pendingSMS.templates, function(pendingTemplate, smsId) {
            promises.push(sendPendingTemplate(pendingTemplate, smsId));
        });

        _.forOwn(pendingSMS.custom, function(pendingCustom, smsId) {
            promises.push(sendPendingCustom(pendingCustom, smsId));
        });

        return Promise.all(promises);
    })
    .then(function() {
        console.log('All SMS were sent successfully');
    })
    .catch(function(e) {
        console.log(e.stack);
        console.log('oh no... something went wrong :(');
    })
    .finally(function() {
        process.exit();
    });
