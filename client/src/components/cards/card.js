'use strict';

var React = require('react');
var template = require('./card.rt');

var Card = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        subtitles: React.PropTypes.arrayOf(React.PropTypes.string, React.PropTypes.number),
        //onEdit: React.PropTypes.func,
        //onRemove: React.PropTypes.func,
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
    render: template
});

module.exports = Card;
