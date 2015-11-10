'use strict';

var React = require('react');
var template = require('./homePage.rt');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');
var vsidMap = require('json!../../utils/vsidMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');


function getAllOpenGames(games) {
    return _.omit(games, function (game) {
        return !(isGameOpenForMembersOnly(game) || isGameOpenForAll(game));
    });
}

function getBooking(uid, gameId, bookings) {
    if (!bookings || !bookings[uid] || !bookings[uid][gameId]) {
        return {};
    }
    return bookings[uid][gameId];
}

function isGameOpenForAll(game) {
    return gameStatusMap[game.status] === gameStatusMap.OPEN_FOR_ALL;
}

function isGameOpenForMembersOnly(game) {
    return gameStatusMap[game.status] === gameStatusMap.OPEN_FOR_MEMBERS;
}

function isUserPaid(uid, users) {
    var user = users[uid];
    return !!user.seasonTicket && user.seasonTicket.maxSeats > 0;
}

function getGameStatusLabel(game) {
    return 'סטאטוס: ' + gameStatusMap[game.status];
}


var HomePage = React.createClass({
    displayName: 'HomePage',
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
                subtitles: [dateUtils.convertDate(game.date), dateUtils.convertTime(game.departure), getGameStatusLabel(game)]
            };
            var isBooked = !_.isEmpty(getBooking(this.props.uid, gameId, this.props.bookingsData.bookings));
            if (isBooked) {
                cardData.ribbon = {label: 'רשום', color: 'Green'};
            }
            return cardData;

        }, this);
    },
    getCustomActions: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        var game = this.props.gamesData.games[gameId];
        var uid = this.props.uid;
        var isPaidUser = isUserPaid(uid, this.props.usersData.users);
        var gameIsOpenForMembersOnly = isGameOpenForMembersOnly(game);
        var gameIsOpenForAll = isGameOpenForAll(game);
        var isFullyBooked = false;
        var isBooked = !_.isEmpty(getBooking(uid, gameId, this.props.bookingsData.bookings));

        if (isFullyBooked) {
            if (_.isEmpty(booking)) {
                return [];
            }
            return [
                {label: 'בטל', onClick: this.cancelBooking.bind(this, index) }
            ];
        }

        if (gameIsOpenForMembersOnly) {
            if (!isPaidUser) {
                return [];
            }
            if (isBooked) {
                return [
                    {label: 'ערוך', onClick: this.updateBooking.bind(this, index) },
                    {label: 'בטל', onClick: this.cancelBooking.bind(this, index) }
                ];
            }
            return [
                {label: 'הרשם', onClick: this.updateBooking.bind(this, index) }
            ];
        }

        if (gameIsOpenForAll) {
            if (isBooked) {
                return [
                    {label: 'ערוך', onClick: this.updateBooking.bind(this, index) },
                    {label: 'בטל', onClick: this.cancelBooking.bind(this, index) }
                ];
            }
            return [
                {label: 'הרשם', onClick: this.updateBooking.bind(this, index) }
            ];
        }
    },
    updateBooking: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        this.setState({
            editBookingDialogProps: {
                uid: this.props.uid,
                gameId: gameId,
                user: this.props.usersData.users[this.props.uid],
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
    },
    render: template
});

module.exports = HomePage;
