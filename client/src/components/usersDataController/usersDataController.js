'use strict';

var React = require('react/addons');

var template = require('./usersDataController.rt.js');
var muiMixin = require('../mixins/mui-mixin');

var USERS_DATA_FILTER_OPTIONS = {
    ALL: 'all',
    PAID: 'paid',
    FREE: 'free'
};

var MyAccount = React.createClass({
    mixins: [ muiMixin ],
    getInitialState: function () {
        return {
            filter: USERS_DATA_FILTER_OPTIONS.ALL,
            selectedUserDataIndex: []
        }
    },
    getUsersDataFilterItems: function() {
        return [
            { payload: USERS_DATA_FILTER_OPTIONS.ALL, text: 'כל המשתמשים' },
            { payload: USERS_DATA_FILTER_OPTIONS.PAID, text: 'מנויים בלבד' },
            { payload: USERS_DATA_FILTER_OPTIONS.FREE, text: 'חד פעמיים' }
        ];
    },
    getDataToDisplay: function() {
        switch (this.state.filter) {
            case USERS_DATA_FILTER_OPTIONS.ALL:
                return this.props.usersData;
            case USERS_DATA_FILTER_OPTIONS.PAID:
                return _.pick(this.props.usersData, function(val) { return val.maxSeats > 0});
            case USERS_DATA_FILTER_OPTIONS.FREE:
                return _.pick(this.props.usersData, function(val) { return !val.maxSeats});
        }
    },
    filterUsersData: function(e, index, filterItem) {
        this.setState({ filter: filterItem.payload });
    },
    onRowSelection: function(selectedRow) {
        this.setState({ selectedUserDataIndex: selectedRow });
    },
    getSelectedRowData: function() {
        var selectedRowIndex = _.first(this.state.selectedUserDataIndex);
        if (!_.isNumber(selectedRowIndex)) {
            return {};
        }
        return _.values(this.state.dataToDisplay)[selectedRowIndex];
    },
    openEditingPanel: function() {
        this.refs.editUserData.show();
    },
    render: template
});

module.exports = MyAccount;
