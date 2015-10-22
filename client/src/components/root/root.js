'use strict';

var React = require('react/addons');
var template = require('./root.rt');
var _ = require('lodash');

var userStore = require('../../stores/userStore');
var gamesStore = require('../../stores/gamesStore');
var pageNavigationStore = require('../../stores/pageNavigationStore');
var dialogStore = require('../../stores/dialogStore');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');

function getStateFromStores() {
    return {
        currentPage: pageNavigationStore.getCurrentPage(),
        user: userStore.getUser(),
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
        userStore.addChangeListener(this.onStoreChange);
        gamesStore.addChangeListener(this.onStoreChange);
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
        var dialogClass = require('../../components/dialogs/testDialog/testDialog');
        actionsCreator.createAction(actionsConstants.SHOW_DIALOG, {dialogClass: dialogClass, data: {}});
    },

    render: template
});

module.exports = Root;
