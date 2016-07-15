/* eslint-disable no-console */

const config = require('../../conf/server.config.json');

const _ = require('lodash');
const sendGrid = require('sendgrid');

const dbAPI = require('../../common/DatabaseAPI').init(config.firebase);
const Promise = require('bluebird');

const TASK_NAME = 'sendPendingMails';
const PENDING_MAILS_COLLECTION_NAME = 'pendingMails';
const TEMPLATE_IDS = {
  WELCOME_MAIL: 'dbccfed0-51ff-4b1b-b0d0-ee8466b6fcf0'
};

function getToParam(recipients) {
  return _.map(recipients, (mailAddress) => ({ email: mailAddress }));
}

function getRequestBody(recipients, templateId, subs) {
  const reqBody = {};
  reqBody.from = { email: config.sendGrid.fromAddress };
  reqBody.content = [{ type: 'text/plain', value: 'SOME CONTENT' }];
  reqBody.template_id = templateId;
  reqBody.personalizations = [{
    to: getToParam(recipients),
    substitutions: subs || {}
  }];
  return reqBody;
}

function sendTemplate(recipients, templateId, substitutions) {
  return new Promise((resolve, reject) => {
    const sg = sendGrid.SendGrid(config.sendGrid.apiToken); // eslint-disable-line new-cap
    const requestPost = sg.emptyRequest();

    requestPost.body = getRequestBody(recipients, templateId, substitutions);
    requestPost.method = 'POST';
    requestPost.path = '/v3/mail/send';

    sg.API(requestPost, (response) => { // eslint-disable-line new-cap
      if (response.statusCode === 202) {
        resolve();
      }
      reject();
    });
  });
}

const removeMail = (mailId) => dbAPI.remove('pendingMails/' + mailId);

const sendWelcomeMails = (pendingMails) => {
  const pendingWelcomeMails = _.pickBy(pendingMails, { type: 'welcomeMail' });
  const sendPromises = _.map(pendingWelcomeMails, (pendingMail, mailId) =>
    sendTemplate(pendingMail.toArr, TEMPLATE_IDS.WELCOME_MAIL, {})
      .then(() => removeMail(mailId))
  );
  return Promise.all(sendPromises);
};

console.log('Task [' + TASK_NAME + '] started at: ' + new Date());
dbAPI.read(PENDING_MAILS_COLLECTION_NAME)
  .then(sendWelcomeMails)
  .then(() => console.log('Task [' + TASK_NAME + '] ended successfully at: ' + new Date()))
  .catch(() => console.log('Task [' + TASK_NAME + '] failed at: ' + new Date()))
  .then(() => process.exit());