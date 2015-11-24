'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

var EMAIL_TEMPLATES_PATH = path.join(__dirname, 'emailTemplates');
var SMS_TEMPLATES_PATH = path.join(__dirname, 'smsTemplates');

var EMAIL_TEMPLATES_MAP = {
    gameIsOpenForAll: {
        fileName: 'gameIsOpenForAll.html',
        subsKeys: ['VSID', 'DATE', 'DEPARTURE'],
        subject: 'נפתחה הרשמה לכל המשתמשים!'
    },
    gameIsOpenForMembers: {
        fileName: 'gameIsOpenForMembers.html',
        subsKeys: ['VSID', 'DATE', 'DEPARTURE'],
        subject: 'נפתחה הרשמה חדשה למנויים!'
    },
    updateGameDetails: {
        fileName: 'updateGameDetails.html',
        subsKeys: ['VSID', 'DATE', 'DEPARTURE'],
        subject: 'שימו לב! עודכנו פרטי הסעה!'
    },
    departureReminder: {
        fileName: 'departureReminder.html',
        subsKeys: ['VSID', 'DATE', 'DEPARTURE'],
        subject: 'תאריך ושעת יציאה - תזכורת!'
    },
    welcomeMail: {
        fileName: 'welcomeMail.html',
        subsKeys: ['USER'],
        subject: 'ברוכים הבאים ל-מחוץ לחומות!'
    },
    reportAdminsForNewUsers: {
        fileName: 'reportAdminsForNewUsers.html',
        subsKeys: ['NUM_OF_NEW_USERS', 'USERS_AS_STR'],
        subject: 'נוספו משתמשים חדשים באתר!'
    }
};

var SMS_TEMPLATES_MAP = {
    departureReminder: {
        fileName: 'departureReminder.txt',
        subsKeys: ['VSID', 'DEPARTURE']
    }
};

function readFile(path) {
    return fs.readFileSync(path).toString();
}

function replaceSubs(subsKeys, str, subs) {
    return _.reduce(subsKeys, function(accum, subKey) {
        if (!_.isUndefined(subs[subKey])) {
            return accum.replace(subKey, subs[subKey]);
        }
        return accum;
    }, str);
}

function getEmailContent(templateId, subs) {
    var templateData = EMAIL_TEMPLATES_MAP[templateId];
    var templateContent = readFile(EMAIL_TEMPLATES_PATH + '/' + templateData.fileName);
    return replaceSubs(templateData.subsKeys || [], templateContent, subs);
}

function getSMSContent(templateId, subs) {
    var templateData = SMS_TEMPLATES_MAP[templateId];
    var templateContent = readFile(SMS_TEMPLATES_PATH + '/' + templateData.fileName);
    return replaceSubs(templateData.subsKeys || [], templateContent, subs);
}

function getEmailSubject(templateId) {
    return EMAIL_TEMPLATES_MAP[templateId].subject;
}

module.exports = {
    getEmailContent: getEmailContent,
    getEmailSubject: getEmailSubject,
    getSMSContent: getSMSContent
};

