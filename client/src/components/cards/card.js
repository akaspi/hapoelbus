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
        ribbon: React.PropTypes.shape({
            color: React.PropTypes.oneOf(['Green', 'Red', 'Blue']),
            label: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {};
    },
    getRibbonClasses: function () {
        return {
            "card-ribbon": true,
            "ribbon-green": this.props.ribbon.color === 'Green',
            "ribbon-red": this.props.ribbon.color === 'Red',
            "ribbon-blue": this.props.ribbon.color === 'Blue'
        };
    },
    onCardEdit: function () {
        if (_.isFunction(this.props.onEdit)) {
            this.props.onEdit(this.props.id);
        }
    },
    onCardRemove: function() {
        if (_.isFunction(this.props.onRemove)) {
            this.props.onRemove(this.props.id);
        }
    },
    render: template
});

module.exports = Card;
