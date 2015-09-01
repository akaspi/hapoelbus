'use strict';

var React = require('react/addons');

var template = require('./usersDataDashboard.rt.js');
var muiMixin = require('../../mixins/mui-mixin');

var USERS_DATA_FILTER_OPTIONS = {
    ALL: 'all',
    PAID: 'paid',
    FREE: 'free'
};

var tableColumnMetadata = [
    { key: 'displayName', title: 'שם מלא' },
    { key: 'email', title: 'דוא״ל' },
    { key: 'phone', title: 'טלפון' },
    { key: 'isPremium', title: 'מעוניין במנוי' },
    { key: 'maxSeats', title: 'מס׳ מנויים' }
];

var UsersDataDashboard = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return {
            filter: USERS_DATA_FILTER_OPTIONS.ALL,
            selectedDataRows: {}
        }
    },
    getUsersDataFilterItems: function() {
        return [
            { payload: USERS_DATA_FILTER_OPTIONS.ALL, text: 'כל המשתמשים' },
            { payload: USERS_DATA_FILTER_OPTIONS.PAID, text: 'מנויים בלבד' },
            { payload: USERS_DATA_FILTER_OPTIONS.FREE, text: 'חד פעמיים' }
        ];
    },
    getDataToDisplay: function() {
        switch (this.state.filter) {
            case USERS_DATA_FILTER_OPTIONS.ALL:
                return this.props.usersData;
            case USERS_DATA_FILTER_OPTIONS.PAID:
                return _.pick(this.props.usersData, function(val) { return val.maxSeats > 0});
            case USERS_DATA_FILTER_OPTIONS.FREE:
                return _.pick(this.props.usersData, function(val) { return !val.maxSeats});
        }
    },
    getColumnMetadata: function() {
        return tableColumnMetadata;
    },
    filterUsersData: function(e, index, filterItem) {
        this.setState({ filter: filterItem.payload });
    },
    onRowSelection: function(selectedRows) {
        var currentData = this.getDataToDisplay();
        var dataKeys = _.keys(currentData);
        var keysOfSelectedRows = _.map(selectedRows, function (rowIndex) {
            return dataKeys[rowIndex]
        });
        this.setState({selectedDataRows: _.pick(this.props.usersData, keysOfSelectedRows)});
    },
    openEditingPanel: function() {
        this.refs.editUserData.show();
    },
    render: template
});

module.exports = UsersDataDashboard;
