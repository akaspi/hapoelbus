'use strict';

var React = require('react');
var template = require('./cardsDisplayer.rt');

var CardsDisplayer = React.createClass({
    displayName: 'CardsDisplayer',
    getCardActions: function (index) {
        var actions = [];
        if (_.isFunction(this.props.onEdit)) {
            actions.push({ label: 'Edit', onClick: function() { this.props.onEdit(index)}.bind(this) })
        }
        if (_.isFunction(this.props.onRemove)) {
            actions.push({ label: 'Remove', onClick: function() { this.props.onRemove(index)}.bind(this) })
        }
        return actions;
    },
    render: template
});

module.exports = CardsDisplayer;
