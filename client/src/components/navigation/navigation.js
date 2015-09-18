'use strict';

var React = require('react/addons');
var template = require('./navigation.rt.js');

var muiMixin = require('../mixins/mui-mixin');
var mui = require('material-ui');
var _ = require('lodash');

var navigationConstants = require('../../constants/navigationConstants');
var navigationActions = require('../../actions/navigationActions');

var navItems = [
    { text: 'משחקים פתוחים', tabName: navigationConstants.TABS.USER.OPEN_GAMES },
    { text: 'ניהול', type: mui.MenuItem.Types.SUBHEADER },
    { text: 'טבלת משתמשים', tabName: navigationConstants.TABS.ADMIN.USERS_DATA_LIST },
    { text: 'טבלת משחקים', tabName: navigationConstants.TABS.ADMIN.GAMES_LIST },
    { text: 'שליחת אימייל', tabName: navigationConstants.TABS.ADMIN.EMAILS_SECTION }
];

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return {
            selectedTab: navItems[0]
        }
    },
    getNavItems: function() {
      return navItems;
    },
    onNavChange: function (e, navIndex, navItem) {
        navigationActions.navigateTo(navItem.tabName);
        this.setState({ selectedTab: navItem });
    },
    toggleNav: function() {
        this.refs.nav.toggle();
    },
    render: template
});

module.exports = AccountData;