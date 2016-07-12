const _ = require('lodash');
const config = require('../config.server.json');
const Promise = require('bluebird');
const dbAPI = require('../common/DatabaseAPI').init(config.firebase);

const TASK_NAME = 'createWelcomeMails';
const PENDING_MAILS_COLLECTION_NAME = 'pendingMails';
const USERS_INFO_COLLECTION_NAME = 'usersInfo';
const NEW_USER_PROPERTY_NAME = 'shouldSendWelcomeMail';

const isValidEmail = (email) => {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(email);
};

const removeNewUserProperty = (usersInfo) => {
  const uidArr = _.keys(usersInfo);
  const removePromises = _.map(uidArr, (uid) => dbAPI.remove([USERS_INFO_COLLECTION_NAME, uid, NEW_USER_PROPERTY_NAME].join('/')));

  return Promise.all(removePromises);
};

const addEmailsToPendingListIfNeeded = (usersInfo) => {
  const newUsersInfo = _.pickBy(usersInfo, NEW_USER_PROPERTY_NAME);
  if (_.isEmpty(newUsersInfo)) {
    console.log('No new users detected');
    return null;
  }

  const newUsersWithValidEmails = _.pickBy(newUsersInfo, (userInfo) => isValidEmail(userInfo.email));
  const validEmailsArr = _.map(newUsersWithValidEmails, 'email');

  const pendingMail = {
    type: 'welcomeMail',
    toArr: validEmailsArr
  };

  console.log('Creating welcome mail:', pendingMail);
  return dbAPI.push(PENDING_MAILS_COLLECTION_NAME, pendingMail)
    .then(() => removeNewUserProperty(newUsersWithValidEmails));
};

console.log('Task [' + TASK_NAME + '] started at: ' + new Date());
dbAPI.read(USERS_INFO_COLLECTION_NAME)
  .then(addEmailsToPendingListIfNeeded)
  .then(() => console.log('Task [' + TASK_NAME + '] ended successfully at: ' + new Date()))
  .catch((e) => console.log('Task [' + TASK_NAME + '] failed at: ' + new Date() + '. Reason: ' + e))
  .then(() => process.exit());