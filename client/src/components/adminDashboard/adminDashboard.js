'use strict';

var React = require('react/addons');
var template = require('./adminDashboard.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var adminStore = require('../../stores/adminStore');
var adminActions = require('../../actions/adminActions');

var USERS_DATA_FILTER_OPTIONS = {
    ALL: 'all',
    PAID: 'paid',
    FREE: 'free'
};

function filterData(filter, usersData, paymentsData) {
    switch (filter) {
        case USERS_DATA_FILTER_OPTIONS.ALL:
            return usersData;
        case USERS_DATA_FILTER_OPTIONS.PAID:
            return _.pick(usersData, function(userData, uid) {
                return _.contains(_.keys(paymentsData), uid)
            }, this);
        case USERS_DATA_FILTER_OPTIONS.FREE:
            return _.pick(usersData, function(userData, uid) {
                return !_.contains(_.keys(paymentsData), uid)
            }, this);
    }
}

var AdminDashboard = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        var initialState = adminStore.getAll();
        initialState.filteredUserData = filterData(USERS_DATA_FILTER_OPTIONS.ALL, initialState.usersData, initialState.payments);
        initialState.selectedUserData = [];
        return initialState;
    },
    componentDidMount: function () {
        adminStore.registerToChange(this.onAdminStoreDataChanged);
        adminActions.fetchUsersData();
    },
    onAdminStoreDataChanged: function(adminStoreData) {
        var newState = _.pick(adminStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        adminStore.removeChangeListener(this.onAdminStoreDataChanged);
    },
    getUsersDataFilterItems: function() {
      return [
          { payload: USERS_DATA_FILTER_OPTIONS.ALL, text: 'כל המשתמשים' },
          { payload: USERS_DATA_FILTER_OPTIONS.PAID, text: 'מנויים בלבד' },
          { payload: USERS_DATA_FILTER_OPTIONS.FREE, text: 'חד פעמיים' }
      ];
    },
    filterUsersData: function(e, index, filterItem) {
        this.setState({
            filteredUserData: filterData(filterItem.payload, this.state.usersData, this.state.payments)
        });
    },
    onRowSelection: function(selectedRow) {
        this.setState({
            selectedUserDataIndex: selectedRow
        });
        //console.log(_.pick(this.state.filteredUserData, _.keys(this.state.filteredUserData)[selectedRow]));
    },
    render: template
});

module.exports = AdminDashboard;