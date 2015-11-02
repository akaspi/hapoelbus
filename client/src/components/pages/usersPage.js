'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editUserDataDialog = require('../dialogs/editUserDataDialog');

var UsersPage = React.createClass({
    getCardDisplayerData: function () {
        var UIDs = _.keys(this.props.usersData);
        return _.map(UIDs, function (uid) {
            var userData = this.props.usersData[uid];
            return {
                title: userData.info.displayName,
                subtitles: [userData.info.email, userData.info.phone]
            }
        }, this);
    },
    onCreateUserData: function () {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {dialogClass: editUserDataDialog, data: {}});
    },
    onEditUserData: function (index) {
        var UIDs = _.keys(this.props.usersData);
        var uidToEdit = UIDs[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialogClass: editUserDataDialog,
            data: {uid: uidToEdit, userData: this.props.usersData[uidToEdit]}
        });
    },
    onRemoveUserData: function () {
    },
    render: template
});

module.exports = UsersPage;
