'use strict';

var React = require('react');
var template = require('./myAccount.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var authAPI = require('../../API/authAPI');

var editUserDataDialog = require('../dialogs/editUserDataDialog');

function openEditUserDialog(user, uid, isModal, title) {
    actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
        dialog: editUserDataDialog,
        props: {
            user: user,
            uid: uid,
            title: title,
            isModal: isModal
        }
    });
}

var MyAccount = React.createClass({
    displayName: 'MyAccount',
    isDataInitialized: function (props) {
        var propsToCheck = props || this.props;
        return propsToCheck.usersData.initialized && propsToCheck.gamesData.initialized && propsToCheck.bookingsData.initialized;
    },
    hasErrors: function () {
        return this.props.authData.error || this.props.usersData.error || this.props.gamesData.error || this.props.bookingsData.error;
    },
    componentDidMount: function () {
        actionsCreator.createAction(actionsConstants.LOAD_AUTH_DATA, {});
        actionsCreator.createAction(actionsConstants.LOAD_USERS, {});
        actionsCreator.createAction(actionsConstants.LOAD_GAMES, {});
        actionsCreator.createAction(actionsConstants.LOAD_BOOKINGS, {});
    },
    isUserMissingData: function () {
        var uid = this.props.authData.uid;
        var user = this.props.usersData.users && this.props.usersData.users[uid];

        return _.isEmpty(user);
    },
    componentDidUpdate: function (prevProps) {
        if (!this.isDataInitialized(prevProps) && this.isDataInitialized(this.props)) {
            if (this.isUserMissingData()) {
                openEditUserDialog({
                    info: {
                        email: authAPI.getUserEmail(),
                        profileImage: this.getUserProfileUrl()
                    }
                }, this.props.authData.uid, true, 'פרטי משתמש ראשוניים');
            } else {
                actionsCreator.createAction(actionsConstants.UPDATE_USER, {
                    uid: this.props.authData.uid,
                    user: {
                        info: {
                            profileImage: this.getUserProfileUrl()
                        }
                    }
                });
            }
        }
    },
    getUserName: function () {
        var user = this.props.usersData.users[this.props.authData.uid];
        return user.info.displayName || 'משתמש';
    },
    getUserProfileUrl: function () {
        return authAPI.getUserProfileImageURL();
    },
    editUser: function() {
        var uid = this.props.authData.uid;
        var user = this.props.usersData.users[uid];
        openEditUserDialog(user, uid, false, 'עריכת פרטי משתמש');
    },
    logout: function () {
        actionsCreator.createAction(actionsConstants.LOGOUT, {});
    },
    render: template
});

module.exports = MyAccount;
