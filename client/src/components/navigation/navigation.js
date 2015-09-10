'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var _ = require('lodash');

var template = require('./navigation.rt.js');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string
        })).isRequired,
        onItemClick: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            selectedItem: _.first(this.props.items),
            toggleExpand: false
        }
    },
    onNavItemClick: function (item) {
        this.setState({selectedItem: item, toggleExpand: false});
        if (_.isFunction(this.props.onItemClick)) {
            this.props.onItemClick(item);
        }
    },
    toggleNav: function() {
        this.setState({toggleExpand: !this.state.toggleExpand});
    },
    render: template
});

module.exports = AccountData;