'use strict';

var React = require('react');
var template = require('./gamesPage.rt');
var vsidMap = require('json!../../utils/vsidMap.json');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editGameDialog = require('../dialogs/editGameDialog');
var areYouSureDialog = require('../dialogs/areYouSureDialog');

var GamesPage = React.createClass({
    displayName: 'GamesPage',
    getGameCardProps: function(gameId, game) {
        return {
            title: vsidMap[game.vsid].text,
            subtitles: [dateUtils.convertDate(game.date), dateUtils.convertTime(game.departure), gameStatusMap[game.status]],
            imageUrl: vsidMap[game.vsid].img,
            actions: [
                {label: 'ערוך', icon: 'mode_edit', onClick: this.onEditGame.bind(this, gameId, game)},
                {label: 'מחק', icon: 'delete', onClick: this.onRemoveGame.bind(this, gameId)}
            ]
        }
    },
    onCreateGame: function () {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editGameDialog,
            props: {}
        });
    },
    onEditGame: function (gameId, game) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editGameDialog,
            props: {gameId: gameId, game: game}
        });
    },
    onRemoveGame: function (gameId) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את המשחק?',
                onConfirm: function() {
                    actionsCreator.createAction(actionsConstants.REMOVE_GAME, {gameId: gameId});
                }
            }
        });
    },
    render: template
});

module.exports = GamesPage;
