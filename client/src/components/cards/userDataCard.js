'use strict';

var React = require('react/addons');
var template = require('./userDataCard.rt');
var muiMixin = require('../mixins/mui-mixin');


var UserDataCard = React.createClass({
    mixins: [muiMixin],
    displayName: 'userDataCard',
    componentDidMount: function () {
        console.log(this.props);
    },
    getDisplayName: function () {
        var userInfo = this.props.data.info;
        return (userInfo && userInfo.displayName) || '';
    },
    getEmail: function (){
        var userInfo = this.props.data.info;
        return (userInfo && userInfo.email) || 'some email';
    },
    getPhone: function (){
        var userInfo = this.props.data.info;
        return (userInfo && userInfo.phone) || '050-1111111';
    },

    render: template
});

module.exports = UserDataCard;
