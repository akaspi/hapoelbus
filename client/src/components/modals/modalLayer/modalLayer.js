'use strict';

var React = require('react/addons');
var template = require('./modalLayer.rt.js');

var modalStore = require('../../../stores/modalStore');

var ModalLayer =  React.createClass({
    mixins: [ React.addons.LinkedStateMixin ],
    getInitialState: function () {
        return modalStore.getAll();
    },
    componentDidMount: function () {
        modalStore.registerToChange(this.onModalStoreDataChanged);
    },
    onModalStoreDataChanged: function(modalStoreData) {
        var newState = _.pick(modalStoreData, _.keys(this.state));
        this.setState(newState);
    },
    componentWillUnmount: function() {
        modalStore.removeChangeListener(this.onModalStoreDataChanged);
    },
    render: template
});

module.exports = ModalLayer;