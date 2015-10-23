'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editUserDataDialog = require('../dialogs/editUserDataDialog');

var UsersPage = React.createClass({
    onCreateUserData: function() {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, { dialogClass: editUserDataDialog, data: {} });
    },
    onEditUserData: function(uid, userData) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, { dialogClass: editUserDataDialog, data: { uid: uid, userData: userData } });
    },
    onRemoveUserData: function() {},
    render: template
});

module.exports = UsersPage;
