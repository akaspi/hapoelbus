'use strict';

var React = require('react/addons');

var template = require('./emailsSection.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var emailsStore = require('../../../stores/emailsStore');
var emailsActions = require('../../../actions/emailsActions');

var mailTemplatesConstants = require('../../../../../common/mailTemplatesConstants');

var dataSchemas = require('../../../../../common/dataSchemas');
var dateUtils = require('../../../../../common/dateUtils');

var GamesExplorer = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        var emailsState = emailsStore.getAll();
        return {
            isEmailsStorePending: emailsState.pending,
            errMsg: emailsState.errMsg,
            template: null,
            gameId: null
        };
    },
    componentDidMount: function () {
        emailsStore.registerToChange(this.onBookingStoreDataChanged);
    },
    onBookingStoreDataChanged: function (emailsStoreData) {
        if (emailsStoreData.pending) {
            this.setState({isEmailsStorePending: true});
        } else {
            this.setState({errMsg: emailsStoreData.errMsg, isEmailsStorePending: false})
        }
    },
    componentWillUnmount: function () {
        emailsStore.removeChangeListener(this.onBookingStoreDataChanged);
    },
    buildTemplatesOptions: function() {
        return [
            { value: mailTemplatesConstants.GAME_IS_OPEN_FOR_MEMBERS, title: 'פתיחת משחק למנויים' },
            { value: mailTemplatesConstants.GAME_IS_OPEN_FOR_ALL, title: 'פתיחת משחק לכולם' },
            { value: mailTemplatesConstants.UPDATE_GAME_DETAILS, title: 'עדכון נתוני משחק' }
        ];
    },
    getGamesOptions: function () {
        var gameVSIDOptions = dataSchemas.Game.vsid.options;
        return _.reduce(this.props.games, function (accum, game, gameId) {
            var VSIDTitle = _.find(gameVSIDOptions, { value: game.vsid }).title;
            accum.push({
                title: VSIDTitle + ' - ' + dateUtils.convertDate(game.date),
                value: gameId
            });
            return accum;
        }, [], this);
    },
    sendEmail: function () {
        emailsActions.sendTemplateEmail(this.state.template, this.state.gameId);
        this.setState({template: null, gameId: null});
    },
    openSendMailDialog: function() {
        this.refs.sendEmailDialog.show();
    },
    getSendEmailDialogActions: function () {
        return [
            {
                text: 'שלח',
                onTouchTap: function () {
                    this.sendEmail();
                    this.refs.sendEmailDialog.dismiss();
                }.bind(this)
            },
            {
                text: 'בטל',
                onTouchTap: function () {
                    this.refs.sendEmailDialog.dismiss();
                }.bind(this)
            }
        ]
    },
    render: template
});

module.exports = GamesExplorer;
