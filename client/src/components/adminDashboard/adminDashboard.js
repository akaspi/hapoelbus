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

var AdminDashboard = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return _.merge({
            usersDataFilter: USERS_DATA_FILTER_OPTIONS.ALL
        }, adminStore.getAll());
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
        this.setState({usersDataFilter: filterItem.payload});
    },
    getFilteredUsersData: function() {
        switch (this.state.usersDataFilter) {
            case USERS_DATA_FILTER_OPTIONS.ALL:
                return this.state.usersData;
            case USERS_DATA_FILTER_OPTIONS.PAID:
                return _.pick(this.state.usersData, function(userData, uid) {
                    return _.contains(_.keys(this.state.payments), uid)
                }, this);
            case USERS_DATA_FILTER_OPTIONS.FREE:
                return _.pick(this.state.usersData, function(userData, uid) {
                    return !_.contains(_.keys(this.state.payments), uid)
                }, this);
        }
    },
    render: template
});

module.exports = AdminDashboard;