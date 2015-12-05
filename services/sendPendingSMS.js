'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var templateUtils = require('./templateUtils');

var accountSid = 'AC297f818312918ead6e0d8f67f7d0f313';
var authToken = 'd3d7fb41dd37955d1c3dd41ddb82df9f';
var smsClient = require('twilio')(accountSid, authToken);

var CONCURRENCY_SMS_CALLS = 10;

var PENDING_SMS_PATH = 'pendingSMS';

function sendSMS(phoneNumber, content) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            smsClient.messages.create({
                from: 'HapoelBus',
                to: phoneNumber,
                body: content
            }, function (err, message) {
                if (err) {
                    return reject(err)
                }
                resolve(message.id);
            });
        }, 10000);
    });
}

function sendPendingTemplate(pendingTemplate, smsId) {
    var to =  pendingTemplate.to || [];
    var content = templateUtils.getSMSContent(pendingTemplate.templateId, pendingTemplate.subs);

    return Promise.map(to, function (phoneNumber) {
            return sendSMS(phoneNumber, content);
        }, {concurrency: CONCURRENCY_SMS_CALLS})
        .then(function () {
            return dbUtils.remove(PENDING_SMS_PATH + '/templates/' + smsId);
        })
}

function sendPendingCustom(pendingCustom, smsId) {
    var to = pendingCustom.to || [];
    var content = pendingCustom.content || '';

    return Promise.map(to, function (phoneNumber) {
            return sendSMS(phoneNumber, content);
        }, {concurrency: CONCURRENCY_SMS_CALLS})
        .then(function () {
            return dbUtils.remove(PENDING_SMS_PATH + '/custom/' + smsId);
        });
}

console.log('\n\n****** RUNS AT ' + new Date() + ' ******');
dbUtils.loginAsAdmin()
    .then(function () {
        return dbUtils.read(PENDING_SMS_PATH)
    })
    .then(function (pendingSMS) {
        var promises = [];

        _.forOwn(pendingSMS.templates, function (pendingTemplate, smsId) {
            promises.push(sendPendingTemplate(pendingTemplate, smsId));
        });

        _.forOwn(pendingSMS.custom, function (pendingCustom, smsId) {
            promises.push(sendPendingCustom(pendingCustom, smsId));
        });

        if (_.isEmpty(promises)) {
            console.log('No pending SMS were found');
            return [];
        }

        return Promise.all(promises);
    })
    .then(function () {
        console.log('All SMS were sent successfully');
    })
    .catch(function (e) {
        console.log(e.stack);
    })
    .finally(function () {
        process.exit();
    });
