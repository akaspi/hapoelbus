'use strict';

var React = require('react');
var template = require('./card.rt');

var Card = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        subtitles: React.PropTypes.arrayOf(React.PropTypes.string),
        onEdit: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        customActions: React.PropTypes.arrayOf(React.PropTypes.shape({
            onClick: React.PropTypes.func,
            label: React.PropTypes.string,
            iconClass: React.PropTypes.string
        })),
        imageUrl: React.PropTypes.string,
        color: React.PropTypes.string
    },
    getInitialState: function () {
        return {};
    },
    getCardColor: function () {
        switch (this.props.color) {
            case 'Green':
                return 'card-green';
            case 'Blue':
                return 'card-blue';
        }
    },
    onCardEdit: function () {
        if (_.isFunction(this.props.onEdit)) {
            this.props.onEdit(this.props.id);
        }
    },
    onCardRemove: function () {
        if (_.isFunction(this.props.onRemove)) {
            this.props.onRemove(this.props.id);
        }
    },
    render: template
});

module.exports = Card;
