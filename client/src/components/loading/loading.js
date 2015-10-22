'use strict';

var React = require('react/addons');

var template = require('./loading.rt');
var muiMixin = require('../mixins/mui-mixin');

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    render: template
});

module.exports = MyAccount;
