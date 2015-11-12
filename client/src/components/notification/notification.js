'use strict';

var React = require('react');
var template = require('./notification.rt');

var muiMixin = require('../mixins/mui-mixin');

var Notification =  React.createClass({
    //componentDidMount: function() {
    //    this.refs.snackbar.show();
    //},
    render: template
});

module.exports = Notification;
