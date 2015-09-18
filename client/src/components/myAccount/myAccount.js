'use strict';

var React = require('react/addons');
var template = require('./myAccount.rt.js');
var muiMixin = require('../mixins/mui-mixin');
var mui = require('material-ui');

var navigationConstants = require('../../constants/navigationConstants');

var navItems = [
    { text: 'משחקים פתוחים', dashboard: navigationConstants.DASHBOARD_TYPE.USER, context: navigationConstants.CONTEXT.OPEN_GAMES },
    { text: 'פרטים אישיים', dashboard: navigationConstants.DASHBOARD_TYPE.USER, context: navigationConstants.CONTEXT.EDIT_USER_DATA },
    { text: 'ניהול', type: mui.MenuItem.Types.SUBHEADER },
    { text: 'טבלת משתמשים', dashboard: navigationConstants.DASHBOARD_TYPE.ADMIN, context: navigationConstants.CONTEXT.USERS_DATA_LIST },
    { text: 'טבלת משחקים', dashboard: navigationConstants.DASHBOARD_TYPE.ADMIN, context: navigationConstants.CONTEXT.GAMES_LIST }
];

var MyAccount = React.createClass({
    mixins: [muiMixin],
    getInitialState: function () {
        return {
            selectedNavItem: navItems[4]
        };
    },
    toggleNav: function () {
        this.refs.nav.toggle();
    },
    getNavItems: function () {
        if (this.props.isAdmin) {
            return navItems;
        }
        return _.filter(navItems, {dashboard: navigationConstants.DASHBOARD_TYPE.USER})
    },
    onNavChange: function(e, selectedIndex, selectedItem) {
      this.setState({selectedNavItem: selectedItem});
    },
    isUserDashboardSelected: function() {
        return this.state.selectedNavItem.dashboard === navigationConstants.DASHBOARD_TYPE.USER;
    },
    isAdminDashboardSelected: function() {
      return this.state.selectedNavItem.dashboard === navigationConstants.DASHBOARD_TYPE.ADMIN;
    },
    render: template
});

module.exports = MyAccount;
