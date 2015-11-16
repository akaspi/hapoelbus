'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editUserDataDialog = require('../dialogs/editUserDataDialog');
var areYouSureDialog = require('../dialogs/areYouSureDialog');

function getUsersWithSeasonTickets(users) {
    return _.pick(users, function (user) {
        return user.seasonTicket && user.seasonTicket.maxSeats > 0;
    });
}

function getUsersWithoutSeasonTickets(users) {
    var usersWithSeasonTickets = getUsersWithSeasonTickets(users);
    return _.omit(users, function (user, uid) {
        return _.has(usersWithSeasonTickets, uid);
    });
}

function getUsersThatRequestForContact(users) {
    return _.pick(users, function (user) {
        return !!user.contactRequest;
    });
}

function getUserCardColor(user) {
    if (user.contactRequest) {
        return 'Blue'
    }
    if (user.seasonTicket) {
        return 'Green'
    }
    return '';
}

var UsersPage = React.createClass({
    displayName: 'UsersPage',
    getInitialState: function () {
        return {
            filters: {
                hasSeasonTicketsOnly: true,
                doNotHasSeasonTicketsOnly: true,
                requestedContact: true
            }
        }
    },
    onFilterChange: function (filterName, val) {
        var filters = this.state.filters;
        filters[filterName] = val;
        this.setState({filters: filters});
    },
    getFilteredUsers: function () {
        var users = this.props.usersData.users;

        var uidsWithSeasonTickets = this.state.filters.hasSeasonTicketsOnly ? _.keys(getUsersWithSeasonTickets(users)) : [];
        var uidsWithoutSeasonTickets = this.state.filters.doNotHasSeasonTicketsOnly ? _.keys(getUsersWithoutSeasonTickets(users)) : [];
        var uidsThatRequestForContact = this.state.filters.requestedContact ? _.keys(getUsersThatRequestForContact(users)) : [];

        var filteredUIDs = _.union(uidsWithSeasonTickets, uidsWithoutSeasonTickets, uidsThatRequestForContact);

        return _.pick(users, filteredUIDs);
    },
    getUserCardProps: function (uid, user) {
        return {
            title: user.info.displayName,
            subtitles: [user.info.email, user.info.phone],
            color: getUserCardColor(user),
            actions: [
                {label: 'ערוך', onClick: this.onEditUser.bind(this, uid, user)},
                {label: 'מחק', onClick: this.onRemoveUser.bind(this, uid)}
            ]
        };
    },
    onEditUser: function (uid, user) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: editUserDataDialog,
            props: {
                user: user,
                uid: uid,
                isModal: false,
                isAdmin: true,
                title: 'עריכת משתמש'
            }
        });
    },
    onRemoveUser: function (uid) {
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את פרטי המשתמש?',
                onConfirm: function () {
                    actionsCreator.createAction(actionsConstants.REMOVE_USER, {uid: uid});
                }
            }
        });
    },
    render: template
});

module.exports = UsersPage;
