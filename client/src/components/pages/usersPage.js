'use strict';

var React = require('react');
var template = require('./usersPage.rt');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

var editUserDataDialog = require('../dialogs/editUserDataDialog');

function getUIDsWithSeasonTickets(UIDs, usersData) {
    return _.filter(UIDs, function(uid) {
        var userData = usersData[uid];
        return userData.seasonTicket && userData.seasonTicket.maxSeats > 0;
    });
}

function getUIDsWithoutSeasonTickets(UIDs, usersData) {
    var uidsWithSeasonTickets = getUIDsWithSeasonTickets(UIDs, usersData);
    return _.xor(UIDs, uidsWithSeasonTickets);
}

function getUIDsThatRequestForContact(UIDs, usersData) {
    return _.filter(UIDs, function(uid) {
        var userData = usersData[uid];
        return !!userData.contactRequest;
    });
}

var UsersPage = React.createClass({
    getInitialState: function() {
      return {
          filters: {
              hasSeasonTicketsOnly: true,
              doNotHasSeasonTicketsOnly: true,
              requestedContact: true
          }
      }
    },
    onFilterChange: function(filterName, val) {
        var filters = this.state.filters;
        filters[filterName] = val;
        this.setState({filters: filters});
    },
    getFilteredUIDs: function() {
        var UIDs = _.keys(this.props.usersData);

        var uidsWithSeasonTickets = this.state.filters.hasSeasonTicketsOnly ? getUIDsWithSeasonTickets(UIDs, this.props.usersData) : [];
        var uidsWithoutSeasonTickets = this.state.filters.doNotHasSeasonTicketsOnly ? getUIDsWithoutSeasonTickets(UIDs, this.props.usersData) : [];
        var uidsThatRequestForContact = this.state.filters.requestedContact ? getUIDsThatRequestForContact(UIDs, this.props.usersData) : [];

        return _.union(uidsWithSeasonTickets, uidsWithoutSeasonTickets, uidsThatRequestForContact);
    },
    getCardDisplayerData: function () {
        var UIDs = this.getFilteredUIDs();
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
        var UIDs = this.getFilteredUIDs();
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
