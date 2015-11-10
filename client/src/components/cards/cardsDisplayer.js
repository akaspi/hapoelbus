'use strict';

var React = require('react');
var template = require('./cardsDisplayer.rt');

var CardsDisplayer = React.createClass({
    displayName: 'CardsDisplayer',
    getCardActions: function (index) {
        var self = this;
        return [
            { label: 'Edit', onClick: function() { self.props.onEdit(index) } },
            { label: 'Remove', onClick: function() { self.props.onRemove(index) } }
        ];

    },
    render: template
});

module.exports = CardsDisplayer;
