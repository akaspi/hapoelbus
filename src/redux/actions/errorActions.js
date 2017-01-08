import { REPORT_ERROR } from './actionTypes';
const Translations = require('../../utils/translations');

export const reportError = (message = Translations.ERROR_MESSAGES.GENERAL) => ({
  type: REPORT_ERROR,
  message
});