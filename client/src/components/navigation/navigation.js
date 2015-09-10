'use strict';

var React = require('react/addons');
var muiMixin = require('../mixins/mui-mixin');
var _ = require('lodash');

var template = require('./navigation.rt.js');

var AccountData = React.createClass({
    mixins: [React.addons.LinkedStateMixin, muiMixin],
    propTypes: {
        labels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        onLabelClick: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            selectedIndex: 0,
            toggleExpand: false
        }
    },
    onNavItemClick: function (index) {
        this.setState({selectedIndex: index, toggleExpand: false});
        if (_.isFunction(this.props.onLabelClick)) {
            this.props.onLabelClick(index);
        }
    },
    toggleNav: function() {
        this.setState({toggleExpand: !this.state.toggleExpand});
    },
    render: template
});

module.exports = AccountData;