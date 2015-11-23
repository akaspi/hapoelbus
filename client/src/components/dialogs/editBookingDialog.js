'use strict';

var React = require('react');
var template = require('./editBookingDialog.rt');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var defaultBooking = {
    numOfSeats: 1,
    station: _.keys(stationsMap)[0],
    comment: ""
};

var EditBookingDialog = React.createClass({
    displayName: 'EditBookingDialog',
    propTypes: {
        booking: React.PropTypes.object,
        user: React.PropTypes.object,
        uid: React.PropTypes.string,
        gameId: React.PropTypes.string
    },
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            booking: _.defaults(_.cloneDeep(this.props.booking), defaultBooking)
        };
    },
    getStationsMenuItems: function () {
        return _.map(stationsMap, function (val, key) {
            return {payload: key, text: val};
        });
    },
    getNumOfSeatsMenuItems: function() {
        var maxSeats = (this.props.user.seasonTicket && this.props.user.seasonTicket.maxSeats) || 1;
        return _.times(maxSeats, function(n) {
           return {payload: n+1, text: n+1};
        });
    },
    updateBooking: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_BOOKING, {
            uid: this.props.uid,
            gameId: this.props.gameId,
            bookingData: this.state.booking
        });
    },
    render: template
});

module.exports = EditBookingDialog;
