'use strict';

var React = require('react/addons');

var template = require('./usersDataController.rt.js');
var muiMixin = require('../mixins/mui-mixin');

var USERS_DATA_FILTER_OPTIONS = {
    ALL: 'all',
    PAID: 'paid',
    FREE: 'free'
};

var USERS_DATA_KEYS = ['displayName', 'email', 'phone'];
var PAYMENTS_KEYS = ['maxSeats'];

function prepareDataToDisplay(usersData, payments) {
    return _.reduce(usersData, function(accum, val, key) {
        accum[key] = _.pick(val, USERS_DATA_KEYS);
        if (_.contains(_.keys(payments), key)) {
            _.merge(accum[key], _.pick(payments[key], PAYMENTS_KEYS));
        }
        return accum;
    }, {});
}

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return {
            dataToDisplay: prepareDataToDisplay(this.props.usersData, this.props.payments),
            selectedUserDataIndex: []
        }
    },
    componentWillReceiveProps: function(nextProps) {
      this.setState({
          dataToDisplay: prepareDataToDisplay(nextProps.usersData, nextProps.payments),
          selectedUserDataIndex: []
      })
    },
    getUsersDataFilterItems: function() {
        return [
            { payload: USERS_DATA_FILTER_OPTIONS.ALL, text: 'כל המשתמשים' },
            { payload: USERS_DATA_FILTER_OPTIONS.PAID, text: 'מנויים בלבד' },
            { payload: USERS_DATA_FILTER_OPTIONS.FREE, text: 'חד פעמיים' }
        ];
    },
    filterUsersData: function(e, index, filterItem) {
        var dataToDisplay = prepareDataToDisplay(this.props.usersData, this.props.payments);
        switch (filterItem.payload) {
            case USERS_DATA_FILTER_OPTIONS.ALL:
                this.setState({dataToDisplay: dataToDisplay});
                break;
            case USERS_DATA_FILTER_OPTIONS.PAID:
                var paidUsersData = _.pick(dataToDisplay, function(val) { return val.maxSeats > 0});
                this.setState({dataToDisplay: paidUsersData});
                break;
            case USERS_DATA_FILTER_OPTIONS.FREE:
                var freeUsersData = _.pick(dataToDisplay, function(val) { return !val.maxSeats });
                this.setState({dataToDisplay: freeUsersData});
                break;
        }
    },
    onRowSelection: function(selectedRow) {
        this.setState({
            selectedUserDataIndex: selectedRow
        });
    },
    getSelectedRowData: function() {
        var selectedRowIndex = _.first(this.state.selectedUserDataIndex);
        if (!_.isNumber(selectedRowIndex)) {
            return {};
        }
        return _.values(this.state.dataToDisplay)[selectedRowIndex];
    },
    openEditingPanel: function() {
        this.refs.editUserData.show();
    },
    render: template
});

module.exports = MyAccount;
