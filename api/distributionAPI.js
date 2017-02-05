import * as dbDistribution from '../database/dbDistribution';


export default class DistributionAPI {
  constructor(stores) {
    this.stores = stores;
  }

  sendTemplateEmail = dbDistribution.sendTemplateEmail;

  sendCustomEmail = dbDistribution.sendCustomEmail;

  sendSMS = dbDistribution.sendSMS;
}