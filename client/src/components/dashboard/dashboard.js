'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');

var template = require('./dashboard.rt.js');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    render: template
});

module.exports = AccountData;