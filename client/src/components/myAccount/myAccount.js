'use strict';

var React = require('react/addons');
var template = require('./myAccount.rt.js');

//var navigationStore = require('../../stores/navigationStore');

//var navigationConstants = require('../../constants/navigationConstants');

var MyAccount = React.createClass({
    getInitialState: function() {
      //var navigationState = navigationStore.getAll();
        return {
            //tabToDisplay: navigationState.tabToDisplay
        }
    },
    componentDidMount: function() {
        //navigationStore.registerToChange(this.onNavigationStoreDataChanged);
    },
    onNavigationStoreDataChanged: function(navigationStoreData) {
        //this.setState({ tabToDisplay: navigationStoreData.tabToDisplay });
    },
    componentWillUnmount: function() {
        //navigationStore.removeChangeListener(this.onNavigationStoreDataChanged);
    },
    shouldShowUserDashboard: function() {
        //return _.contains(_.values(navigationConstants.TABS.USER), this.state.tabToDisplay);
    },
    shouldShowAdminDashboard: function() {
        //return _.contains(_.values(navigationConstants.TABS.ADMIN), this.state.tabToDisplay);
    },
    render: template
});

module.exports = MyAccount;
