'use strict';

var api_key = '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';

function send() {
    var sendgrid = require("sendgrid")('hapoelbus', api_key);
    var email = new sendgrid.Email();

    email.addTo("kaspi.amit@gmail.com");
    email.setFrom("hapoelbus@gmail.com");
    email.setSubject("Sending with SendGrid is Fun");
    email.setHtml("and easy to do anywhere, even with Node.js");

    sendgrid.send(email);
}

module.exports = {
    send: send
};
