'use strict';

var React = require('react/addons');
var template = require('./adminDashboard.rt.js');

var AdminDashboard = React.createClass({
    getInitialState: function() {
      return {
          isFetchingData: true,
          usersData: [
              {
                  displayName: 'עמית',
                  email: 'akaspi@wix.com',
                  isPremium: false,
                  phone: '0525335402'
              },
              {
                  displayName: 'דנה',
                  email: 'dana@wix.com',
                  isPremium: true,
                  phone: '1234567890'
              }
          ]
      }
    },
    render: template
});

module.exports = AdminDashboard;