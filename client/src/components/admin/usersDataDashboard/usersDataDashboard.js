'use strict';

var React = require('react/addons');

var template = require('./usersDataDashboard.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var modalActions = require('../../../actions/modalActions');
var ModalConstants = require('../../../constants/ModalConstants');

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
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function () {
        return {
            dropDownFilter: USERS_DATA_FILTER_OPTIONS.ALL,
            textFilter: '',
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
        var filteredData = {};
        switch (this.state.dropDownFilter) {
            case USERS_DATA_FILTER_OPTIONS.ALL:
                filteredData =  this.props.usersData;
                break;
            case USERS_DATA_FILTER_OPTIONS.PAID:
                filteredData =  _.pick(this.props.usersData, function(val) { return val.maxSeats > 0});
                break;
            case USERS_DATA_FILTER_OPTIONS.FREE:
                filteredData = _.pick(this.props.usersData, function(val) { return !val.maxSeats});
                break;
        }
        filteredData = _.omit(filteredData, function(val) {
           return !_.contains(val.displayName, this.state.textFilter);
        }, this);

        return filteredData;
    },
    getColumnMetadata: function() {
        return tableColumnMetadata;
    },
    filterUsersData: function(e, index, filterItem) {
        this.setState({ dropDownFilter: filterItem.payload });
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
        modalActions.showModal(ModalConstants.NAME.UPDATE_USER_DATA_MODAL, {
            userData: this.state.selectedDataRows
        });
    },
    render: template
});

module.exports = UsersDataDashboard;
