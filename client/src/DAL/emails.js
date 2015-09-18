'use strict';

var _ = require('lodash');
var db = require('./db');

var pendingEmailsRef = db.child('pendingEmails');

module.exports = {
    getAllPendingEmails: function (onSuccess, onError) {
        pendingEmailsRef.once('value', function (snapshot) {
            onSuccess(snapshot.val());
        }, onError);
    },
    sendTemplateEmail: function (template, gameId, onSuccess, onError) {
        var pendingTemplateEmailsRef = pendingEmailsRef.child('templates');
        pendingTemplateEmailsRef.push({template: template, gameId: gameId}, function (error) {
            if (error) {
                return onError();
            }
            onSuccess();
        });
    }
};
