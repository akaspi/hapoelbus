'use strict';

var React = require('react');
var template = require('./bookingPage.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var vsidMap = require('json!../../utils/vsidMap.json');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editBookingDialog = require('../dialogs/editBookingDialog');

function getBookingForAGame(booking, gameId) {
    return _.reduce(booking, function (accum, bookingList, uid) {
        var bookingData = bookingList[gameId];
        if (bookingData) {
            accum.push({uid: uid, bookingData: bookingData});
        }
        return accum;
    }, []);
}

var BookingPage = React.createClass({
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            gameIdFilter: _.keys(this.props.gamesData)[0]
        };
    },
    getGamesFilterMenuItems: function () {
        return _.map(this.props.gamesData, function (gameData, gameId) {
            return {payload: gameId, text: vsidMap[gameData.vsid]};
        });
    },
    getCardDisplayerData: function () {
        var bookingForGame = getBookingForAGame(this.props.bookingsData, this.state.gameIdFilter);
        return _.map(bookingForGame, function (data) {
            return {
                title: this.props.usersData[data.uid].info.displayName,
                subtitles: [
                    "מקומות: " + data.bookingData.numOfSeats,
                    stationsMap[data.bookingData.station]
                ]
            }
        }, this);
    },
    onEditBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.bookingsData, this.state.gameIdFilter);
        var bookingToEdit = bookingForGame[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialogClass: editBookingDialog,
            data: {uid: bookingToEdit.uid, gameId: this.state.gameIdFilter, bookingData: bookingToEdit.bookingData}
        });
    },
    onCancelBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.bookingsData, this.state.gameIdFilter);
        var bookingToCancel = bookingForGame[index];
        actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {
            uid: bookingToCancel.uid,
            gameId: this.state.gameIdFilter
        });
    },
    render: template
});

module.exports = BookingPage;
