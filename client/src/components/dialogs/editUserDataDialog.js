'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');
var muiMixin = require('../mixins/mui-mixin');

var TestDialog =  React.createClass({
    mixins: [ muiMixin, React.addons.LinkedStateMixin],
    getInitialState: function() {
      console.log(this.props);
        return {
            displayName: this.props.data.userData.info.displayName,
            phone: this.props.data.userData.info.phone,
            email: this.props.data.userData.info.email,
            errorMsg: ''
        };
    },
    render: template
});

module.exports = TestDialog;
