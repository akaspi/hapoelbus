'use strict';

var React = require('react');
var template = require('./myAccount.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

//var authAPI = require('../../API/authAPI');

//var editUserDataDialog = require('../dialogs/editUserDataDialog');

var MyAccount = React.createClass({
    displayName: 'MyAccount',
    isLoadingInitialData: function () {
        var isLoadingUsers = _.isEmpty(this.props.usersData.users);
        var isLoadingGames = _.isEmpty(this.props.gamesData.games);
        var isLoadingBookings = _.isEmpty(this.props.bookingsData.bookings);
        return isLoadingUsers || isLoadingGames || isLoadingBookings;
    },
    componentDidMount: function () {
        actionsCreator.createAction(actionsConstants.LOAD_USERS, {});
        actionsCreator.createAction(actionsConstants.LOAD_GAMES, {});
        actionsCreator.createAction(actionsConstants.LOAD_BOOKINGS, {});
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
