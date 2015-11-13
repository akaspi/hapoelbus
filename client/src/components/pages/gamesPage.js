'use strict';

var React = require('react');
var template = require('./gamesPage.rt');
var vsidMap = require('json!../../utils/vsidMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editGameDialog = require('../dialogs/editGameDialog');
var areYouSureDialog = require('../dialogs/areYouSureDialog');

function getRibbonData(game) {
    switch (game.status) {
        case 'OPEN_FOR_MEMBERS':
            return {label: 'פתוח למנויים', color: 'Blue'};
        case 'OPEN_FOR_ALL':
            return {label: 'פתוח לכולם', color: 'Green'};
    }
}

var GamesPage = React.createClass({
    displayName: 'GamesPage',
    getFilteredUIDs: function () {
        var gameIds = _.keys(this.props.gamesData.games);
        return gameIds;
    },
    getCardDisplayerData: function () {
        var gameIds = this.getFilteredUIDs();
        return _.map(gameIds, function (gameId) {
            var game = this.props.gamesData.games[gameId];
            return {
                title: vsidMap[game.vsid],
                subtitles: [dateUtils.convertDate(game.date), dateUtils.convertTime(game.departure)],
                ribbon: getRibbonData(game)
            }
        }, this);
    },
    onCreateGame: function () {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editGameDialog,
            props: {game: {}}
        });
    },
    onEditGame: function (index) {
        var gameIds = this.getFilteredUIDs();
        var gameId = gameIds[index];
        var game = this.props.gamesData.games[gameId];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editGameDialog,
            props: {gameId: gameId, game: game}
        });
    },
    onRemoveGame: function (index) {
        var gameIds = this.getFilteredUIDs();
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את המשחק?',
                onConfirm: function() {
                    actionsCreator.createAction(actionsConstants.REMOVE_GAME, {gameId: gameIds[index]});
                }
            }
        });
    },
    render: template
});

module.exports = GamesPage;
