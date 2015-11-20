'use strict';

var React = require('react');
var template = require('./distributionPage.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var vsidMap = require('json!../../utils/vsidMap.json');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var areYouSureDialog = require('../dialogs/areYouSureDialog');

var distributionAPI = require('../../API/distributionAPI');

var templatesMap = {
    BOOKING_OPEN_FOR_MEMBERS: 'פתיחת הרשמה למנויים',
    BOOKING_OPEN_FOR_ALL: 'פתיחת הרשמה לכולם',
    TIME_OR_DATA_CHANGED: 'עדכון שעה ותאריך',
    TIME_AND_DATE_NOTIFICATION: 'תזכורת'
};

function getSubsForGameTemplate(game) {
    return {
        vsid: vsidMap[game.vsid].text,
        date: dateUtils.convertDate(game.date),
        departure: dateUtils.convertTime(game.departure)
    };
}

function filterRecipients(recipients, users, path) {
    switch (recipients) {
        case 'recipients-all':
            return _.pluck(users, path);
        case 'recipients-members':
            return _(users)
                .omit(function (user) {
                    return !(user.seasonTicket && user.seasonTicket.maxSeats > 0)
                })
                .values()
                .pluck(path)
                .value();
        case 'recipients-not-members':
            return _(users)
                .omit(function (user) {
                    return user.seasonTicket && user.seasonTicket.maxSeats > 0
                })
                .values()
                .pluck(path)
                .value();
    }
}

function getOpenGames(games) {
    return _.omit(games, function (game) {
        return !(isGameOpenForMembersOnly(game) || isGameOpenForAll(game));
    });
}

function isGameOpenForMembersOnly(game) {
    return gameStatusMap[game.status] === gameStatusMap.OPEN_FOR_MEMBERS;
}

function isGameOpenForAll(game) {
    return gameStatusMap[game.status] === gameStatusMap.OPEN_FOR_ALL;
}

function prepareCustomMailContentForSend(content) {
    return '<p dir=\'rtl\'>' +  content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';
}

var EmailsPage = React.createClass({
    displayName: 'EmailsPage',
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            recipients: 'recipients-all',
            distributionMethod: 'email',
            distributionType: 'template',
            gameId: _.keys(getOpenGames(this.props.gamesData.games))[0],
            templateId: _.keys(templatesMap)[0],
            subject: '',
            customContent: ''
        }
    },
    onDistributionMethodChange: function (e, selected) {
        this.setState({distributionMethod: selected});
    },
    onRecipientsChange: function (e, selected) {
        this.setState({recipients: selected});
    },
    onDistributionTypeChange: function (e, selected) {
        this.setState({distributionType: selected});
    },
    getTemplatesIdsMenuItems: function () {
        return _.map(templatesMap, function (val, templateId) {
            return {payload: templateId, text: val};
        })
    },
    getOpenGamesMenuItems: function () {
        return _.map(getOpenGames(this.props.gamesData.games), function (game, gameId) {
            return {payload: gameId, text: vsidMap[game.vsid].text};
        });
    },
    send: function () {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח?',
                onConfirm: function () {
                    var recipients = filterRecipients(this.state.recipients, this.props.usersData.users, this.state.distributionMethod === 'email' ? 'info.email' : 'info.phone');
                    var game = this.props.gamesData.games[this.state.gameId];
                    if (this.state.distributionMethod === 'email') {
                        if (this.state.distributionType === 'template') {
                            distributionAPI.sendTemplateEmail(this.state.templateId, getSubsForGameTemplate(game), recipients);
                        } else {
                            distributionAPI.sendCustomEmail(recipients, this.state.subject, prepareCustomMailContentForSend(this.state.customContent));
                        }
                    } else {
                        if (this.state.distributionType === 'template') {
                            distributionAPI.sendTemplateSMS(this.state.templateId, getSubsForGameTemplate(game), recipients);
                        } else {
                            distributionAPI.sendCustomSMS(recipients, this.state.customContent);
                        }
                    }
                }.bind(this)
            }
        });
    },
    render: template
});

module.exports = EmailsPage;
