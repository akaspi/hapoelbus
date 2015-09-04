'use strict';

var React = require('react/addons');
var template = require('./updateUserDataModal.rt.js');
var muiMixin = require('../../mixins/mui-mixin');

var modalActions = require('../../../actions/modalActions');

var ModalLayer =  React.createClass({
    mixins: [ muiMixin, React.addons.LinkedStateMixin ],
    getInitialState: function() {
        return this.props.userData;
    },
    componentDidMount: function() {
        this.refs.modal.show();
    },
    onDialogClose: function() {
        modalActions.hideCurrentModal();
    },
    render: template
});

module.exports = ModalLayer;