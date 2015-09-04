'use strict';

var React = require('react/addons');
var template = require('./updateUserDataModal.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var modalActions = require('../../../actions/modalActions');
var userActions = require('../../../actions/userActions');

var ModalLayer =  React.createClass({
    mixins: [ muiMixin, React.addons.LinkedStateMixin ],
    getInitialState: function() {
        return this.props.userData[_.keys(this.props.userData)[0]];
    },
    componentDidMount: function() {
        this.refs.modal.show();
    },
    onDialogClose: function() {
        modalActions.hideCurrentModal();
    },
    toggleIsPremium: function(e, val) {
        this.setState({isPremium: val});
    },
    updateUserData: function() {
        userActions.updateUserData(this.state, _.keys(this.props.userData)[0]);
        modalActions.hideCurrentModal();
    },
    render: template
});

module.exports = ModalLayer;