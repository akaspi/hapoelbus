'use strict';

var React = require('react');
var template = require('./editGameDialog.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var vsidMap = require('json!../../utils/vsidMap.json');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var EditGameDialog = React.createClass({
    displayName: 'EditGameDialog',
    propTypes: {
        game: React.PropTypes.object.isRequired,
        gameId: React.PropTypes.string,
        error: React.PropTypes.bool
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            game: _.clone(this.props.game)
        };
    },
    getVSIDMenuItems: function () {
        return _.map(vsidMap, function (val, key) {
            return {payload: key, text: val.text};
        });
    },
    getStatusMenuItems: function () {
        return _.map(gameStatusMap, function (val, key) {
            return {payload: key, text: val};
        });
    },
    onDateChange: function (nill, newDate) {
        var newUtcDate = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes());
        var newGameState = _.merge(this.state.game, {date: newUtcDate});
        this.setState({game: newGameState});
    },
    onTimeChange: function (nill, newDate) {
        var newUtcDate = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes());
        var newGameState = _.merge(this.state.game, {departure: newUtcDate});
        this.setState({game: newGameState});
    },
    updateGame: function () {
        if (this.props.gameId) {
            actionsCreator.createAction(actionsConstants.UPDATE_GAME, {
                gameId: this.props.gameId,
                gameData: this.state.game
            });
        } else {
            actionsCreator.createAction(actionsConstants.CREATE_GAME, {
                gameData: this.state.game
            });
        }
    },

    render: template
});

module.exports = EditGameDialog;
