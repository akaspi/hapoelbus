'use strict';

var React = require('react/addons');

var template = require('./root.rt.js');
var loginStore = require('../../stores/loginStore');

var Root = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        var loginStoreData = loginStore.getAll();
        return {
            isLoggedIn: loginStoreData.isLoggedIn
        };
    },
    componentDidMount: function () {
        loginStore.registerToChange(this.onLoginStoreDataChanged);
    },
    onLoginStoreDataChanged: function(loginStoreData) {
        var newState = _.pick(loginStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        loginStore.removeChangeListener(this.onLoginStoreDataChanged);
    },
    render: template
});

module.exports = Root;