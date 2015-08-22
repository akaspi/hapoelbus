'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./accountData.rt.js');
var userActions = require('../../actions/userActions');
var auth = require('../../api/auth');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return {
            email: auth.getUserAuthEmail() || '',
            displayName: '',
            phone: '',
            isPremium: false
        }
    },
    handleCreateAccount: function () {
        userActions.createUserData(this.state);
    },
    handlePremiumChange: function (e, value) {
        this.setState({isPremium: value});
    },
    render: template
});

module.exports = AccountData;