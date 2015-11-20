'use strict';

var React = require('react');
var template = require('./card.rt');

var Card = React.createClass({
    displayName: 'Card',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        subtitles: React.PropTypes.arrayOf(React.PropTypes.string, React.PropTypes.number),
        actions: React.PropTypes.arrayOf(React.PropTypes.shape({
            onClick: React.PropTypes.func,
            label: React.PropTypes.string,
            iconClass: React.PropTypes.string
        })),
        imageUrl: React.PropTypes.string,
        color: React.PropTypes.string,
        ribbon: React.PropTypes.shape({
            color: React.PropTypes.oneOf(['Green', 'Red', 'Blue']),
            label: React.PropTypes.string.isRequired
        })
    },
    getDefaultProps: function () {
        return {
            imageUrl: 'https://secure.gravatar.com/avatar/59029276955677351421b3ff6bf5ee4c?d=retro'
        };
    },
    getCardColor: function () {
        switch (this.props.color) {
            case 'Green':
                return 'card-green';
            case 'Blue':
                return 'card-blue';
        }
    },
    render: template
});

module.exports = Card;
