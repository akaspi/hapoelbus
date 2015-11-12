'use strict';

var React = require('react');
var template = require('./emailsPage.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var vsidMap = require('json!../../utils/vsidMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var emailsAPI = require('../../API/emailsAPI');

var templatesMap = {
    BOOKING_OPEN_FOR_MEMBERS: 'פתיחת הרשמה למנויים',
    BOOKING_OPEN_FOR_ALL: 'פתיחת הרשמה לכולם',
    TIME_OR_DATA_CHANGED: 'עדכון שעה ותאריך',
    TIME_AND_DATE_NOTIFICATION: 'תזכורת'
};

function filterRecipients(recipients, users) {
    switch (recipients) {
        case 'recipients-all':
            return _.pluck(users, 'info.email');
        case 'recipients-members':
            return _(users)
                .omit(function(user) {
                    return !(user.seasonTicket && user.seasonTicket.maxSeats > 0)
                })
                .values()
                .pluck('info.email')
                .value();
        case 'recipients-not-members':
            return _(users)
                .omit(function(user) {
                    return user.seasonTicket && user.seasonTicket.maxSeats > 0
                })
                .values()
                .pluck('info.email')
                .value();
    }
}

var EmailsPage = React.createClass({
    displayName: 'EmailsPage',
    mixins: [deepLinkStateMixin],
    getInitialState: function() {
      return {
          recipients: 'recipients-all',
          emailType: 'template',
          gameId: _.keys(this.props.gamesData.games)[0],
          templateId: _.keys(templatesMap)[0],
          subject: '',
          customContent: ''
      }
    },
    onRecipientsChange: function(e, selected) {
        this.setState({recipients: selected});
    },
    onEmailTypeChange: function(e, selected) {
        this.setState({emailType: selected});
    },
    getTemplatesIdsMenuItems: function() {
        return _.map(templatesMap, function(val, templateId) {
            return {payload: templateId, text: val};
        })
    },
    getOpenGamesMenuItems: function() {
      return _.map(this.props.gamesData.games, function(game, gameId) {
         return {payload: gameId, text: vsidMap[game.vsid]};
      });
    },
    send: function() {
        var recipients = filterRecipients(this.state.recipients, this.props.usersData.users)
        if (this.state.emailType === 'template') {
            emailsAPI.sendTemplate(this.state.templateId, {a: 1}, recipients);
        } else {
            emailsAPI.sendCustom(recipients, '', this.state.customContent);
        }
    },
    render: template
});

module.exports = EmailsPage;
