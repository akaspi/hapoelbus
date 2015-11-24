'use strict';

var React = require('react');
var template = require('./loading.rt');

var Loading =  React.createClass({
    propTypes: {
      text: React.PropTypes.string
    },
    getDefaultProps: function() {
      return {
          text: 'טוען נתונים...'
      };
    },
    render: template
});

module.exports = Loading;
