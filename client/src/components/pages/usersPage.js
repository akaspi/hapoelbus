'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var deepLinkStateMixin = require('../mixins/deepLinkStateMixin');

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

function getUserCardRibbon(user) {
    if (user.contactRequest) {
        return {label: 'ליצור קשר', color: 'Blue'}
    }
    if (user.seasonTicket && user.seasonTicket.maxSeats > 0) {
        return {label: 'מנוי', color: 'Green'}
    }
    return null;
}

function getSeasonTicketSubtitle(user) {
    if (user.seasonTicket && !_.isUndefined(user.seasonTicket.ticketId)) {
        return 'מס׳ מנוי: ' + user.seasonTicket.ticketId;
    }
    return '';
}

var UsersPage = React.createClass({
    displayName: 'UsersPage',
    mixins: [deepLinkStateMixin],
    getInitialState: function () {
        return {
            filters: {
                all: true,
                hasSeasonTicketsOnly: false,
                doNotHasSeasonTicketsOnly: false,
                requestedContact: false
            }
        }
    },
    onFilterChanged: function (e, selected) {
        var newFilters = _.mapValues(this.state.filters, function () {
            return false;
        });
        newFilters[selected] = true;
        this.setState({filters: newFilters});
    },
    getFilteredUsers: function () {
        var users = this.props.usersData.users;

        switch (true) {
            case this.state.filters.all:
                return users;
            case this.state.filters.hasSeasonTicketsOnly:
                return getUsersWithSeasonTickets(users);
            case this.state.filters.doNotHasSeasonTicketsOnly:
                return getUsersWithoutSeasonTickets(users);
            case this.state.filters.requestedContact:
                return getUsersThatRequestForContact(users);
        }
    },
    createUsersCardDataArr: function(users) {
        return _(users)
            .map(function (user, uid) {
                return {uid: uid, user: user}
            })
            .sortBy(function (userData) {
                return userData.user.info.displayName;
            })
            .value();
    },
    getUserCardProps: function (uid, user) {
        return {
            title: user.info.displayName,
            subtitles: [user.info.email, user.info.phone, getSeasonTicketSubtitle(user)],
            imageUrl: user.info.profileImage,
            ribbon: getUserCardRibbon(user),
            actions: [
                {label: 'ערוך', icon: 'mode_edit', onClick: this.onEditUser.bind(this, uid, user)},
                {label: 'מחק', icon: 'delete', onClick: this.onRemoveUser.bind(this, uid)}
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
