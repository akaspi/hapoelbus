'use strict';

var React = require('react/addons');
var template = require('./cardsDisplayer.rt.js');

var CardsDisplayer =  React.createClass({
    mixins: [ ],
    getInitialState: function() {
      console.log(this.props);
        return {};
    },
    render: template
});

module.exports = CardsDisplayer;