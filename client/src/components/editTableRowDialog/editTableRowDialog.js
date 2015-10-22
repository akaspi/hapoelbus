'use strict';

var React = require('react/addons');

var template = require('./editTableRowDialog.rt');
var muiMixin = require('../mixins/mui-mixin');

var Table = React.createClass({
    mixins: [muiMixin],
    propTypes: {
        data: React.PropTypes.object,
        metadata: React.PropTypes.array,
        onRowSelection: React.PropTypes.func
    },
    getInitialState: function () {
        this.selectedUserDataIndex = [];
        return {};
    },
    onRowSelection: function (selectedRow) {
        this.selectedUserDataIndex = selectedRow;
        var dataKeys = _.keys(this.props.data);
        var keysOfSelectedRows = _.map(selectedRow, function (rowIndex) {
            return dataKeys[rowIndex]
        });
        this.props.onRowSelection(_.pick(this.props.data, keysOfSelectedRows));
    },
    render: template
});

module.exports = Table;
