'use strict';

var React = require('react/addons');

var template = require('./gamesExplorer.rt');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var gamesActions = require('../../../actions/gamesActions');

var dataSchemas = require('../../../../../common/dataSchemas');

var GamesExplorer = React.createClass({
    getTableSchema: function() {
        return dataSchemas.Game;
    },
    getTableData: function() {
        return this.props.games;
    },
    onCreateGame: function(gameData) {
        gamesActions.updateGame(null, gameData);
    },
    onUpdateGame: function(gameId, gameData) {
        gamesActions.updateGame(gameId, gameData);
    },
    onRemoveGame: function(gameId) {
        gamesActions.removeGame(gameId);
    },
    render: template
});

module.exports = GamesExplorer;
