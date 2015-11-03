'use strict';

var React = require('react');
var template = require('./myAccount.rt');

var MyAccount = React.createClass({
    getInitialState: function() {
      console.log(this.props);
        return {};
    },
    render: template
});

module.exports = MyAccount;
