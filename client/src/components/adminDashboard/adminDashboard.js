'use strict';

var React = require('react/addons');
var template = require('./adminDashboard.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var adminStore = require('../../stores/adminStore');
var adminActions = require('../../actions/adminActions');


var AdminDashboard = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return adminStore.getAll();
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
    render: template
});

module.exports = AdminDashboard;
