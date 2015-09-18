'use strict';

var React = require('react/addons');

var template = require('./gamesExplorer.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var gamesStore = require('../../../stores/gamesStore');
var gamesActions = require('../../../actions/gamesActions');

var dataConverterUtil = require('../../../utils/dataConverterUtil');
var dataSchemas = require('../../../utils/dataSchemas');

var GamesExplorer = React.createClass({
    mixins: [],
    getInitialState: function () {
        var gamesState = gamesStore.getAll();
        return {
            isGamesStorePending: gamesState.pending,
            games: gamesState.games
        };
    },
    componentDidMount: function() {
        gamesStore.registerToChange(this.onUsersDataStoreDataChanged);
        gamesActions.fetchGames();
    },
    componentWillUnmount: function() {
        gamesStore.removeChangeListener(this.onUsersDataStoreDataChanged);
    },
    onUsersDataStoreDataChanged: function(gamesStoreData) {
        if (gamesStoreData.pending) {
            this.setState({ isGamesStorePending: true });
        } else {
            this.setState({
                games: gamesStoreData.games,
                isGamesStorePending: false
            });
        }
    },
    getTableSchema: function() {
        return dataSchemas.Game;
    },
    getTableData: function() {
        return this.state.games;
    },
    onCreateGame: function(gameData) {
        gamesActions.updateGame(null, gameData);
    },
    onUpdateGame: function(gameId, gameData) {
        gamesActions.updateGame(gameId, gameData);
    },
    onRemoveGame: function(gameId) {
        console.log('remove game');
    },
    render: template
});

module.exports = GamesExplorer;
