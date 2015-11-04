'use strict';

var React = require('react');
var template = require('./bookingPage.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var vsidMap = require('json!../../utils/vsidMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editBookingDialog = require('../dialogs/editBookingDialog');

function getNumOfSeatsSubtitle(bookingData) {
    return 'מקומות: ' + bookingData.numOfSeats;
}

function getBookingForAGame(booking, gameId) {
    return _.reduce(booking, function(accum, bookingList, uid) {
        var bookingData = bookingList[gameId];
        if (bookingData) {
            accum.push({uid: uid,bookingData: bookingData });
        }
        return accum;
    }, []);
}

var BookingPage = React.createClass({
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            gameIdFilter: _.keys(this.props.games)[0]
        };
    },
    getGamesFilterMenuItems: function () {
        return _.map(this.props.games, function (gameData, gameId) {
            return { payload: gameId, text: vsidMap[gameData.vsid] };
        });
    },
    getCardDisplayerData: function () {
        var bookingForGame = getBookingForAGame(this.props.booking, this.state.gameIdFilter);
        return _.map(bookingForGame, function (data) {
            return {
                title: this.props.usersData[data.uid].info.displayName,
                subtitles: [getNumOfSeatsSubtitle(data.bookingData)]
            }
        }, this);
    },
    onCreateBooking: function () {

    },
    onEditBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.booking, this.state.gameIdFilter);
        var bookingToEdit = bookingForGame[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialogClass: editBookingDialog,
            data: { uid: bookingToEdit.uid, gameId: this.state.gameIdFilter, bookingData: bookingToEdit.bookingData }
        });
    },
    onCancelBooking: function (index) {
        var bookingForGame = getBookingForAGame(this.props.booking, this.state.gameIdFilter);
        var bookingToCancel = bookingForGame[index];
        actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {uid: bookingToCancel.uid, gameId: this.state.gameIdFilter});
    },
    render: template
});

module.exports = BookingPage;
