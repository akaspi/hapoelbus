import * as clientDB from '../../utils/clientDB';
import * as loadingActions from './loadingActions';
import * as errorActions from './errorActions';

const PATH_MAP = {
  EMAILS: {
    TEMPLATES: 'pendingEmails/templates',
    CUSTOM: 'pendingEmails/custom'
  },
  SMS: 'pendingSMS',
};

export const sendTemplateEmail = (recipients, templateId, substitutions) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.push(`${PATH_MAP.EMAILS.TEMPLATES}`, ({ recipients, templateId, substitutions }))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const sendCustomEmail = (recipients, subject, content) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.push(`${PATH_MAP.EMAILS.CUSTOM}`, ({ recipients, subject, content }))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};

export const sendSMS = (to, message) => dispatch => {
  dispatch(loadingActions.startLoading());

  return clientDB.push(`${PATH_MAP.SMS}`, ({ to, message }))
    .catch(() => dispatch(errorActions.reportError()))
    .finally(() => dispatch(loadingActions.stopLoading()));
};