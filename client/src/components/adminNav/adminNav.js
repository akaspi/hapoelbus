'use strict';

var React = require('react/addons');
var template = require('./adminNav.rt.js');

var AdminDashboard = React.createClass({
    getInitialState: function() {
      return {
          adminViewActive: false
      }
    },
    switchToAdminView: function() {
        this.setState({adminViewActive: true});
    },
    switchToUserView: function() {
        this.setState({adminViewActive: false});
    },
    render: template
});

module.exports = AdminDashboard;