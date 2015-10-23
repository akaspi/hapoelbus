'use strict';

var React = require('react/addons');
var template = require('./cardsDisplayer.rt');
var muiMixin = require('../mixins/mui-mixin');

var CardsDisplayer =  React.createClass({
    mixins: [muiMixin],
    getInitialState: function() {
      console.log(this.props);
        return {};
    },
    render: template
});

module.exports = CardsDisplayer;
