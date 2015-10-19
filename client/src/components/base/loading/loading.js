'use strict';

var React = require('react/addons');
var template = require('./loading.rt.js');

var muiMixin = require('../../mixins/mui-mixin');

var Loading =  React.createClass({
    propTypes: {
      text: React.PropTypes.string
    },
    mixins: [ muiMixin ],
    getDefaultProps: function() {
      return {
          text: 'טוען נתונים...'
      };
    },
    render: template
});

module.exports = Loading;