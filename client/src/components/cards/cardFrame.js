'use strict';

var React = require('react/addons');
var template = require('./cardFrame.rt');

var CardFrame =  React.createClass({
    mixins: [ ],
    render: template,
    getContentClass: function (){
        return 'content ' + this.props.contentClass;
    }
});

module.exports = CardFrame;
