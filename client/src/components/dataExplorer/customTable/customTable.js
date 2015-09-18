'use strict';

var React = require('react/addons');

var template = require('./customTable.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var deepLinkStateMixin = require('../../mixins/deepLinkStateMixin');
var dataConverterUtil = require('../../../utils/dataConverterUtil');
var _ = require('lodash');

var Table = React.createClass({
    mixins: [deepLinkStateMixin],
    propTypes: {
        schema: React.PropTypes.object.isRequired,
        data: React.PropTypes.object.isRequired,
        onCreate: React.PropTypes.func,
        onUpdate: React.PropTypes.func,
        onRemove: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            selectedKey: null,
            selectedData: {},
            editedData: {},
            updateMode: false,
            createMode: false
        };
    },
    onRowSelection: function(selectedRows) {
        var selectedKey = _.keys(this.props.data)[_.first(selectedRows)];
        var selectedData = this.props.data[selectedKey];
        this.setState({
            selectedKey: selectedKey || null,
            selectedData: _.clone(selectedData) || {}
        });
    },
    onDateChange: function(dataKey, nill, newDate) {
        var newState = _.clone(this.state);
        var utcDate = Date.UTC(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate(), newDate.getUTCHours(), newDate.getUTCMinutes());
        newState.editedData[dataKey] = utcDate;
        this.setState(newState);
    },
    onTimeChange: function(dataKey, nill, newDate) {
        var newState = _.clone(this.state);
        var utcDate = Date.UTC(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate(), newDate.getUTCHours(), newDate.getUTCMinutes());
        newState.editedData[dataKey] = utcDate;
        this.setState(newState);
    },
    onToggleChange: function(dataKey, e, newVal) {
        var newState = _.clone(this.state);
        newState.editedData[dataKey] = newVal;
        this.setState(newState);
    },
    onEnumChanged: function(dataKey, e, selectedIndex, menuItem) {
        var newState = _.clone(this.state);
        newState.editedData[dataKey] = menuItem.value;
        this.setState(newState);
    },
    goToUpdateMode: function() {
        this.setState({ updateMode: true, editedData: _.clone(this.state.selectedData) });
    },
    goToCreateMode: function() {
        this.setState({ createMode: true, editedData: {} });
    },
    goToViewMode: function() {
        this.setState({
            updateMode: false,
            createMode: false,
            editedData: {}
        });
    },
    onCreate: function() {
        if (_.isFunction(this.props.onCreate)) {
            this.props.onCreate(this.state.editedData);
        }
    },
    onUpdate: function() {
        if (_.isFunction(this.props.onUpdate)) {
            this.props.onUpdate(this.state.selectedKey, this.state.editedData);
        }
    },
    onRemove: function() {
        if (_.isFunction(this.props.onRemove)) {
            this.props.onRemove(this.state.selectedKey);
        }
    },
    testClickRow: function() {
      console.log('rowWasClicked');
    },
    render: template
});

module.exports = Table;
