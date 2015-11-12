'use strict';

var db = require('./db');

function sendTemplate(templateId, subs, to) {
    return db.push('pendingEmails/templates', {
        templateId: templateId,
        subs: subs,
        to: to
    });
}

function sendCustom(to, subject, content) {
    return db.push('pendingEmails/templates', {
        to: to,
        content: content,
        subject: subject
    });
}

module.exports = {
    sendTemplate: sendTemplate,
    sendCustom: sendCustom
};
