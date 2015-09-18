'use strict';

var React = require('react/addons');

var template = require('./emailsSection.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var emailsStore = require('../../../stores/emailsStore');
var emailsActions = require('../../../actions/emailsActions');
var gamesActions = require('../../../actions/gamesActions');

var gamesStore = require('../../../stores/gamesStore');

var emailsConstants = require('../../../constants/emailsConstants');

var dataSchemas = require('../../../utils/dataSchemas');

var GamesExplorer = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        var emailsState = emailsStore.getAll();
        var gamesState = gamesStore.getAll();
        return {
            isEmailsStorePending: emailsState.pending,
            isGamesStorePending: gamesState.pending,
            games: gamesState.games,
            errMsg: emailsState.errMsg,
            template: null,
            gameId: null
        };
    },
    componentDidMount: function () {
        emailsStore.registerToChange(this.onEmailsStoreDataChanged);
        gamesStore.registerToChange(this.onGamesDataStoreDataChanged);
        gamesActions.fetchGames();
    },
    onEmailsStoreDataChanged: function (emailsStoreData) {
        if (emailsStoreData.pending) {
            this.setState({isEmailsStorePending: true});
        } else {
            this.setState({errMsg: emailsStoreData.errMsg, isEmailsStorePending: false})
        }
    },
    onGamesDataStoreDataChanged: function (gamesStoreData) {
        if (gamesStoreData.pending) {
            this.setState({isGamesStorePending: true});
        } else {
            this.setState({
                games: gamesStoreData.games,
                isGamesStorePending: false
            });
        }
    },
    componentWillUnmount: function () {
        emailsStore.removeChangeListener(this.onEmailsStoreDataChanged);
        gamesStore.removeChangeListener(this.onGamesDataStoreDataChanged);
    },
    buildTemplatesOptions: function() {
        return [
            { value: emailsConstants.TEMPLATES.GAME_IS_OPEN_FOR_MEMBERS, title: 'פתיחת משחק למנויים' },
            { value: emailsConstants.TEMPLATES.GAME_IS_OPEN_FOR_ALL, title: 'פתיחת משחק לכולם' },
            { value: emailsConstants.TEMPLATES.UPDATE_GAME_DETAILS, title: 'עדכון נתוני משחק' }
        ];
    },
    getGamesOptions: function () {
        var visdOptions = dataSchemas.Game.vsid.options;
        var resp = _.reduce(this.state.games, function (accum, val, key) {
            accum.push({
                title: _.find(visdOptions, {value: val.vsid}).title,
                value: key
            });
            return accum;
        }, [], this);

        return resp;
    },
    sendEmail: function () {
        emailsActions.sendTemplateEmail(this.state.template, this.state.gameId);
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
