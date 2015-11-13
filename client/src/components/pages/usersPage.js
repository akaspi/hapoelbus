'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editUserDataDialog = require('../dialogs/editUserDataDialog');
var areYouSureDialog = require('../dialogs/areYouSureDialog');

function getUIDsWithSeasonTickets(UIDs, usersData) {
    return _.filter(UIDs, function (uid) {
        var userData = usersData[uid];
        return userData.seasonTicket && userData.seasonTicket.maxSeats > 0;
    });
}

function getUIDsWithoutSeasonTickets(UIDs, usersData) {
    var uidsWithSeasonTickets = getUIDsWithSeasonTickets(UIDs, usersData);
    return _.xor(UIDs, uidsWithSeasonTickets);
}

function getUIDsThatRequestForContact(UIDs, usersData) {
    return _.filter(UIDs, function (uid) {
        var userData = usersData[uid];
        return !!userData.contactRequest;
    });
}

function getUserColor(user) {
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
    getFilteredUIDs: function () {
        var users = this.props.usersData.users;
        var UIDs = _.keys(users);

        var uidsWithSeasonTickets = this.state.filters.hasSeasonTicketsOnly ? getUIDsWithSeasonTickets(UIDs, users) : [];
        var uidsWithoutSeasonTickets = this.state.filters.doNotHasSeasonTicketsOnly ? getUIDsWithoutSeasonTickets(UIDs, users) : [];
        var uidsThatRequestForContact = this.state.filters.requestedContact ? getUIDsThatRequestForContact(UIDs, users) : [];

        return _.union(uidsWithSeasonTickets, uidsWithoutSeasonTickets, uidsThatRequestForContact);
    },
    getCardDisplayerData: function () {
        var UIDs = this.getFilteredUIDs();
        return _.map(UIDs, function (uid) {
            var user = this.props.usersData.users[uid];
            return {
                title: user.info.displayName,
                subtitles: [user.info.email, user.info.phone],
                color: getUserColor(user)
            }
        }, this);
    },
    onEditUser: function (index) {
        var UIDs = this.getFilteredUIDs();
        var uid = UIDs[index];
        var user = this.props.usersData.users[uid];
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
    onRemoveUser: function (index) {
        var UIDs = this.getFilteredUIDs();
        var uid = UIDs[index];
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {
            dialog: areYouSureDialog,
            props: {
                text: 'האם אתה בטוח שברצונך למחוק את פרטי המשתמש?',
                onConfirm: function() {
                    actionsCreator.createAction(actionsConstants.REMOVE_USER, { uid: uid });
                }
            }
        });
    },
    render: template
});

module.exports = UsersPage;
