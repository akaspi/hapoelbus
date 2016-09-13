/* eslint-disable no-console */
const _ = require('lodash');
const config = require('../../conf/server.config.json');
const sendGrid = require('sendgrid')(config.sendGrid.apiToken);
const db = require('../utils/serverDB');
const Promise = require('bluebird');

const PENDING_TEMPLATE_EMAILS_PATH = 'pendingEmails/templates';
const PENDING_CUSTOM_EMAILS_PATH = 'pendingEmails/custom';

const isEmailValid = emailAddress => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress);
};

const createRecipientsArray = recipients => _(recipients)
  .compact()
  .filter(isEmailValid)
  .map(email => ({ email }))
  .value();

const send = request => new Promise((resolve, reject) => {
  sendGrid.API(request, (error, response) => { // eslint-disable-line new-cap
    if (error || response.statusCode !== 202) {
      return reject();
    }
    return resolve();
  });
});

const sendCustomEmail = (recipients, subject, content) => {
  const request = sendGrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: createRecipientsArray(recipients),
          subject
        }
      ],
      from: {
        email: config.sendGrid.fromAddress
      },
      content: [
        {
          type: 'text/html',
          value: content
        }
      ]
    }
  });

  return send(request);
};

const sendTemplate = (recipients, templateId, substitutions) => {
  const request = sendGrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: createRecipientsArray(recipients),
          substitutions: substitutions || {}
        }
      ],
      from: {
        email: config.sendGrid.fromAddress
      },
      template_id: templateId
    }
  });

  return send(request);
};

const exec = () => {
  const readPromises = [db.read(PENDING_TEMPLATE_EMAILS_PATH), db.read(PENDING_CUSTOM_EMAILS_PATH)];
  return Promise.all(readPromises)
    .spread((pendingTemplates, pendingCustom) => {
      console.log('have read results...');
      const templatePromises = _.map(pendingTemplates, (mailData, mailId) =>
        sendTemplate(mailData.recipients, mailData.templateId, mailData.substitutions)
          .then(() => db.remove(PENDING_TEMPLATE_EMAILS_PATH + '/' + mailId))
      );

      const customMailsPromises = _.map(pendingCustom, (mailData, mailId) =>
        sendCustomEmail(mailData.recipients, mailData.subject, mailData.content)
          .then(() => db.remove(PENDING_CUSTOM_EMAILS_PATH + '/' + mailId))
      );
      console.log('customMailsPromises: ' + customMailsPromises);
      return Promise.all(templatePromises.concat(customMailsPromises));
    })
    .then(results => {
      if (results.length) {
        console.log(results.length + ' emails were sent successfully!');
      } else {
        console.log('No pending emails were found...');
      }
    })
    .catch(e => console.log('Failed to send pending emails!', e));
};

module.exports = { exec };