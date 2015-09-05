'use strict';

var React = require('react/addons');

var template = require('./usersInfoList.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var deepLinkStateMixin = require('../../mixins/deepLinkStateMixin');
var _ = require('lodash');

var adminActions = require('../../../actions/adminActions');

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
    mixins: [ deepLinkStateMixin, muiMixin ],
    getInitialState: function () {
        return {
            dropDownFilter: USERS_DATA_FILTER_OPTIONS.ALL,
            textFilter: '',
            selectedData: {},
            selectedKey: null,
            editMode: false
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
        var selectedKey = _.keys(currentData)[_.first(selectedRows)];
        var selectedData = currentData[selectedKey];
        this.setState({
            selectedKey: selectedKey || null,
            selectedData: _.clone(selectedData) || {}
        });
    },
    goToEditMode: function() {
        this.setState({editMode: true});
    },
    goToViewMode: function() {
        this.setState({editMode: false});
    },
    toggleIsPremium: function(e, val) {
        var newSelectedDataState = _.merge({}, this.state.selectedData, {isPremium: val});
        this.setState({selectedData: newSelectedDataState});
    },
    updateUserInfo: function() {
        adminActions.updateUserData(this.state.selectedKey, this.state.selectedData);
        this.goToViewMode();
    },
    render: template
});

module.exports = UsersDataDashboard;
