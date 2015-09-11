'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./dashboard.rt.js');

var navigationLabels = ['המשחקים הבאים', 'היסטוריית הרשמות', 'פרטים אישיים'];

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function() {
      return {
          selectedTabIndex: 0
      }
    },
    getNavigationItems: function() {
        return navigationLabels;
    },
    onNavigation: function(navIndex) {
        this.setState({selectedTabIndex: navIndex});
    },
    render: template
});

module.exports = AccountData;