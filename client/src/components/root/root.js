'use strict';

var React = require('react/addons');
var template = require('./root.rt');
var _ = require('lodash');

var authStore = require('../../stores/authStore');
var usersDataStore = require('../../stores/usersDataStore');
var gamesStore = require('../../stores/gamesStore');
var pageNavigationStore = require('../../stores/pageNavigationStore');
var dialogStore = require('../../stores/dialogStore');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

function getStateFromStores() {
    return {
        authData: authStore.getAuthData(),
        currentPage: pageNavigationStore.getCurrentPage(),
        usersData: usersDataStore.getUser(),
        gamesData: gamesStore.getGamesData(),
        dialogToDisplay: dialogStore.getDialogToDisplay()
    };
}

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
        return _.merge({email: '', password: '', capacity: 0}, getStateFromStores());
    },

    componentDidMount: function () {
        authStore.addChangeListener(this.onStoreChange);
        usersDataStore.addChangeListener(this.onStoreChange);
        gamesStore.addChangeListener(this.onStoreChange);
        pageNavigationStore.addChangeListener(this.onStoreChange);
        dialogStore.addChangeListener(this.onStoreChange);

        if (this.state.authData.uid) {
            actionsCreator.createAction(actionsConstants.LOAD_USERS_DATA, {});
        }
    },

    componentDidUpdate: function(prevProps, prevState) {
      if (!prevState.authData.uid && this.state.authData.uid) {
          actionsCreator.createAction(actionsConstants.LOAD_USERS_DATA, {});
      }
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
        var dialogClass = require('../../components/dialogs/testDialog/testDialog');
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {dialogClass: dialogClass, data: {}});
    },

    render: template
});

module.exports = Root;
