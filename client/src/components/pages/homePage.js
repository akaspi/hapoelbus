'use strict';

var React = require('react');
var template = require('./homePage.rt');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');
var vsidMap = require('json!../../utils/vsidMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

function getOpenStatus() {
    return _.without(_.keys(gameStatusMap), 'CLOSED');
}

function getAllOpenGames(games) {
    return _.omit(games, function (game) {
        return _.contains(game.status, getOpenStatus())
    });
}

function getBooking(uid, gameId, bookings) {
    if (!bookings || !bookings[uid] || !bookings[uid][gameId]) {
        return {};
    }
    return bookings[uid][gameId];
}

var HomePage = React.createClass({
    render: template,
    getInitialState: function() {
      return {
          editBookingDialogProps: null
      }
    },
    getOpenGamesCardData: function () {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        return _.map(openGameIds, function (gameId) {
            var game = this.props.gamesData.games[gameId];
            var cardData = {
                title: vsidMap[game.vsid],
                subtitles: [dateUtils.convertDate(game.date), dateUtils.convertTime(game.departure)]
            };
            var isBooked = !_.isEmpty(getBooking(this.props.uid, gameId, this.props.bookingsData.bookings));
            if (isBooked) {
                cardData.ribbon = {label: 'רשום', color: 'Green'};
            }
            return cardData;

        }, this);
    },
    getCustomActions: function(index) {
        return [
            {label: 'הרשם', onClick: this.updateBooking.bind(this, index) },
            {label: 'בטל', onClick: this.cancelBooking.bind(this, index) }
        ];
    },
    updateBooking: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        this.setState({
            editBookingDialogProps: {
                uid: this.props.uid,
                gameId: gameId,
                booking: getBooking(this.props.uid, gameId, this.props.bookingsData.bookings)
            }
        }, function() {
            this.refs.dialog.showDialog();
        })

    },
    cancelBooking: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {uid: this.props.uid, gameId: gameId});
    }
});

module.exports = HomePage;
