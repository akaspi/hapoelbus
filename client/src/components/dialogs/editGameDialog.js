'use strict';

var React = require('react');
var template = require('./editGameDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

var vsidMap = require('json!../../utils/vsidMap.json');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var EditGameDialog = React.createClass({
    displayName: 'EditGameDialog',
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.cloneDeep(this.props.data.gameData);
    },
    getVSIDMenuItems: function() {
        return _.map(vsidMap, function(val, key) {
           return { payload: key, text: val };
        });
    },
    getStatusMenuItems: function() {
        return _.map(gameStatusMap, function(val, key) {
            return { payload: key, text: val };
        });
    },
    onDateChange: function(nill, newDate) {
        var newUtcDate = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes());
        this.setState({date: newUtcDate});
    },
    onTimeChange: function(nill, newDate) {
        var newUtcDate = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes());
        this.setState({departure: newUtcDate});
    },
    updateGame: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_GAME, {
            gameId: this.props.data.gameId,
            gameData: this.state
        });
    },

    render: template
});

module.exports = EditGameDialog;
