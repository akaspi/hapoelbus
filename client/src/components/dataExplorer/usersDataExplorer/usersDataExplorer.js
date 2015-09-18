'use strict';

var React = require('react/addons');

var template = require('./usersDataExplorer.rt.js');
var muiMixin = require('../../mixins/mui-mixin');
var _ = require('lodash');

var usersDataActions = require('../../../actions/userActions');

var dataConverterUtil = require('../../../utils/dataConverterUtil');
var dataSchemas = require('../../../utils/dataSchemas');

var GamesExplorer = React.createClass({
    getTableSchema: function() {
        return dataSchemas.UserData;
    },
    getTableData: function() {
        return this.props.usersData;
    },
    onUpdateGame: function(uid, userData) {
        usersDataActions.updateUserData(uid, userData);
    },
    onRemoveGame: function(uid) {
        console.log('remove game');
    },
    render: template
});

module.exports = GamesExplorer;
