'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./siteHeader.rt.js');
var userActions = require('../../actions/userActions');

var Root = React.createClass({
    mixins: [muiMixin],
    handleOpenLoginDialog: function (){
        this.refs.loginDialog.show();
    },
    logOut: function() {
        userActions.logOut();
    },
    render: template
});

module.exports = Root;