'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./accountDataEdit.rt.js');
var userActions = require('../../actions/userActions');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {

        return {
            isEditMode: false,
            email: this.props.userData.email,
            displayName: this.props.userData.displayName,
            phone: this.props.userData.phone,
            maxSeats: this.props.userData.maxSeats,
            isPremium: this.props.userData.isPremium
        }
    },
    handleEditClick: function () {
        this.setState({isEditMode: true});
    },
    handleSaveUserDataClick: function () {
        var userData = _.pick(this.state, ['email', 'displayName', 'phone', 'maxSeats', 'isPremium']);
        userActions.updateUserData(userData);
    },
    handlePremiumChange: function (e, value) {
        this.setState({isPremium: value});
    },
    render: template
});

module.exports = AccountData;