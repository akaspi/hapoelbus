'use strict';

var React = require('react');
var template = require('./myAccount.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

//var authAPI = require('../../API/authAPI');

//var editUserDataDialog = require('../dialogs/editUserDataDialog');

var MyAccount = React.createClass({
    componentDidMount: function () {
        //if (_.isEmpty(this.props.usersData)) {
        //    actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
        //        dialogClass: editUserDataDialog,
        //        data: {showCancelButton: false, isModal: true, createMode: true, uid: authAPI.getUID(), userData: {info: {email: authAPI.getUserEmail()}}}
        //    });
        //}
    },
    logout: function() {
        actionsCreator.createAction(actionsConstants.LOGOUT, {});
    },

    render: template
});

module.exports = MyAccount;
