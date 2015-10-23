'use strict';

var React = require('react');
var template = require('./cardFrame.rt');

var muiMixin = require('../mixins/mui-mixin');
var mui = require('material-ui');
var menuIconButton = React.createElement(mui.IconButton, {
    style: {
        width: '24px',
        height: '24px',
        color: '#7f8c8d',
        fontSize: '14px',
        padding: 0
    }
}, React.createElement('i', { className: 'fa fa-ellipsis-v' }));
var editMenuItemIconElement = React.createElement('i', { className: 'fa fa-pencil' });
var removeMenuItemIconElement = React.createElement('i', { className: 'fa fa-trash-o' });

var CardFrame =  React.createClass({
    mixins: [muiMixin],
    render: template,
    getContentClass: function (){
        return 'content ' + this.props.contentClass;
    },
    getMenuIconButton: function () {
        return menuIconButton;
    },
    getEditMenuItemIcon: function() {
        return editMenuItemIconElement;
    },
    getRemoveMenuItemIcon: function() {
        return removeMenuItemIconElement;
    }
});

module.exports = CardFrame;
