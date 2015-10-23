'use strict';

var React = require('react');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./userData.rt');
var userActions = require('../../actions/userActions');
var auth = require('../../DAL/auth');
var userStore = require('../../stores/usersDataStore');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return {
            email: auth.getUserAuthEmail() || '',
            displayName: '',
            phone: '',
            isPremium: false,
            errorMsg: ''
        }
    },
    componentDidMount: function () {
        userStore.registerToChange(this.onUserStoreDataChanged);
    },
    onUserStoreDataChanged: function (userStoreData) {
        var newState = _.pick(userStoreData, ['errorMsg']);
        this.setState(newState);
    },
    componentWillUnmount: function () {
        userStore.removeChangeListener(this.onUserStoreDataChanged);
    },
    handleCreateAccount: function () {
        userActions.updateUserData(this.props.uid, _.omit(this.state, ['errorMsg']));
    },
    handlePremiumChange: function (e, value) {
        this.setState({isPremium: value});
    },
    render: template
});

module.exports = AccountData;
