'use strict';

var Promise = require('bluebird');
var dbUtils = require('./dbUtils');
var _ = require('lodash');

var USERS_DATA_PATH = 'usersData';
var EMAILS_PATH = 'emails';
var PENDING_MAILS_PATH = 'pendingMails';

function reportAdminsForNewUsers(newUIDs, usersData) {
    return new Promise(function(resolve, reject) {
        dbUtils.read('admins')
            .then(function(admins) {
               var adminsEmails = _.map(admins, function(val, uid) {
                  return usersData[uid].email;
               });
                var numOfNewUsers = _.size(newUIDs);
                var newUsersDisplayStr = _.map(newUIDs, function(uid) { return usersData[uid].displayName }).join(', ');
                var pendingRequest = { templateId: 'reportAdminsForNewUsers', to: adminsEmails, substitutions: { NUM_OF_NEW_USERS: numOfNewUsers, USERS_AS_STR: newUsersDisplayStr } };
                dbUtils.push(PENDING_MAILS_PATH, pendingRequest)
                    .then(resolve)
                    .catch(reject)
            });

    });
}

function addWelcomeMailForNewUser(uid, userData) {
    return new Promise(function(resolve, reject) {
        var pendingRequest = { templateId: 'welcomeMail', to: userData.email, substitutions: { USER: userData.displayName } };
        dbUtils.push(PENDING_MAILS_PATH, pendingRequest)
            .then(function() {
               return dbUtils.update(EMAILS_PATH + '/' + uid, { welcome: true });
            })
            .then(function() {
                resolve(uid);
            })
            .catch(function() {
                reject()
            })
    });
}

function checkForNewUsers() {
    dbUtils.loginAsAdmin()
        .then(function () {
            return [ dbUtils.read(USERS_DATA_PATH), dbUtils.read(EMAILS_PATH) ]
        })
        .spread(function (usersData, emails) {
            var allUIDs = _.keys(usersData);
            var uidsThatReceivedWelcomeMail = _.keys(emails);
            var newUIDs = _.xor(allUIDs, uidsThatReceivedWelcomeMail);

            return [ newUIDs, usersData ];
        })
        .spread(function(newUIDs, usersData) {
            var promises = _.map(newUIDs, function(uid) {
                return addWelcomeMailForNewUser(uid, usersData[uid]);
            });

            if (_.size(newUIDs) > 0) {
                promises.push(reportAdminsForNewUsers(newUIDs, usersData));
            }

            return Promise.settle(promises)
        })
        .then(function(inspections) {
            _.forEach(inspections, function(inspection) {
                if (inspection.isFulfilled()) {
                    var uid = inspection.value();
                    console.log('Welcome email was added to pending mails for ' + uid);
                } else if (inspection.isRejected()) {
                    console.log('Failed to add welcome mail to pending mails. Reason: ' + inspection.reason());
                }
            });
        })
        .catch(function(e) {
            console.log('oh no... something went wrong :(');
            console.log(e);
        })
        .finally(function() {
            process.exit();
        })
}

checkForNewUsers();
