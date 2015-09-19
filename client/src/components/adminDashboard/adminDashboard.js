'use strict';

var React = require('react/addons');
var template = require('./adminDashboard.rt.js');
var muiMixin = require('../mixins/mui-mixin');

var gamesStore = require('../../stores/gamesStore');
var gamesActions = require('../../actions/gamesActions');

var AdminDashboard = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        var gamesState = gamesStore.getAll();
        return {
            isGamesStorePending: gamesState.pending,
            games: gamesState.games
        };
    },
    componentDidMount: function() {
        gamesStore.registerToChange(this.onGamesStoreDataChanged);
        gamesActions.fetchGames();
    },
    onGamesStoreDataChanged: function(gamesStoreData) {
        if (gamesStoreData.pending) {
            this.setState({ isGamesStorePending: true });
        } else {
            this.setState({
                games: gamesStoreData.games,
                isGamesStorePending: false
            });
        }
    },
    componentWillUnmount: function() {
        gamesStore.removeChangeListener(this.onGamesStoreDataChanged);
    },
    render: template
});

module.exports = AdminDashboard;
