import * as dbDistribution from '../../database/dbDistribution';
import { push } from '../../database/utils/db';

describe('dbDistribution', () => {

  describe('sendTemplateEmail', () => {

    it('send template email', done => {
      const recipients = ['spider@pig.com', 'can@he.swing'];
      const templateId = 'someTemplateId';
      const substitutions = { a: 1, b: 2 };

      push.and.returnValue(Promise.resolve('someMailId'));

      dbDistribution.sendTemplateEmail(recipients, templateId, substitutions).then(emailId => {
        expect(push).toHaveBeenCalledWith('pendingEmails/templates', { recipients, templateId, substitutions });
        expect(emailId).toEqual('someMailId');
        done();
      })
    });
  });

  describe('sendCustomEmail', () => {

    it('should send custom email', done => {
      const recipients = ['spider@pig.com', 'can@he.swing'];
      const subject = 'subject';
      const content = 'content';

      push.and.returnValue(Promise.resolve('someMailId'));

      dbDistribution.sendCustomEmail(recipients, subject, content).then(emailId => {
        expect(push).toHaveBeenCalledWith('pendingEmails/custom', { recipients, subject, content });
        expect(emailId).toEqual('someMailId');
        done();
      });
    });

  });

  describe('sendSMS', () => {

    it('should send sms', done => {
      const to = ['0534456756', '0508774928'];
      const message = 'sms message';

      push.and.returnValue(Promise.resolve('someSmsId'));

      dbDistribution.sendSMS(to, message).then(smsId => {
        expect(push).toHaveBeenCalledWith('pendingSMS', { to, message });
        expect(smsId).toEqual('someSmsId');
        done();
      });
    });

  });

});