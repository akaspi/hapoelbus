'use strict';

var utils = require('../utils/dbUtils.js');
var mailUtils = require('../utils/mailUtils');
var ref = utils.getFirebaseRef();
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'templates');
var dataSchemas = require('../../common/dataSchemas');
var dateUtils = require('../../common/dateUtils');
var mailTemplatesConstants = require('../../common/mailTemplatesConstants');

function getGameData(gameId, onComplete) {
    ref.child('games').child(gameId).once('value', function(snapshot) {
        onComplete(snapshot.val());
    });
}

function getUsersData(onComplete) {
    ref.child('usersData').once('value', function (snapshot) {
        onComplete(snapshot.val());
    });
}

function getTemplateFilePath(template) {
    var templateName;
    switch (template) {
        case mailTemplatesConstants.GAME_IS_OPEN_FOR_MEMBERS:
            templateName = 'gameIsOpenForMembers';
            break;
        case mailTemplatesConstants.GAME_IS_OPEN_FOR_ALL:
            templateName = 'gameIsOpenForAll';
            break;
        case mailTemplatesConstants.UPDATE_GAME_DETAILS:
            templateName = 'updateGameDetails';
            break;
    }
    return templatesPath + '/' + templateName + '.html';
}

function getTemplateSubject(template) {
    switch (template) {
        case mailTemplatesConstants.GAME_IS_OPEN_FOR_MEMBERS:
            return 'נפתחה הרשמה חדשה למנויים!';
        case mailTemplatesConstants.GAME_IS_OPEN_FOR_ALL:
            return 'נפתחה הרשמה לכל המשתמשים!';
        case mailTemplatesConstants.UPDATE_GAME_DETAILS:
            return 'שימו לב! עודכנו פרטי הסעה!';
    }
}

function getGameTitle(vsid) {
    return _.find(dataSchemas.Game.vsid.options, { value: vsid }).title;
}

function sendTemplateToUsers(templateFileContent, template, gameData, usersData, onSuccess, onError) {
    var to = _.pluck(_.values(usersData), 'email');
    var subject = getTemplateSubject(template);
    var content = templateFileContent
        .replace('VSID', getGameTitle(gameData.vsid))
        .replace('DATE', dateUtils.convertDate(gameData.date))
        .replace('TIME', dateUtils.convertTime(gameData.departure));

    mailUtils.sendMail(to, subject, content, onSuccess, onError);
}

function processPendingTemplate(mailData, onSuccess) {
    var template = mailData.template;
    var gameId = mailData.gameId;
    var templateFileContent = fs.readFileSync(getTemplateFilePath(template)).toString();
    getGameData(gameId, function(gameData) {
        getUsersData(function(usersData) {
            sendTemplateToUsers(templateFileContent, template, gameData, usersData, function() {
                console.log('Template [' + template + '] was successfully sent to ' + _.size(usersData) + ' users');
                onSuccess();
            }, function() {
                console.log('failed to send template [' + template + ']');
            })
        });
    });
}

function listenToPendingTemplates() {
    console.log('listening to pendingEmails/templates:child_added\n');
    var pendingTemplatesRef = ref.child('pendingEmails').child('templates');
    pendingTemplatesRef.on('child_added', function (snapshot) {
        var mailId = snapshot.key();
        var mailData = snapshot.val();
        processPendingTemplate(mailData, function() {
            pendingTemplatesRef.child(mailId).remove();
        });
    });
}

utils.loginAsAdmin(ref, function () {
    listenToPendingTemplates();
}, function () {
    process.exit();
});

