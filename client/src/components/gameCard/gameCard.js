'use strict';

var React = require('react');
var muiMixin = require('../mixins/mui-mixin');
var numericLinkState = require('../mixins/numericLinkState');
var template = require('./gameCard.rt');

var dataSchemas = require('../../../../common/dataSchemas');

var gamesConstants = require('../../constants/gamesConstants');

var bookingActions = require('../../actions/bookingActions');

var dateUtils = require('../../../../common/dateUtils');

var stations = dataSchemas.Booking.station.options;

var GameCard = React.createClass({
    mixins: [muiMixin, React.addons.LinkedStateMixin, numericLinkState],
    getInitialState: function () {
        return {
            bookingMode: false,
            numOfSeats: this.props.payments ? (this.props.payments.maxSeats || 1) : 1,
            stationIndex: this.props.booking ? _.findIndex(stations, {value: this.props.booking.station}) : 0,
            comment: this.props.booking ? this.props.booking.comment : ''
        }
    },
    shouldEnableBooking: function () {
        return (this.isPaidUser() || this.isGameOpenForAll()) && !this.isFullyBooked();
    },
    isBookingForPaidUsersOnly: function() {
      return !this.isPaidUser() && !this.isGameOpenForAll() && !this.isFullyBooked();
    },
    isGameOpenForAll: function() {
      return this.props.gameData.status === gamesConstants.STATUS.OPEN_FOR_ALL;
    },
    isPaidUser: function() {
        return !!this.props.payments && this.props.payments.maxSeats > 0;
    },
    getNumberOfSeatsLeft: function() {
        if (!this.props.gameData.capacity) {
            return Infinity;
        }
        return this.props.gameData.capacity - (this.props.occupied || 0);
    },
    isFullyBooked: function() {
        return this.getNumberOfSeatsLeft() <= 0;
    },
    getLogoContainerClasses: function () {
        var classes = {'game-logo-container': true};
        classes['team-logo-' + this.props.gameData.vsid] = true;
        return classes;
    },
    goToBookingMode: function () {
        this.setState({bookingMode: true});
    },
    goToOverviewMode: function () {
        this.setState({bookingMode: false});
    },
    updateBooking: function () {
        var bookingData = {
            numOfSeats: this.state.numOfSeats,
            station: stations[this.state.stationIndex].value,
            comment: this.state.comment
        };
        bookingActions.updateBooking(this.props.uid, this.props.gameId, bookingData);
    },
    cancelBooking: function () {
        bookingActions.cancelBooking(this.props.uid, this.props.gameId);
    },
    translateVSID: function (vsid) {
        return _.find(dataSchemas.Game.vsid.options, {value: vsid}).title;
    },
    getDepartureUTCTime: function (gameDeparture) {
        return dateUtils.convertTime(gameDeparture);
    },
    getGameUTCDate: function (gameDate) {
        return dateUtils.convertDate(gameDate);
    },
    getStationsItems: function () {
        return stations;
    },
    onStationChange: function (e, selectedIndex) {
        this.setState({stationIndex: selectedIndex});
    },
    render: template
});

module.exports = GameCard;
