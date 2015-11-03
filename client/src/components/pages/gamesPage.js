'use strict';

var React = require('react');
var template = require('./gamesPage.rt');
var vsidMap = require('json!../../utils/vsidMap.json');
var dateUtils = require('../../utils/dateUtils');

function getRibbonData(game) {
    switch (game.status) {
        case 'OPEN_FOR_MEMBERS':
            return { label: 'פתוח למנויים', color: 'Blue' };
        case 'OPEN_FOR_ALL':
            return { label: 'פתוח לכולם', color: 'Green' };
    }
}

var GamesPage = React.createClass({
    getFilteredUIDs: function () {
        console.log(vsidMap);
        var gameIds = _.keys(this.props.games);
        return gameIds;
    },
    getCardDisplayerData: function () {
        var gameIds = this.getFilteredUIDs();
        return _.map(gameIds, function (gameId) {
            var game = this.props.games[gameId];
            return {
                title: vsidMap[game.vsid],
                subtitles: [dateUtils.convertDate(game.date), dateUtils.convertTime(game.departure)],
                ribbon: getRibbonData(game)
            }
        }, this);
    },
    onCreateGame: function () {
    },
    onEditGame: function () {
    },
    onRemoveGame: function () {
    },
    render: template
});

module.exports = GamesPage;
