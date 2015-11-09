'use strict';

var React = require('react');
var template = require('./editBookingDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var defaultBooking = {
    numOfSeats: 1,
    station: _.keys(stationsMap)[0],
    comments: ""
};

var EditBookingDialog = React.createClass({
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.defaults(_.cloneDeep(this.props.booking), defaultBooking);
    },
    getStationsMenuItems: function () {
        return _.map(stationsMap, function (val, key) {
            return {payload: key, text: val};
        });
    },
    updateBooking: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_BOOKING, {
            uid: this.props.uid,
            gameId: this.props.gameId,
            bookingData: this.state
        });
        this.hideDialog();
    },
    showDialog: function () {
        this.refs.dialog.show();
    },
    hideDialog: function () {
        this.refs.dialog.dismiss();
    },
    render: template
});

module.exports = EditBookingDialog;
