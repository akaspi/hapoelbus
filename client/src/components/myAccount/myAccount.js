'use strict';

var React = require('react');
var template = require('./myAccount.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var authAPI = require('../../API/authAPI');

var editUserDataDialog = require('../dialogs/editUserDataDialog');

var MyAccount = React.createClass({
    displayName: 'MyAccount',
    isDataInitialized: function (props) {
        var propsToCheck = props || this.props;
        return propsToCheck.usersData.initialized && propsToCheck.gamesData.initialized && propsToCheck.bookingsData.initialized;
    },
    hasErrors: function() {
        return this.props.authData.error || this.props.usersData.error || this.props.gamesData.error || this.props.bookingsData.error;
    },
    componentDidMount: function () {
        actionsCreator.createAction(actionsConstants.LOAD_USERS, {});
        actionsCreator.createAction(actionsConstants.LOAD_GAMES, {});
        actionsCreator.createAction(actionsConstants.LOAD_BOOKINGS, {});
    },
    isUserMissingData: function() {
        var uid = this.props.authData.uid;
        var user = this.props.usersData.users && this.props.usersData.users[uid];

        return _.isEmpty(user);
    },
    componentDidUpdate: function(prevProps) {
        if (!this.isDataInitialized(prevProps) && this.isDataInitialized(this.props) && this.isUserMissingData()) {
            actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
                dialog: editUserDataDialog,
                props: {
                    user: {
                        info: {
                            email: authAPI.getUserEmail()
                        }
                    },
                    uid: this.props.authData.uid,
                    isModal: true,
                    title: 'פרטי משתמש ראשוניים'
                }
            });
        }
    },
    getSkeletonUserForInitialization: function() {
        return {
            info: {
                email: authAPI.getUserEmail()
            },
            contactRequest: true,
            distribution: {
                mail: true,
                sms: true
            }
        };
    },
    logout: function() {
        actionsCreator.createAction(actionsConstants.LOGOUT, {});
    },
    render: template
});

module.exports = MyAccount;
