'use strict';

var db = require('./db');

var EMAIL_TEMPLATES_PATH = 'pendingEmails/templates';
var SMS_TEMPLATES_PATH = 'pendingSMS/templates';
var EMAIL_CUSTOM_PATH = 'pendingEmails/custom';
var SMS_CUSTOM_PATH = 'pendingSMS/custom';

function sendTemplateEmail(templateId, subs, to) {
    return db.push(EMAIL_TEMPLATES_PATH, {
        templateId: templateId,
        subs: subs,
        to: to
    });
}

function sendTemplateSMS(templateId, subs, to) {
    return db.push(SMS_TEMPLATES_PATH, {
        templateId: templateId,
        subs: subs,
        to: to
    });
}

function sendCustomEmail(to, subject, content) {
    return db.push(EMAIL_CUSTOM_PATH, {
        to: to,
        content: content,
        subject: subject
    });
}

function sendCustomSMS(to, content) {
    return db.push(SMS_CUSTOM_PATH, {
        to: to,
        content: content
    });
}

module.exports = {
    sendTemplateEmail: sendTemplateEmail,
    sendTemplateSMS: sendTemplateSMS,
    sendCustomEmail: sendCustomEmail,
    sendCustomSMS: sendCustomSMS
};
