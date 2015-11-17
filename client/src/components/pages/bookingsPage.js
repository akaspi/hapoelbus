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

function getNumOfSeatsSubtitle(booking) {
    return 'מקומות: ' + booking.numOfSeats || 0;
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
    getBookingForAGame: function() {
        var bookings = this.props.bookingsData.bookings;
        var gameId = this.state.gameIdFilter;
        return _(bookings)
            .mapValues(function(userBookings) {
                return userBookings[gameId]
            })
            .omit(_.isUndefined)
            .value();
    },
    getBookingCardProps: function(uid, booking) {
        return {
            title: this.props.usersData.users[uid].info.displayName,
            subtitles: [getNumOfSeatsSubtitle(booking), stationsMap[booking.station]],
            actions: [
                {label: 'ערוך', onClick: this.onEditBooking.bind(this, booking, uid, this.props.usersData.users[uid])},
                {label: 'בטל', onClick: this.onCancelBooking.bind(this, uid)}
            ]
        }
    },
    onEditBooking: function (booking, uid, user) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editBookingDialog,
            props: {
                uid: uid,
                user: user,
                gameId: this.state.gameIdFilter,
                booking: booking
            }
        });
    },
    onCancelBooking: function (uid) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את ההרשמה?',
                onConfirm: function() {
                    actionsCreator.createAction(actionsConstants.CANCEL_BOOKING, {
                        uid: uid,
                        gameId: this.state.gameIdFilter
                    });
                }.bind(this)
            }
        });
    },
    render: template
});

module.exports = BookingPage;
