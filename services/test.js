var Firebase = require('firebase');
var db = require('./dbUtils');
var ref = new Firebase('https://hapoelbus-testapp.firebaseio.com/');
var _ = require('lodash');

function sendWelcomeMail(uid, userInfo) {
    return db.push('pendingEmails', {
            templateId: 'welcomeMail',
            to: [userInfo.email],
            subs: {USER: userInfo.displayName}
        })
        .then(function () {
            return db.set('pendingEmails2' + '/' + uid, true);
        })
        .then(function () {
            console.log('Welcome email was added to pending mails for ' + userInfo.email);
        })
        .catch(function () {
            console.log('Failed to add welcome mail to pending mails for ' + userInfo.email);
        })
}

var data = {
    uid1: {email: 'kaspi.amit@gmail.com', displayName:'AMIT'},
    uid2: {email: 'kaspi.amit@gmail.com', displayName:'AMIT2'},
    uid3: {email: 'kaspi.amit@gmail.com', displayName:'AMIT3'}
};

function all() {
    var arr = _.map(data, function(val, key) {
        return sendWelcomeMail(key, val);
    });
    return Promise.all(arr);
}

db.loginAsAdmin().then(function(){
    console.log('authenticated');
    all().then(function() {
        console.log('DONE');
        process.exit();
    });

});
