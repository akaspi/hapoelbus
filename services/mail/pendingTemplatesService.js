'use strict';

var utils = require('../utils.js');
var mailUtils = require('../utils/mailUtils');
var ref = utils.getFirebaseRef();
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var templatesPath = path.join(__dirname, 'templates');
var dataSchemas = require('../../common/dataSchemas');
var dateUtils = require('../../common/dateUtils');

var templatesFileNameMap = {
    GAME_IS_OPEN_FOR_MEMBERS: 'gameIsOpenForMembers',
    GAME_IS_OPEN_FOR_ALL: 'gameIsOpenForAll',
    UPDATE_GAME_DETAILS: 'updateGameDetails'
};

var subjectsMap = {
    GAME_IS_OPEN_FOR_MEMBERS: 'נפתחה הרשמה חדשה למנויים!',
    GAME_IS_OPEN_FOR_ALL: 'נפתחה הרשמה לכל המשתמשים!',
    UPDATE_GAME_DETAILS: 'שימו לב! עודכנו פרטי הסעה!'
};

function getGameData(gameId, onComplete) {
    ref.child('games').child(gameId).once('value', function(snapshot) {
        onComplete(snapshot.val());
    });
}

function getGameTitle(vsid) {
    return _.find(dataSchemas.Game.vsid.options, { value: vsid }).title;
}

function sendPendingTemplate(mailData, onSuccess) {
    var template = fs.readFileSync(templatesPath + '/' + templatesFileNameMap[mailData.template] + '.html').toString();
    getGameData(mailData.gameId, function(gameData) {
        mailUtils.getAllUsersEmails(ref, function(allEmails) {
            var to = ['kaspi.amit@gmail.com'];//allEmails;
            var subject = subjectsMap[mailData.template];
            var content = template
                .replace('VSID', getGameTitle(gameData.vsid))
                .replace('DATE', dateUtils.convertDate(gameData.date))
                .replace('TIME', dateUtils.convertTime(gameData.departure));

            mailUtils.sendMail(to, subject, content, function () {
                console.log('template [' + mailData.template + '] was sent successfully!');
                onSuccess();
            }, function () {
                console.log('failed to send email to ' + to);
            });
        })
    });
}

function listenToPendingTemplates() {
    console.log('listening to pendingEmails/templates:child_added\n');
    var pendingTemplatesRef = ref.child('pendingEmails').child('templates');
    pendingTemplatesRef.on('child_added', function (snapshot) {
        var mailId = snapshot.key();
        var mailData = snapshot.val();
        sendPendingTemplate(mailData, function() {
            pendingTemplatesRef.child(mailId).remove();
        });
    });
}

utils.loginAsAdmin(ref, function () {
    listenToPendingTemplates();
}, function () {
    process.exit();
});

