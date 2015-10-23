'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');

var TestDialog =  React.createClass({
    mixins: [ ],
    getInitialState: function() {
      console.log(this.props);
        return {};
    },
    render: template
});

module.exports = TestDialog;
