'use strict';

var React = require('react');
var template = require('./homePage.rt');
var gameStatusMap = require('json!../../utils/gameStatusMap.json');
var vsidMap = require('json!../../utils/vsidMap.json');
var dateUtils = require('../../utils/dateUtils');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editBookingDialog = require('../dialogs/editBookingDialog');

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

function isGameFullyBooked(bookings, game, gameId) {
    var occupiedSeats =  _(bookings)
        .pluck(gameId + '.numOfSeats')
        .compact()
        .sum();

    return occupiedSeats >= game.capacity;
}

function getGameStatusLabel(bookings, game, gameId) {
    if (isGameFullyBooked(bookings, game, gameId)) {
        return 'הסעה מלאה';
    }
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
                title: vsidMap[game.vsid].text,
                subtitles: [
                    dateUtils.convertDate(game.date),
                    dateUtils.convertTime(game.departure),
                    getGameStatusLabel(this.props.bookingsData.bookings, game, gameId)
                ],
                imageUrl: vsidMap[game.vsid].img
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
        var isFullyBooked = isGameFullyBooked(this.props.bookingsData.bookings, game, gameId);
        var isBooked = !_.isEmpty(getBooking(uid, gameId, this.props.bookingsData.bookings));

        if (isFullyBooked) {
            if (isBooked) {
                return [
                    {label: 'בטל', icon: 'cancel', onClick: this.cancelBooking.bind(this, index) }
                ];
            }
            return [];
        }

        if (gameIsOpenForMembersOnly) {
            if (!isPaidUser) {
                return [];
            }
            if (isBooked) {
                return [
                    {label: 'ערוך', icon: 'mode_edit', onClick: this.updateBooking.bind(this, index) },
                    {label: 'בטל', icon: 'cancel', onClick: this.cancelBooking.bind(this, index) }
                ];
            }
            return [
                {label: 'הרשם', icon: 'event_available', onClick: this.updateBooking.bind(this, index) }
            ];
        }

        if (gameIsOpenForAll) {
            if (isBooked) {
                return [
                    {label: 'ערוך', icon: 'mode_edit', onClick: this.updateBooking.bind(this, index) },
                    {label: 'בטל', icon: 'cancel', onClick: this.cancelBooking.bind(this, index) }
                ];
            }
            return [
                {label: 'הרשם', icon: 'event_available', onClick: this.updateBooking.bind(this, index) }
            ];
        }
    },
    updateBooking: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editBookingDialog,
            props: {
                uid: this.props.uid,
                user: this.props.usersData.users[this.props.uid],
                gameId: gameId,
                booking: getBooking(this.props.uid, gameId, this.props.bookingsData.bookings)
            }
        });
    },
    cancelBooking: function(index) {
        var openGameIds = _.keys(getAllOpenGames(this.props.gamesData.games));
        var gameId = openGameIds[index];
        actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {uid: this.props.uid, gameId: gameId});
    },
    render: template
});

module.exports = HomePage;