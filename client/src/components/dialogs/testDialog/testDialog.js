'use strict';

var React = require('react/addons');
var template = require('./testDialog.rt.js');

var TestDialog =  React.createClass({
    mixins: [ ],
    getInitialState: function() {
      console.log(this.props);
        return {};
    },
    render: template
});

module.exports = TestDialog;
