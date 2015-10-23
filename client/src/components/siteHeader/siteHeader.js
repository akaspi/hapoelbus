'use strict';

var React = require('react');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./siteHeader.rt');
var authActions = require('../../actions/authActions');
var auth = require('../../DAL/auth');

var Root = React.createClass({
    mixins: [muiMixin],
    handleOpenLoginDialog: function (){
        this.refs.loginDialog.show();
    },
    getProfilePictureURL: function (){
        return auth.getUserAuthPicture();
    },
    hasProfilePicture: function (){
        return auth.hasProfilePicture();
    },
    logOut: function() {
        authActions.logOut();
    },
    render: template
});

module.exports = Root;
