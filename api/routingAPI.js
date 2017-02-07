import { computed } from 'mobx';

export default class RoutingAPI {
  constructor(stores) {
    this.stores = stores;

    // this.navigateTo = this.stores.routingStore.navigateTo;
  }

}