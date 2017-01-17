import { push } from './utils/db';

const PENDING_TEMPLATES_EMAILS_PATH = 'pendingEmails/templates';
const PENDING_CUSTOM_EMAILS_PATH = 'pendingEmails/custom';
const PENDING_CUSTOM_SMS_PATH = 'pendingSMS';


export function sendTemplateEmail(recipients, templateId, substitutions) {
  return push(PENDING_TEMPLATES_EMAILS_PATH, ({ recipients, templateId, substitutions }));
}

export function sendCustomEmail(recipients, subject, content) {
  return push(PENDING_CUSTOM_EMAILS_PATH, ({ recipients, subject, content }));
}

export function sendSMS(to, message) {
  return push(PENDING_CUSTOM_SMS_PATH, ({ to, message }));
}
