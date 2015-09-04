'use strict';

var React = require('react/addons');
var template = require('./myAccount.rt.js');
var muiMixin = require('../mixins/mui-mixin');

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return {
            adminView: false
        };
    },
    toggleAdminView: function(e, val) {
        this.setState({adminView: val});
    },
    render: template
});

module.exports = MyAccount;
