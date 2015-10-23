'use strict';

var React = require('react');
var template = require('./cardsDisplayer.rt');
var muiMixin = require('../mixins/mui-mixin');

var CardsDisplayer =  React.createClass({
    mixins: [muiMixin],
    render: template
});

module.exports = CardsDisplayer;
