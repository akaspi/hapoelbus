'use strict';

var React = require('react/addons');
var template = require('./userDataCard.rt.js');

var UserDataCard =  React.createClass({
    mixins: [ ],
    componentDidMount: function() {
      console.log(this.props);
    },
    render: template
});

module.exports = UserDataCard;