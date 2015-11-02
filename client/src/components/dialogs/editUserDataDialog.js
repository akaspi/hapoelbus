'use strict';

var React = require('react');
var template = require('./editUserDataDialog.rt');
var muiMixin = require('../mixins/mui-mixin');

var actionsCreator = require('../../actions/actionsCreator');
var actionsConstants = require('../../actions/actionsConstants');


var TestDialog =  React.createClass({
    mixins: [ muiMixin, React.addons.LinkedStateMixin],
    getInitialState: function() {
      console.log(this.props);
        return {
            displayName: this.props.data.userData.info.displayName,
            phone: this.props.data.userData.info.phone,
            email: this.props.data.userData.info.email,
            maxSeats: this.props.data.userData.seasonTicket.maxSeats,
            ticketId: this.props.data.userData.seasonTicket.ticketId,
            smsList: !!this.props.data.userData.distribution.sms,
            emailList: !!this.props.data.userData.distribution.email,
            errorMsg: ''
        };
    },
    onSmsListChange: function (value){
      this.setState({smsList: value});
    },

    onEmailListChange: function (value){
        this.setState({emailList: value});
    },

    updateUserData: function (){
        console.log('save')
    },

    render: template
});

module.exports = TestDialog;
