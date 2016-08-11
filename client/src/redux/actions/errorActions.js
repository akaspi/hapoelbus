import { REPORT_ERROR } from './actionTypes';
import * as Constants from '../../utils/constants';

export const reportError = (message = Constants.ERRORS.GENERAL) => ({
  type: REPORT_ERROR,
  message
});