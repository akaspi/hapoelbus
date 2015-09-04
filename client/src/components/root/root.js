'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./root.rt.js');
var authStore = require('../../stores/authStore');
var userStore = require('../../stores/userStore');
var userActions = require('../../actions/userActions');
var authActions = require('../../actions/authActions');

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return _.merge({}, authStore.getAll(), userStore.getAll());
    },
    componentDidMount: function () {
        authStore.registerToChange(this.onAuthStoreDataChanged);
        userStore.registerToChange(this.onUserStoreDataChanged);
        authActions.fetchLoginState();
    },
    onAuthStoreDataChanged: function(authStoreData) {
        if (!this.state.isLoggedIn && authStoreData.isLoggedIn) {
            userActions.fetchUserData();
        }
        var newState = _.pick(authStoreData, _.keys(this.state));
        this.setState(newState);
    },
    onUserStoreDataChanged: function(userStoreData) {
        var newState = _.pick(userStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        authStore.removeChangeListener(this.onAuthStoreDataChanged);
        userStore.removeChangeListener(this.onUserStoreDataChanged);
    },
    render: template
});

module.exports = Root;