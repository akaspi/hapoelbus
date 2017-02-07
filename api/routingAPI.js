import _ from 'lodash';
import { computed } from 'mobx';

export default class RoutingAPI {
  constructor(stores) {
    this.stores = stores;
  }
  
  @computed get currentPageId() {
    const currentRouting = _.last(this.stores.routingStore.history);
    return currentRouting.pageId;
  }

  navigateTo = (pageId, params) => this.stores.routingStore.navigateTo(pageId, params)
  
}