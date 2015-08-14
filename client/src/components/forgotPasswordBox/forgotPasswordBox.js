'use strict';

var React = require('react/addons');
var template = require('./forgotPasswordBox.rt.js');
var muiMixin = require('../mixins/mui-mixin');


var LoginBox =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin, muiMixin ],
    getInitialState: function() {
        return {
            email: ''
        };
    },
    onResetPasswordRequest: function() {

    },
    render: template
});

module.exports = LoginBox;