'use strict';

var React = require('react/addons');
var template = require('./navigation.rt');
var mui = require('material-ui');

var pagesConstants = require('../../constants/pagesConstants');

var navItems = [
    { text: 'משחקים פתוחים', page: pagesConstants.HOME_PAGE },
    { text: 'ניהול', type: mui.MenuItem.Types.SUBHEADER },
    { text: 'טבלת משתמשים', page: pagesConstants.USERS_PAGE },
    { text: 'טבלת משחקים', page: pagesConstants.GAMES_PAGE },
    { text: 'טבלת רישומים', page: pagesConstants.BOOKINGS_PAGE },
    { text: 'אימיילים', page: pagesConstants.EMAILS_PAGE }
];

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {
            selectedTab: navItems[0]
        }
    },
    getNavItems: function() {
        return navItems;
    },
    onNavChange: function (e, navIndex, navItem) {
        var actionsCreator = require('../../actions/actionsCreator');
        var actionsConstants = require('../../actions/actionsConstants');
        actionsCreator.createAction(actionsConstants.NAVIGATE_TO_PAGE, {page: navItem.page});
        this.setState({ selectedTab: navItem });
    },
    toggleNav: function() {
        this.refs.nav.toggle();
    },
    render: template
});

module.exports = AccountData;
