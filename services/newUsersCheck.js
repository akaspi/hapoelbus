'use strict';

var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var _ = require('lodash');

var ADMINS_PATH = 'admins';
var USERS_DATA_PATH = 'usersInfo';
var WELCOME_MAILS_PATH = 'welcomeMail';
var PENDING_MAILS_PATH = 'pendingEmails/templates';

function sendWelcomeMail(uid, userInfo) {
    return dbUtils.push(PENDING_MAILS_PATH, {
            templateId: 'welcomeMail',
            to: [userInfo.email],
            subs: {USER: userInfo.displayName}
        })
        .then(function () {
            return dbUtils.set(WELCOME_MAILS_PATH + '/' + uid, true);
        })
        .then(function () {
            console.log('Welcome email was added to pending mails for ' + userInfo.email);
        })
        .catch(function () {
            console.log('Failed to add welcome mail to pending mails for ' + userInfo.email);
        })
}

function sendWelcomeMails(newUsersInfo) {
    var promises = _.map(newUsersInfo, function (userInfo, uid) {
        return sendWelcomeMail(uid, userInfo);
    });
    return Promise.all(promises);
}

function reportAdminsForNewUsers(newUsersInfo, adminsInfo) {
    var adminsEmails = _.pluck(adminsInfo, 'email');
    var usersDisplayNames = _.pluck(newUsersInfo, 'displayName');
    return dbUtils.push(PENDING_MAILS_PATH, {
        templateId: 'reportAdminsForNewUsers',
        to: adminsEmails,
        subs: {
            NUM_OF_NEW_USERS: usersDisplayNames.length,
            USERS_AS_STR: usersDisplayNames.join(', ')
        }
    });
}

dbUtils.loginAsAdmin()
    .then(function () {
        return [dbUtils.read(USERS_DATA_PATH), dbUtils.read(WELCOME_MAILS_PATH), dbUtils.read(ADMINS_PATH)]
    })
    .spread(function (usersInfo, emails, admins) {
        var UIDs = _.keys(usersInfo);
        var uidsThatReceivedWelcomeMail = _.keys(emails);
        var newUIDs = _.xor(UIDs, uidsThatReceivedWelcomeMail);

        var newUsersInfo = _.pick(usersInfo, newUIDs);
        var adminsInfo = _.pick(usersInfo, _.keys(admins));

        return [newUsersInfo, adminsInfo];
    })
    .spread(function (newUsersInfo, adminsInfo) {
        if (_.isEmpty(newUsersInfo)) {
            console.log('No new users detected...');
            return [];
        }
        return [sendWelcomeMails(newUsersInfo), reportAdminsForNewUsers(newUsersInfo, adminsInfo)];
    })
    .spread(function () {
        process.exit();
    });
