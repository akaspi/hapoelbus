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

var emailTemplatesData = [
    {id: 'gameIsOpenForAll', text: 'פתיחת הרשמה לכולם'},
    {id: 'gameIsOpenForMembers', text: 'פתיחת הרשמה למנויים'},
    {id: 'updateGameDetails', text: 'עדכון שעה ותאריך'},
    {id: 'departureReminder', text: 'תזכורת'}
];

var smsTemplatesData = [
    {id: 'departureReminder', text: 'תזכורת'}
];

function getSubsForGameTemplate(game) {
    return {
        VSID: vsidMap[game.vsid].text,
        DATE: dateUtils.convertDate(game.date),
        DEPARTURE: dateUtils.convertTime(game.departure)
    };
}

var RECIPIENTS_TYPES = {
    'ALL': 'ALL',
    'MEMBERS_ONLY': 'MEMBERS_ONLY',
    'NON_MEMBERS': 'NON_MEMBERS'
};

var DISTRIBUTION_METHODS = {
    'EMAIL': 'EMAIL',
    'SMS': 'SMS'
};

var DISTRIBUTION_TYPE = {
    'TEMPLATE': 'TEMPLATE',
    'CUSTOM': 'CUSTOM'
};

function filterUsersByRecipientsType(recipientsType, users) {
    switch (recipientsType) {
        case RECIPIENTS_TYPES.ALL:
            return users;
        case RECIPIENTS_TYPES.MEMBERS_ONLY:
            return _.omit(users, function (user) {
                return !(user.seasonTicket && user.seasonTicket.maxSeats > 0)
            });
        case RECIPIENTS_TYPES.NON_MEMBERS:
            return _.omit(users, function (user) {
                return user.seasonTicket && user.seasonTicket.maxSeats > 0
            });
    }
}

function getUsersEmails(users) {
    return _.pluck(users, 'info.email');
}

function getUsersPhoneNumbers(users) {
    return ['+972525335402'];
    //return _.map(users, function (user) {
    //    return '+972' + user.info.phone.replace(/-/g, '').slice(1);
    //});
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
    return '<p dir=\'rtl\'>' + content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';
}

var EmailsPage = React.createClass({
    displayName: 'EmailsPage',
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            recipientsType: RECIPIENTS_TYPES.ALL,
            distributionMethod: DISTRIBUTION_METHODS.EMAIL,
            distributionType: DISTRIBUTION_TYPE.TEMPLATE,
            gameId: _.keys(getOpenGames(this.props.gamesData.games))[0],
            templateId: emailTemplatesData[0].id,
            subject: '',
            customContent: ''
        }
    },
    RECIPIENTS_TYPES: RECIPIENTS_TYPES,
    DISTRIBUTION_METHODS: DISTRIBUTION_METHODS,
    DISTRIBUTION_TYPE: DISTRIBUTION_TYPE,
    onDistributionMethodChange: function (e, selected) {
        this.setState({
            distributionMethod: selected,
            templateId: selected === DISTRIBUTION_METHODS.EMAIL ? emailTemplatesData[0].id : smsTemplatesData[0].id
        });
    },
    onRecipientsChange: function (e, selected) {
        this.setState({recipientsType: selected});
    },
    onDistributionTypeChange: function (e, selected) {
        this.setState({distributionType: selected});
    },
    getTemplatesIdsMenuItems: function () {
        return _.map(this.state.distributionMethod === DISTRIBUTION_METHODS.EMAIL ? emailTemplatesData : smsTemplatesData, function (templateData) {
            return {payload: templateData.id, text: templateData.text};
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
                    var recipientsUsers = filterUsersByRecipientsType(this.state.recipientsType, this.props.usersData.users);

                    if (this.state.distributionType == DISTRIBUTION_TYPE.TEMPLATE) {
                        var game = this.props.gamesData.games[this.state.gameId];
                        if (this.state.distributionMethod === DISTRIBUTION_METHODS.MAIL) {
                            distributionAPI.sendTemplateEmail(this.state.templateId, getSubsForGameTemplate(game), getUsersEmails(recipientsUsers));
                        } else {
                            distributionAPI.sendTemplateSMS(this.state.templateId, getSubsForGameTemplate(game), getUsersPhoneNumbers(recipientsUsers));
                        }
                    } else {
                        if (this.state.distributionMethod === DISTRIBUTION_METHODS.MAIL) {
                            distributionAPI.sendCustomEmail(getUsersEmails(recipientsUsers), this.state.subject, prepareCustomMailContentForSend(this.state.customContent));
                        } else {
                            distributionAPI.sendCustomSMS(getUsersPhoneNumbers(recipientsUsers), this.state.customContent);
                        }
                    }
                }.bind(this)
            }
        });
    },
    render: template
});

module.exports = EmailsPage;
