'use strict';

var React = require('react');
var template = require('./bookingsPage.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var vsidMap = require('json!../../utils/vsidMap.json');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editBookingDialog = require('../dialogs/editBookingDialog');
var areYouSureDialog = require('../dialogs/areYouSureDialog');

function getBookingForAGame(allBookings, gameId) {
    return _(allBookings)
        .map(function (bookingsOfAUser, uid) {
            var bookingData = bookingsOfAUser[gameId];
            if (bookingData) {
                return {
                    uid: uid,
                    booking: bookingData
                };
            }
        })
        .compact()
        .value();
}

var BookingPage = React.createClass({
    displayName: 'BookingPage',
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            gameIdFilter: _.keys(this.props.gamesData.games)[0]
        };
    },
    getGamesFilterMenuItems: function () {
        return _.map(this.props.gamesData.games, function (gameData, gameId) {
            return {payload: gameId, text: vsidMap[gameData.vsid].text};
        });
    },
    getCardDisplayerData: function () {
        var bookingForGame = getBookingForAGame(this.props.bookingsData.bookings, this.state.gameIdFilter);
        return _.map(bookingForGame, function (data) {
            return {
                title: this.props.usersData.users[data.uid].info.displayName,
                subtitles: [
                    "מקומות: " + data.booking.numOfSeats,
                    stationsMap[data.booking.station]
                ]
            }
        }, this);
    },
    onEditBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.bookingsData.bookings, this.state.gameIdFilter);
        var bookingToEdit = bookingForGame[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editBookingDialog,
            props: {
                uid: bookingToEdit.uid,
                user: this.props.usersData.users[bookingToEdit.uid],
                gameId: this.state.gameIdFilter,
                booking: bookingToEdit.booking
            }
        });
    },
    onCancelBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.bookingsData.bookings, this.state.gameIdFilter);
        var bookingToCancel = bookingForGame[index];

        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את ההרשמה?',
                onConfirm: function() {
                    actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {
                        uid: bookingToCancel.uid,
                        gameId: this.state.gameIdFilter
                    });
                }
            }
        });
    },
    render: template
});

module.exports = BookingPage;
