'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var template = require('./siteHeader.rt.js');
var userActions = require('../../actions/userActions');
var auth = require('../../api/auth');

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
        userActions.logOut();
    },
    render: template
});

module.exports = Root;