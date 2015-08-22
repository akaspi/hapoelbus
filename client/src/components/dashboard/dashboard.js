'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./dashboard.rt.js');
var userActions = require('../../actions/userActions');

var tabOptions = ['חדשות ועדכונים', 'פרטים אישיים'];

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    getInitialState: function () {
        return {
            selectedTabIndex: 0
        }
    },
    getTabOptions: function () {
        return tabOptions;
    },
    handleTabChange: function (tabIndex){
      this.setState({selectedTabIndex: tabIndex});
    },
    render: template
});

module.exports = AccountData;