'use strict';

var utils = require('../utils.js');
var _ = require('lodash');
var ref = utils.getFirebaseRef();

var args = process.argv.splice(2);

if (_.isEmpty(args)) {
    console.log('Service should get an email as an argument');
    process.exit();
}

utils.loginAsAdmin(ref, function() {
   ref.child('usersData').once('value', function(snapshot) {
       var adminUserData = _.pick(snapshot.val(), function(val) {
           return _.isEqual(val.email, args[0]);
       });
       if (_.size(adminUserData) !== 1) {
           console.log('error: more/less than 1 user data matches the given email');
           process.exit();
       }
       var adminsPartial = {};
       var adminUid = _.keys(adminUserData)[0];
       adminsPartial[adminUid] = true;
       ref.child('admins').update(adminsPartial, function() {
           console.log('Added successfully\n');
           process.exit();
       });
   });
});
