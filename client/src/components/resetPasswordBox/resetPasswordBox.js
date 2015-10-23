'use strict';

var React = require('react');
var template = require('./resetPasswordBox.rt');
var muiMixin = require('../mixins/mui-mixin');


var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            email: '',
            tempPassword: '',
            newPassword: ''
        };
    },
    changePassword: function() {

    },
    render: template
});

module.exports = LoginBox;
