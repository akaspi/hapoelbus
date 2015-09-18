'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var numericLinkState = require('../mixins/numericLinkState');
var template = require('./gameCard.rt.js');
var gamesConstants = require('../../constants/gamesConstants');

var bookingActions = require('../../actions/bookingActions');

var dataConverterUtil = require('../../utils/dataConverterUtil');

var stations = [
    { payload: 0, text: 'תל אביב' },
    { payload: 1, text: 'מודיעין' }
];

var GameCard = React.createClass({
    mixins: [muiMixin, React.addons.LinkedStateMixin, numericLinkState],
    getInitialState: function () {
        return {
            bookingMode: false,
            numOfSeats: this.props.booking ? this.props.booking.numOfSeats : 1,
            stationIndex: this.props.booking ? _.findIndex(stations, { text: this.props.booking.station }) : 0,
            comment: this.props.booking ? this.props.booking.comment : ''
        }
    },
    shouldEnableBooking: function () {
        var isPaidUser = !!this.props.payments;
        var gameIsOpenForAll = (this.props.gameData.status === gamesConstants.STATUS.OPEN_FOR_ALL);
        return isPaidUser || gameIsOpenForAll;
    },
    goToBookingMode: function () {
        this.setState({bookingMode: true});
    },
    goToOverviewMode: function() {
        this.setState({bookingMode: false});
    },
    updateBooking: function() {
        var bookingData = {
            numOfSeats: this.state.numOfSeats,
            station: stations[this.state.stationIndex].text,
            comment: this.state.comment
        };
        bookingActions.updateBooking(this.props.uid, this.props.gameId, bookingData);
    },
    cancelBooking: function() {
        bookingActions.cancelBooking(this.props.uid, this.props.gameId);
    },
    translateVSID: function(vsid) {
      return gamesConstants.VSID[vsid];
    },
    getDepartureUTCTime: function(gameDeparture) {
        return dataConverterUtil.convertTime(gameDeparture);
    },
    getGameUTCDate: function(gameDate) {
        return dataConverterUtil.convertDate(gameDate);
    },
    getUsersDataFilterItems: function() {
        return stations;
    },
    onStationChange: function(e, selectedIndex) {
        this.setState({ stationIndex: selectedIndex });
    },
    render: template
});

module.exports = GameCard;