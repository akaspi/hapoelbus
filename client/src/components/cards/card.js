'use strict';

var React = require('react');
var template = require('./card.rt');

var Card =  React.createClass({
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
            color: React.PropTypes.oneOf(['Green', 'Red']),
            label: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
        return {};
    },
    onCardEdit: function() {
      if (_.isFunction(this.props.onEdit)) {
          this.props.onEdit(this.props.id);
      }
    },
    render: template
});

module.exports = Card;
