'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./root.rt.js');

var authStore = require('../../stores/authStore');
var usersDataStore = require('../../stores/usersDataStore');
var userActions = require('../../actions/userActions');
var authActions = require('../../actions/authActions');

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        var authStoreData = authStore.getAll();
        var usersStoreData = usersDataStore.getAll();
        return {
            uid: authStoreData.uid,
            isAdmin: authStoreData.isAdmin,
            isAuthStorePending: authStoreData.pending,
            usersData: usersStoreData.usersData,
            isUsersDataStorePending: usersStoreData.pending
        };
    },
    componentDidMount: function () {
        authStore.registerToChange(this.onAuthStoreDataChanged);
        usersDataStore.registerToChange(this.onUserStoreDataChanged);
        authActions.fetchLoginState();
    },
    onAuthStoreDataChanged: function(authStoreData) {
        if (authStoreData.pending) {
            this.setState({ isAuthStorePending: true });
        } else {
            if (!this.state.uid && authStoreData.uid) {
                userActions.fetchUserData(authStoreData.isAdmin ? null : authStoreData.uid);
            }
            this.setState({ uid: authStoreData.uid, isAdmin: authStoreData.isAdmin, isAuthStorePending: false });
        }
    },
    onUserStoreDataChanged: function(userStoreData) {
        if (userStoreData.pending) {
            this.setState({ isUsersDataStorePending: true });
        } else {
            this.setState({ usersData: userStoreData.usersData, isUsersDataStorePending: false})
        }
    },
    componentWillUnmount: function() {
        authStore.removeChangeListener(this.onAuthStoreDataChanged);
        usersDataStore.removeChangeListener(this.onUserStoreDataChanged);
    },
    render: template
});

module.exports = Root;