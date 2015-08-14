'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./root.rt.js');
var userStore = require('../../stores/userStore');
var userActions = require('../../actions/userActions');

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return userStore.getAll();
    },
    componentDidMount: function () {
        userStore.registerToChange(this.onUserStoreDataChanged);
        if (this.state.isLoggedIn) {
            userActions.fetchUserData();
        }
    },
    onUserStoreDataChanged: function(userStoreData) {
        var newState = _.pick(userStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        userStore.removeChangeListener(this.onUserStoreDataChanged);
    },
    handleOpenLoginDialog: function (){
        this.refs.loginDialog.show();
    },
    render: template
});

module.exports = Root;