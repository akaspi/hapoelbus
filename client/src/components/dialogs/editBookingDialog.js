'use strict';

var React = require('react');
var template = require('./editBookingDialog.rt');
var muiMixin = require('../mixins/mui-mixin');
var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');
var stationsMap = require('json!../../utils/stationsMap.json');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var EditBookingDialog = React.createClass({
    mixins: [muiMixin, deepLinkStateMixin],
    getInitialState: function () {
        return _.cloneDeep(this.props.data.bookingData);
    },
    getStationsMenuItems: function() {
      return _.map(stationsMap, function(val, key) {
         return { payload: key, text: val };
      });
    },
    updateBooking: function () {
        actionsCreator.createAction(actionsConstants.UPDATE_BOOKING, {
            uid: this.props.data.uid,
            gameId: this.props.data.gameId,
            bookingData: this.state
        });
    },
    render: template
});

module.exports = EditBookingDialog;
