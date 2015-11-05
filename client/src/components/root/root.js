'use strict';

var React = require('react');
var template = require('./root.rt');
var _ = require('lodash');

var authStore = require('../../stores/authStore');
var usersDataStore = require('../../stores/usersStore');
var gamesStore = require('../../stores/gamesStore');
var bookingStore = require('../../stores/bookingsStore');
var pageNavigationStore = require('../../stores/pageNavigationStore');
var dialogStore = require('../../stores/dialogStore');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

function getStateFromStores() {
    return {
        authData: authStore.getAuthData(),
        usersData: usersDataStore.getUsersData(),
        gamesData: gamesStore.getGamesData(),
        bookingsData: bookingStore.getBookingData(),
        currentPage: pageNavigationStore.getCurrentPage(),
        dialogToDisplay: dialogStore.getDialogToDisplay()
    };
}

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
        return getStateFromStores();
    },

    componentWillReceiveProps: function() {
        console.log('dada');
    },

    componentDidMount: function () {
        authStore.addChangeListener(this.onStoreChange);
        usersDataStore.addChangeListener(this.onStoreChange);
        gamesStore.addChangeListener(this.onStoreChange);
        bookingStore.addChangeListener(this.onStoreChange);
        pageNavigationStore.addChangeListener(this.onStoreChange);
        dialogStore.addChangeListener(this.onStoreChange);
    },

    onStoreChange: function () {
        this.setState(getStateFromStores());
    },

    login: function () {
        actionsCreator.createAction(actionsConstants.LOGIN, {email: this.state.email, password: this.state.password});
    },

    logout: function () {
        actionsCreator.createAction(actionsConstants.LOGOUT);
    },

    openDialog: function() {
        var dialogClass = require('../dialogs/editUserDataDialog');
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {dialogClass: dialogClass, data: {}});
    },

    render: template
});

module.exports = Root;
