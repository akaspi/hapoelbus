'use strict';

var utils = require('../utils/dbUtils.js');
var _ = require('lodash');
var ref = utils.getFirebaseRef();

var args = process.argv.splice(2);

if (_.isEmpty(args)) {
    console.log('Service should get an email as an argument');
    process.exit();
}

utils.loginAsAdmin(ref, function () {
    var adminUid = args[0];
    ref.child('admins').child(adminUid).set(true, function (error) {
        if (error) {
            console.log('Failed to add admin');
        } else {
            console.log('Admin was added successfully');
        }
        process.exit();
    });
});
